// Pre-generates responsive WebP variants for every raster image in public/.
//
// Static-export (`output: "export"`) disables Next's built-in image optimizer,
// so we bake the responsive/format work ahead of time here and pair it with a
// custom next/image loader (image-loader.js) that points each request at the
// right variant. Runs automatically via the "prebuild" npm script.
//
// Output: public/_img/<name>-<width>.webp for each WIDTH (capped to the source
// width — never upscaled). The loader references these by the same WIDTH list.

import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

// Keep in sync with WIDTHS in image-loader.js and deviceSizes/imageSizes in
// next.config.ts. These are the only widths any variant is generated at.
const WIDTHS = [128, 384, 640, 960, 1440, 1920];
const QUALITY = 74;

const root = path.resolve(fileURLToPath(import.meta.url), "..", "..");
const PUBLIC = path.join(root, "public");
const OUT = path.join(PUBLIC, "_img");
const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png"]);

async function main() {
  await mkdir(OUT, { recursive: true });

  const entries = await readdir(PUBLIC, { withFileTypes: true });
  const sources = entries
    .filter((e) => e.isFile() && SOURCE_EXT.has(path.extname(e.name).toLowerCase()))
    .map((e) => e.name);

  let generated = 0;
  let skipped = 0;
  let sourcesDone = 0;

  await Promise.all(
    sources.map((name) =>
      limit(async () => {
        const srcPath = path.join(PUBLIC, name);
        const base = name.slice(0, -path.extname(name).length);
        const meta = await sharp(srcPath).metadata();
        const srcWidth = meta.width ?? Math.max(...WIDTHS);

        for (const w of WIDTHS) {
          const target = Math.min(w, srcWidth); // never upscale
          const outPath = path.join(OUT, `${base}-${w}.webp`);

          if (await isFresh(outPath, srcPath)) {
            skipped++;
            continue;
          }

          await sharp(srcPath)
            .resize({ width: target, withoutEnlargement: true })
            .webp({ quality: QUALITY, effort: 4 })
            .toFile(outPath);
          generated++;
        }
        sourcesDone++;
      }),
    ),
  );

  console.log(
    `[optimize-images] ${sourcesDone} sources -> ${generated} variants written, ${skipped} up-to-date (${WIDTHS.length} widths, q${QUALITY})`,
  );
}

// Skip regeneration when the variant already exists and is newer than its source.
async function isFresh(outPath, srcPath) {
  if (!existsSync(outPath)) return false;
  const [o, s] = await Promise.all([stat(outPath), stat(srcPath)]);
  return o.mtimeMs >= s.mtimeMs;
}

// Small concurrency gate so we don't spawn hundreds of sharp pipelines at once.
const MAX = 8;
let active = 0;
const queue = [];
function limit(fn) {
  return new Promise((resolve, reject) => {
    const run = () => {
      active++;
      fn().then(resolve, reject).finally(() => {
        active--;
        if (queue.length) queue.shift()();
      });
    };
    if (active < MAX) run();
    else queue.push(run);
  });
}

main().catch((err) => {
  console.error("[optimize-images] failed:", err);
  process.exit(1);
});

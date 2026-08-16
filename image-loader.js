// Custom next/image loader for the static export.
//
// The site is fully self-hosted: every image is served from a pre-generated
// WebP variant produced by scripts/optimize-images.mjs
// (public/_img/<name>-<width>.webp). Any absolute URL is passed through
// untouched as a defensive fallback.
//
// WIDTHS must match scripts/optimize-images.mjs and next.config.ts sizes.

const WIDTHS = [128, 384, 640, 960, 1440, 1920];

function nearestWidth(width) {
  for (const w of WIDTHS) {
    if (w >= width) return w;
  }
  return WIDTHS[WIDTHS.length - 1];
}

export default function imageLoader({ src, width }) {
  const w = nearestWidth(width);

  // Defensive: leave any absolute URL untouched (no third-party images ship today).
  if (/^https?:\/\//.test(src)) return src;

  const clean = src.split("?")[0];

  // SVGs and already-optimized variants pass through untouched.
  if (clean.endsWith(".svg") || clean.includes("/_img/")) return src;

  const slash = clean.lastIndexOf("/");
  const dir = clean.slice(0, slash); // preserves any basePath prefix
  const file = clean.slice(slash + 1);
  const dot = file.lastIndexOf(".");
  const name = dot === -1 ? file : file.slice(0, dot);

  return `${dir}/_img/${name}-${w}.webp`;
}

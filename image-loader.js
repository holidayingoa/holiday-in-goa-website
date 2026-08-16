// Custom next/image loader for the static export.
//
// Local images are served from pre-generated WebP variants produced by
// scripts/optimize-images.mjs (public/_img/<name>-<width>.webp). Remote Unsplash
// images are rewritten to request the matching width from Unsplash's CDN, which
// already serves modern formats via `auto=format`.
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

  // Remote Unsplash: ask the CDN for this width (keeps auto=format/webp).
  if (/^https?:\/\//.test(src)) {
    if (src.includes("images.unsplash.com")) {
      return /([?&])w=\d+/.test(src)
        ? src.replace(/([?&])w=\d+/, `$1w=${w}`)
        : `${src}${src.includes("?") ? "&" : "?"}w=${w}`;
    }
    return src;
  }

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

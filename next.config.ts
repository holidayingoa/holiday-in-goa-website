import type { NextConfig } from "next";

// When deploying to GitHub Pages (a project page), the site is served from
// https://<org>.github.io/<repo>/ so we need a basePath/assetPrefix.
// Driven by NEXT_PUBLIC_BASE_PATH (set only in the GitHub Actions build),
// so local `npm run dev` / `npm run build` stay at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    // Static export disables the built-in optimizer, so we use a custom loader
    // that points at pre-generated WebP variants (scripts/optimize-images.mjs).
    // Widths below must match WIDTHS in that script and image-loader.js.
    loader: "custom",
    loaderFile: "./image-loader.js",
    deviceSizes: [640, 960, 1440, 1920],
    imageSizes: [128, 384],
  },
};

export default nextConfig;

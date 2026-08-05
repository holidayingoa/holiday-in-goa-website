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
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin the workspace root so an unrelated parent lockfile cannot mislead Next.
  turbopack: {
    root: projectRoot,
  },
  images: {
    // The site ships with branded SVG placeholders in public/images.
    // Allow next/image to serve them. Real photos (jpg/png/webp) work without this.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;

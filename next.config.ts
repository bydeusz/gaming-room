import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
    /**
     * These packages expose their CSS via the `style` condition only; bare `@import` in CSS
     * does not resolve that. Aliasing to files under the project keeps globals.css readable.
     * Paths must be project-relative (not absolute) for Turbopack.
     */
    resolveAlias: {
      "shadcn/tailwind.css": "./node_modules/shadcn/dist/tailwind.css",
      "tw-animate-css": "./node_modules/tw-animate-css/dist/tw-animate.css",
    },
  },
  serverExternalPackages: ["@prisma/client", "@prisma/adapter-pg"],
};

export default nextConfig;

import type { NextConfig } from "next";

/**
 * Canonical URL policy (best-iptv.co):
 * - Non-www only
 * - Trailing slash on all routes
 * - HTTPS
 *
 * Note: `redirects` / `rewrites` are NOT supported with `output: "export"`.
 * WWW → non-www and HTTP → HTTPS 301s live in `vercel.json`, `public/_redirects`,
 * and `public/.htaccess` so static hosts still enforce a single canonical host.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

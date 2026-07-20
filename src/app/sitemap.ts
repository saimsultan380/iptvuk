import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";

export const dynamic = "force-static";

const ROUTES = [
  "/",
  "/subscription-plans/",
  "/installation-guide/",
  "/reseller-panel/",
  "/free-trial/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((path) => ({
    url: canonicalUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

import type { Metadata } from "next";

/** Canonical origin — always non-www, HTTPS */
export const SITE_URL = "https://best-iptv.co";

export const SITE_NAME = "Best IPTV";

export const SITE_LOGO_PATH = "/icon.png";
export const SITE_FAVICON_PATH = "/favicon.ico";
export const SITE_OG_IMAGE_PATH = "/uk-iptv.PNG";

export const SITE_DESCRIPTION =
  "Get the best IPTV subscription in the UK. Stream 20,000+ live channels, 60,000+ VOD movies, and series in true 4K quality with no contract and instant activation.";

/** Ensure path always has a trailing slash (except root which is `/`). */
export function withTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";
  const [pathname, hash] = path.split("#");
  const [base, query] = pathname.split("?");
  let normalized = base.startsWith("/") ? base : `/${base}`;
  if (!normalized.endsWith("/")) normalized = `${normalized}/`;
  if (query) normalized = `${normalized}?${query}`;
  if (hash) normalized = `${normalized}#${hash}`;
  return normalized;
}

/** Absolute canonical URL for a path (non-www + trailing slash). */
export function canonicalUrl(path: string = "/"): string {
  const normalized = withTrailingSlash(path.split("?")[0].split("#")[0]);
  if (normalized === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${normalized}`;
}

const DEFAULT_OG_IMAGE = {
  url: SITE_OG_IMAGE_PATH,
  width: 1536,
  height: 1024,
  alt: `${SITE_NAME} — UK IPTV streaming`,
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const canonical = withTrailingSlash(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE_OG_IMAGE_PATH],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

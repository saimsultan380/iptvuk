import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SITE_DESCRIPTION,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle = `${SITE_NAME} — Premium 4K Streaming | 20,000+ Channels & Free Trial`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "IPTV UK",
    "Best IPTV",
    "IPTV subscription",
    "UK IPTV",
    "4K IPTV",
    "IPTV free trial",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 1024,
        alt: `${SITE_NAME} — UK IPTV streaming`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: SITE_LOGO_PATH, type: "image/png" }],
    apple: [{ url: SITE_LOGO_PATH, type: "image/png" }],
    shortcut: SITE_LOGO_PATH,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "EhyxZgWnepcxpVeyCPHk-lE9A_d3GeuTkk9SQqm6Wt8",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: ["IPTV UK", "UK-Best-IPTV", "UK IPTV"],
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION,
    inLanguage: "en-GB",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}${SITE_LOGO_PATH}`,
    image: `${SITE_URL}${SITE_LOGO_PATH}`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@best-iptv.co",
      contactType: "customer support",
      availableLanguage: "English",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

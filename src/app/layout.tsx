import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPTV UK — Premium 4K Streaming | 20,000+ Channels & Free Trial",
  description: "Get the best IPTV subscription in the UK. Stream 20,000+ live channels, 60,000+ VOD movies, and series in true 4K quality with no contract and instant activation.",
  verification: {
    google: "EhyxZgWnepcxpVeyCPHk-lE9A_d3GeuTkk9SQqm6Wt8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "IPTV UK",
                "alternateName": ["UK-Best-IPTV", "UK IPTV"],
                "url": "https://iptvuk.co.uk",
                "description": "Stream 20,000+ live channels, 60,000+ VOD movies, and series in true 4K quality with no contract.",
                "inLanguage": "en-GB"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "IPTV UK",
                "url": "https://iptvuk.co.uk",
                "logo": "https://iptvuk.co.uk/favicon.ico",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "support@iptvuk.co.uk",
                  "contactType": "customer support"
                }
              }
            ]),
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

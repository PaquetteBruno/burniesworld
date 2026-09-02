import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// CLEAN ALL-ENGLISH PORTAL MASTER METADATA
export const metadata: Metadata = {
  title: "Burnie's World - Independent Web Portal & Gaming Hub",
  description:
    "Welcome to Burnie's World! Explore serverless web tools, independent text adventure horror games, browser frameworks, and daily humor metrics.",
  keywords: [
    "Burnies World",
    "Burnie games",
    "browser tools hub",
    "free web tools",
    "indie gaming portal",
    "AnythingToPDF Easy",
    "serverless web apps",
  ],
  alternates: {
    canonical: "https://burniesworld.com",
  },
  openGraph: {
    title: "Burnie's World | Hub Portal",
    description:
      "Launch unique web application tools and psychological horror games directly from Burnie's central portal matrix.",
    url: "https://burniesworld.com",
    siteName: "BurniesWorld",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burnie's World Hub",
    description:
      "Explore custom client-side tools and unique indie horror browser game networks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://googletagmanager.com/gtag/js?id=G-NFGSB8WP8E"
          strategy="afterInteractive"
        />

        {/* NATIVE INITIALIZATION ROUTE CODE BLOCK */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-NFGSB8WP8E');
    `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

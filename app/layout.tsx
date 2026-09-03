import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

// CLEAN ALL-ENGLISH PORTAL MASTER METADATA
export const metadata: Metadata = {
  title: "Burnie's World -  Enter the Unknown",
  description:
    "Welcome to Burnie's World! Explore serverless text adventure horror games, jump scares, pranks and daily humor metrics.",
  keywords: [
    "You are the hero game",
    "Choose your path game",
    "Jump scares",
    "The Abandoned Mine",
    "Abandoned Mine horror game",
    "Psychological horror text adventure",
    "Choose your own adventure horror",
    "Browser horror game",
    "Free indie horror games",
    "Interactive survival fiction",
    "Jump scare browser game",
    "Retro text adventure game",
    "Burnies World horror game",
    "Burnies World",
    "Burnie games",
    "Browser tools hub",
    "Free web tools",
    "indie gaming portal",
    "AnythingToPDF Easy",
    "Serverless web games and apps",
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

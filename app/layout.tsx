import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/layout/Footer";

// CLEAN ALL-ENGLISH PORTAL MASTER METADATA
export const metadata: Metadata = {
  title: "Burnie's World - Enter the Unknown",
  description:
    "Welcome to Burnie's World — explore browser games, interactive adventures, useful web tools, and a little daily humor.",
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
      "Welcome to Burnie's World — explore browser games, interactive adventures, useful web tools, and a little daily humor.",
    url: "https://burniesworld.com",
    siteName: "BurniesWorld",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burnie's World Hub",
    description:
      "Welcome to Burnie's World — explore browser games, interactive adventures, useful web tools, and a little daily humor.",
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
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NFGSB8WP8E"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NFGSB8WP8E');
    `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <div className="flex-1 bg-[#020203]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}

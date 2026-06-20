import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "NexusPlay - Your Ultimate Gaming Destination",
    template: "%s | NexusPlay",
  },
  description:
    "NexusPlay is your ultimate gaming hub featuring 2000+ games, news, guides, reviews, tutorials, and everything you need to level up your gaming experience.",
  keywords: [
    "gaming news", "game reviews", "game guides", "game tutorials",
    "free games", "PC games", "PS5 games", "Xbox games", "Nintendo Switch",
    "Elden Ring guide", "Fortnite guide", "best games 2024", "gaming website"
  ],
  metadataBase: new URL("https://nexusplay.gg"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusplay.gg",
    siteName: "NexusPlay",
    title: "NexusPlay - Your Ultimate Gaming Destination",
    description: "2000+ games, news, guides, reviews, and more.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexusplaygaming",
    creator: "@nexusplaygaming",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://nexusplay.gg" },
  verification: { google: "your-google-verification-code" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Google AdSense - Add your publisher ID here */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID" crossOrigin="anonymous"></script> */}
      </head>
      <body className="bg-dark-900 text-white font-body antialiased min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "The Quran Site | Free Islamic Softwares and Tech",
    template: "%s | The Quran Site",
  },

  description:
    "The Quran Site is an independent software and technology project creating free Islamic apps, Windows software, and digital tools for Quran learning, prayer, and everyday Islamic activities.",

  keywords: [
    "The Quran Site",
    "Islamic software",
    "Islamic apps",
    "free Islamic software",
    "Quran software",
    "Quran learning software",
    "prayer app",
    "Qibla finder",
    "Islamic technology",
    "Windows Islamic software",
  ],

  authors: [
    {
      name: "Ashiqul Haque Borno",
    },
  ],

  creator: "Ashiqul Haque Borno",
  publisher: "The Quran Site",

  applicationName: "The Quran Site",

  category: "technology",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "The Quran Site",
    title: "The Quran Site | Free Islamic Softwares and Tech",
    description:
      "Independent Islamic software, applications, and digital tools for Quran learning, prayer, and everyday Islamic activities.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Quran Site | Free Islamic Softwares and Tech",
    description:
      "Independent Islamic software, applications, and digital tools for Quran learning, prayer, and everyday Islamic activities.",
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
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7106930632163825"
     crossorigin="anonymous"></script>
</head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
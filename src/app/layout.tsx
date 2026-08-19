import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import ConsentDefaults from "@/components/ConsentDefaults";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

// Weights ported from the current static site's Google Fonts <link> tag —
// same families, same weights, same styles (self-hosted via next/font now,
// instead of a render-blocking <link> to fonts.googleapis.com).
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silvertonpublishing.com"),
  title: {
    default:
      "The Million Dollar Highway | An Entrepreneur's Guide to Starting, Managing, and Exiting Your Business",
    template: "%s | Silverton Publishing",
  },
  description:
    "The Million Dollar Highway is a 12-volume legal and business guide for entrepreneurs. Practical advice on entity formation, contracts, taxes, IP, hiring, and exit strategy from a practicing attorney and entrepreneur.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Million Dollar Highway — The Silverton Business Book Series",
    description:
      "12 volumes covering every legal, financial, and operational challenge you'll face from formation through exit. Written by a practicing attorney and entrepreneur.",
    url: "https://silvertonpublishing.com",
    siteName: "Silverton Publishing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <ConsentDefaults />
        <GoogleAnalytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

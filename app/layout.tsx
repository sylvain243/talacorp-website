import type { Metadata } from "next";
import localFont from "next/font/local";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/content";
import "./globals.css";

const display = localFont({
  src: [
    { path: "./fonts/archivo-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/archivo-latin-700-normal.woff2", weight: "700" },
    { path: "./fonts/archivo-latin-800-normal.woff2", weight: "800" },
  ],
  display: "swap",
  variable: "--font-display",
});

const body = localFont({
  src: [
    { path: "./fonts/public-sans-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/public-sans-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/public-sans-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/public-sans-latin-700-normal.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: {
    default: `${siteConfig.name} : ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Votre partenaire de croissance à Kinshasa : stratégie, branding et print, transformation digitale, marketing et acquisition. Consultation gratuite.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    locale: "fr_CD",
    type: "website",
    url: siteConfig.website,
    siteName: siteConfig.name,
    images: [{ url: "/logo-color.png", width: 1200, height: 630, alt: "Talacorp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
    images: ["/logo-color.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable} font-sans`}>
        <JsonLd />
        <SiteHeader />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Agence de croissance à Kinshasa : stratégie, marketing digital, transformation digitale et branding. Demandez une consultation gratuite.",
  keywords: [
    "agence digitale Kinshasa",
    "marketing digital RDC",
    "transformation digitale Congo",
    "branding Kinshasa",
    "création site web Kinshasa",
    "Talacorp",
  ],
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
      <body className="font-sans">
        <JsonLd />
        <SiteHeader />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

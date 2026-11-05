import type { Metadata } from "next";
import PolesGrid from "@/components/site/PolesGrid";
import OfferDownloads from "@/components/site/OfferDownloads";
import CtaBand from "@/components/site/CtaBand";
import { buildPageMetadata } from "@/lib/seo";
import { generalOffer } from "@/data/poles";

export const metadata: Metadata = buildPageMetadata({
  title: "Nos pôles",
  description:
    "Stratégie & Performance, Branding & Print, Transformation digitale, Marketing & Acquisition : les 4 pôles TALACORP à Kinshasa.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PolesGrid headingLevel="h1" />
      <OfferDownloads offers={[generalOffer]} />
      <CtaBand />
    </>
  );
}

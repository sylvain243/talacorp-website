import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import RealisationsPreview from "@/components/home/RealisationsPreview";
import TestimonialSection from "@/components/home/TestimonialSection";
import BookingSection from "@/components/home/BookingSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Agence digitale Kinshasa : Stratégie, Marketing & Transformation",
  description:
    "Talacorp accompagne les entreprises congolaises : stratégie, marketing digital, transformation digitale et branding à Kinshasa. Consultation gratuite.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <RealisationsPreview />
      <TestimonialSection />
      <BookingSection />
    </>
  );
}

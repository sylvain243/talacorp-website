import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import RealisationsPreview from "@/components/home/RealisationsPreview";
import TestimonialSection from "@/components/home/TestimonialSection";
import BookingSection from "@/components/home/BookingSection";

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

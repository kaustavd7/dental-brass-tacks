import Hero from "@/components/home/Hero";
import DoctorsSection from "@/components/home/DoctorsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyUs from "@/components/home/WhyUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VideoTestimonials from "@/components/home/VideoTestimonials";
import ReviewsSection from "@/components/home/ReviewsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DoctorsSection />
      <ServicesSection />
      <WhyUs />
      <TestimonialsSection />
      <VideoTestimonials />
      <ReviewsSection />
      <CTASection />
    </>
  );
}

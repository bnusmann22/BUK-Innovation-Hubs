"use client";

import {
  HeroSection,
  ValuePropositionSection,
  FeaturedHubsSection,
  ProgramsSection,
  EventsPreviewSection,
  GallerySection,
  StartupsShowcaseSection,
  NewsAnnouncementsSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections/home";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropositionSection />
      <FeaturedHubsSection />
      <ProgramsSection />
      <EventsPreviewSection />
      <GallerySection />
      <StartupsShowcaseSection />
      <NewsAnnouncementsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

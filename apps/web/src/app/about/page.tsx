import {
  HeroSection,
  MissionVisionSection,
  HistorySection,
  StrategicGoalsSection,
  LeadershipSection,
  PartnersSection,
  RoadmapSection,
  CTASection,
} from "@/components/sections/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionVisionSection />
      <HistorySection />
      <StrategicGoalsSection />
      <LeadershipSection />
      <PartnersSection />
      <RoadmapSection />
      <CTASection />
    </div>
  );
}

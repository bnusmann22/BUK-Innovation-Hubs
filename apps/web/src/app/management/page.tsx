import {
  HeaderSection,
  TeamSection,
  CTASection,
} from "@/components/sections/management";

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}

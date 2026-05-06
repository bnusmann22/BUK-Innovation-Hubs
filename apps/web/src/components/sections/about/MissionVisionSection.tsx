import { Award, Target, Users, Zap } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-[#dfe6d7] p-5 bg-gradient-to-br from-white to-[#f5f7f2]/50">
            <Target className="w-8 h-8 text-[#1b5e2b] mb-2.5" />
            <h2 className="text-sm font-bold text-[#172018] mb-2">Our Mission</h2>
            <p className="text-[10px] text-[#61705d] leading-relaxed">
              To foster a vibrant innovation ecosystem at Bayero University Kano that transforms ideas into tangible solutions, empowers students and researchers to pursue their entrepreneurial dreams, and drives socio-economic development through technology and innovation.
            </p>
          </div>

          <div className="rounded-lg border border-[#dfe6d7] p-5 bg-gradient-to-br from-white to-[#f5f7f2]/50">
            <Zap className="w-8 h-8 text-[#1b5e2b] mb-2.5" />
            <h2 className="text-sm font-bold text-[#172018] mb-2">Our Vision</h2>
            <p className="text-[10px] text-[#61705d] leading-relaxed">
              To position Bayero University Kano as a leading innovation hub in Africa, recognized for producing world-class startups, breakthroughs in research, and innovative solutions that address global challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
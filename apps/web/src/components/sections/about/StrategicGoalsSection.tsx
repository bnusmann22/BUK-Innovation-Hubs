import { Users, TrendingUp, Globe, Award, Zap, Target } from "lucide-react";

export default function StrategicGoalsSection() {
  const goals = [
    {
      icon: Users,
      goal: "Community Building",
      description: "Create a thriving community of 5,000+ active innovators and entrepreneurs by 2027.",
    },
    {
      icon: TrendingUp,
      goal: "Startup Success",
      description: "Incubate and scale 100+ startups generating ₦100B+ in combined revenue.",
    },
    {
      icon: Globe,
      goal: "Global Impact",
      description: "Establish partnerships with leading global tech companies and innovation hubs worldwide.",
    },
    {
      icon: Award,
      goal: "Recognition",
      description: "Become Africa's top 5 university innovation hub recognized for excellence and impact.",
    },
    {
      icon: Zap,
      goal: "Research Commercialization",
      description: "Transform 50+ academic research projects into market-ready solutions annually.",
    },
    {
      icon: Target,
      goal: "Skills Development",
      description: "Train 1,000+ students annually in innovation, entrepreneurship, and emerging technologies.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[#172018] mb-12 text-center">Strategic Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, idx) => (
            <div key={idx} className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition">
              <goal.icon className="w-10 h-10 text-[#1b5e2b] mb-3" />
              <h3 className="text-lg font-bold text-[#172018] mb-2">{goal.goal}</h3>
              <p className="text-[#61705d]">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
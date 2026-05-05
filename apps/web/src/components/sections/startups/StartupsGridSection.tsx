import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface StartupItem {
  id: number;
  name: string;
  stage: string;
  description: string;
  founded: string;
  team: number;
  funding: string;
  website: string;
  founder: string;
  tags: string[];
  impact: string;
  logo: string;
}

export interface StartupsGridSectionProps {
  startups: StartupItem[];
}

export default function StartupsGridSection({ startups }: StartupsGridSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-xl hover:border-[#1b5e2b] transition bg-white flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{startup.logo}</div>
                <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                  {startup.stage}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#172018] mb-1">{startup.name}</h3>
              <p className="text-sm text-[#5a6b57] font-semibold mb-3">Founded {startup.founded}</p>
              <p className="text-[#61705d] text-sm mb-4 flex-1 line-clamp-2">{startup.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-b border-[#dfe6d7]">
                <div>
                  <p className="text-xs text-[#5a6b57] font-semibold mb-1">Funding</p>
                  <p className="text-sm font-bold text-[#172018]">{startup.funding}</p>
                </div>
                <div>
                  <p className="text-xs text-[#5a6b57] font-semibold mb-1">Team</p>
                  <p className="text-sm font-bold text-[#172018]">{startup.team} people</p>
                </div>
                <div>
                  <p className="text-xs text-[#5a6b57] font-semibold mb-1">Founder</p>
                  <p className="text-sm font-bold text-[#172018]">{startup.founder}</p>
                </div>
                <div>
                  <p className="text-xs text-[#5a6b57] font-semibold mb-1">Impact</p>
                  <p className="text-sm font-bold text-[#172018]">{startup.impact}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {startup.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-[#f5f7f2] text-[#5a6b57] rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 rounded-md border-2 border-[#1b5e2b] px-4 py-2 text-sm font-bold text-[#1b5e2b] hover:bg-[#1b5e2b]/5 transition w-full"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
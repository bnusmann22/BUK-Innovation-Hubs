import Link from "next/link";
import { ArrowRight, Users, Clock, MapPin } from "lucide-react";

export interface HubItem {
  id: number;
  name: string;
  category: string;
  description: string;
  focus: string;
  team: number;
  programs: number;
  facilities: string;
  image: string;
}

export interface HubsListSectionProps {
  hubs: HubItem[];
  onClearFilters?: () => void;
}

export default function HubsListSection({ hubs, onClearFilters }: HubsListSectionProps) {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {hubs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hubs.map((hub) => (
              <Link
                key={hub.id}
                href={`/hubs/${hub.id}`}
                className="group rounded-lg border border-[#dfe6d7] p-4 hover:shadow-xl hover:border-[#1b5e2b] transition bg-white flex flex-col"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition">{hub.image}</div>
                <h3 className="text-sm font-bold text-[#172018] mb-1.5 group-hover:text-[#1b5e2b] transition">
                  {hub.name}
                </h3>
                <div className="inline-block mb-2">
                  <span className="px-2.5 py-0.5 bg-[#1b5e2b]/10 text-[#1b5e2b] text-[10px] font-semibold rounded-full">
                    {hub.category}
                  </span>
                </div>
                <p className="text-[#61705d] mb-3 text-xs flex-1">{hub.description}</p>
                <div className="space-y-2 mb-4 pt-3 border-t border-[#dfe6d7]">
                  <div className="flex items-center gap-1.5 text-xs text-[#61705d]">
                    <Users className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{hub.team} team members</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#61705d]">
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{hub.programs} active programs</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-[#61705d]">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>{hub.facilities}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[#1b5e2b] font-semibold text-xs group-hover:gap-2 transition">
                  View Hub <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-sm text-[#61705d] mb-3">No hubs found matching your search.</p>
            {onClearFilters ? (
              <button
                type="button"
                onClick={onClearFilters}
                className="text-[#1b5e2b] font-semibold hover:text-[#154a22] transition text-xs"
              >
                Clear filters
              </button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
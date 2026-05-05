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
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {hubs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hubs.map((hub) => (
              <Link
                key={hub.id}
                href={`/hubs/${hub.id}`}
                className="group rounded-lg border border-[#dfe6d7] p-6 hover:shadow-xl hover:border-[#1b5e2b] transition bg-white flex flex-col"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition">{hub.image}</div>
                <h3 className="text-xl font-bold text-[#172018] mb-2 group-hover:text-[#1b5e2b] transition">
                  {hub.name}
                </h3>
                <div className="inline-block mb-3">
                  <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                    {hub.category}
                  </span>
                </div>
                <p className="text-[#61705d] mb-4 text-sm flex-1">{hub.description}</p>
                <div className="space-y-3 mb-6 pt-4 border-t border-[#dfe6d7]">
                  <div className="flex items-center gap-2 text-sm text-[#61705d]">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span>{hub.team} team members</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#61705d]">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>{hub.programs} active programs</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-[#61705d]">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{hub.facilities}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#1b5e2b] font-semibold text-sm group-hover:gap-3 transition">
                  View Hub <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-[#61705d] mb-4">No hubs found matching your search.</p>
            {onClearFilters ? (
              <button
                type="button"
                onClick={onClearFilters}
                className="text-[#1b5e2b] font-semibold hover:text-[#154a22] transition"
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
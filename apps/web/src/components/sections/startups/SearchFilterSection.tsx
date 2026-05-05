"use client";

import { Search, Filter } from "lucide-react";

export interface SearchFilterSectionProps {
  stages: string[];
  selectedStage: string;
  searchQuery: string;
  onStageChange: (stage: string) => void;
  onSearchChange: (value: string) => void;
}

export default function SearchFilterSection({
  stages,
  selectedStage,
  searchQuery,
  onStageChange,
  onSearchChange,
}: SearchFilterSectionProps) {
  return (
    <section className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-[#dfe6d7] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-[#5a6b57]" />
            <input
              type="text"
              placeholder="Search startups or tags..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          <Filter className="w-5 h-5 text-[#5a6b57] flex-shrink-0" />
          {stages.map((stage) => (
            <button
              key={stage}
              onClick={() => onStageChange(stage)}
              className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition ${
                selectedStage === stage
                  ? "bg-[#1b5e2b] text-white"
                  : "bg-[#f5f7f2] text-[#172018] hover:bg-[#dfe6d7]"
              }`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
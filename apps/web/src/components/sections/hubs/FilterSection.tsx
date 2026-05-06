"use client";

import { Search, Filter } from "lucide-react";

export interface FilterSectionProps {
  categories: string[];
  selectedCategory: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (value: string) => void;
}

export default function FilterSection({
  categories,
  selectedCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
}: FilterSectionProps) {
  return (
    <section className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-[#dfe6d7] py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#5a6b57]" />
            <input
              type="text"
              placeholder="Search hubs, facilities, or programs..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b] text-xs"
            />
          </div>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <Filter className="w-4 h-4 text-[#5a6b57] flex-shrink-0" />
          <div className="flex gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-full font-semibold text-[11px] whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? "bg-[#1b5e2b] text-white"
                    : "bg-[#f5f7f2] text-[#172018] hover:bg-[#dfe6d7]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
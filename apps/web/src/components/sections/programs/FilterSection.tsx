"use client";

import { Filter } from "lucide-react";

export interface FilterSectionProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function FilterSection({
  categories,
  selectedCategory,
  onSelectCategory,
}: FilterSectionProps) {
  return (
    <section className="sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-[#dfe6d7] py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-x-auto">
          <Filter className="w-5 h-5 text-[#5a6b57] flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition ${
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
    </section>
  );
}
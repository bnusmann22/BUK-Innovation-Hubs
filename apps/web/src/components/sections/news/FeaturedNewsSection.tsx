import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface FeaturedNewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface FeaturedNewsSectionProps {
  featuredNews: FeaturedNewsItem[];
}

export default function FeaturedNewsSection({ featuredNews }: FeaturedNewsSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold text-[#172018] mb-8">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredNews.map((news) => (
            <Link
              key={news.id}
              href="#"
              className="group rounded-lg border-2 border-[#1b5e2b] overflow-hidden hover:shadow-xl transition bg-white flex flex-col"
            >
              <div className="aspect-video bg-gradient-to-br from-[#1b5e2b]/20 to-[#006b85]/20 flex items-center justify-center text-6xl group-hover:scale-105 transition">
                {news.image}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#1b5e2b] text-white text-xs font-semibold rounded-full">
                    {news.category}
                  </span>
                  <span className="text-xs text-[#5a6b57]">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#172018] mb-2 group-hover:text-[#1b5e2b] transition line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-[#61705d] text-sm flex-1 line-clamp-3 mb-4">
                  {news.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[#1b5e2b] font-semibold text-sm">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
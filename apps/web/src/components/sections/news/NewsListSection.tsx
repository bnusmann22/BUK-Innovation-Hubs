import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export interface NewsItem {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface NewsListSectionProps {
  news: NewsItem[];
}

export default function NewsListSection({ news }: NewsListSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        {news.map((item) => (
          <Link
            key={item.id}
            href="#"
            className="group rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg hover:border-[#1b5e2b] transition bg-white flex gap-6"
          >
            <div className="text-5xl flex-shrink-0">{item.image}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                  {item.category}
                </span>
                <span className="text-xs text-[#5a6b57] flex-shrink-0">
                  <Calendar className="w-3 h-3 inline mr-1" />
                  {item.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#172018] mb-2 group-hover:text-[#1b5e2b] transition line-clamp-2">
                {item.title}
              </h3>
              <p className="text-[#61705d] text-sm line-clamp-2 mb-3">{item.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-[#1b5e2b] font-semibold text-sm group-hover:gap-2 transition">
                Read Full Story <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
        {news.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-[#61705d]">No news found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
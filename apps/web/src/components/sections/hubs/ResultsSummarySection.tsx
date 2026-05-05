export interface ResultsSummarySectionProps {
  count: number;
}

export default function ResultsSummarySection({ count }: ResultsSummarySectionProps) {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-[#61705d]">
          Showing <span className="font-bold text-[#172018]">{count}</span> hub
          {count !== 1 ? "s" : ""}
        </p>
      </div>
    </section>
  );
}

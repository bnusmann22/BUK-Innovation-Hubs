import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface ProgramItem {
  id: number;
  title: string;
  description: string;
  duration: string;
  deadline: string;
  participants: string;
  status: string;
  requirements: string[];
  documents: string[];
  category: string;
}

export interface ProgramsListSectionProps {
  programs: ProgramItem[];
}

export default function ProgramsListSection({ programs }: ProgramsListSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {programs.map((program) => (
          <div
            key={program.id}
            className="rounded-lg border border-[#dfe6d7] p-8 hover:shadow-lg transition bg-white"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                    {program.category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                    {program.status}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[#172018] mb-2">{program.title}</h2>
                <p className="text-lg text-[#61705d] mb-4">{program.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-[#5a6b57] font-semibold mb-1">Duration</p>
                    <p className="text-sm font-bold text-[#172018]">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#5a6b57] font-semibold mb-1">Deadline</p>
                    <p className="text-sm font-bold text-[#172018]">{program.deadline}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#5a6b57] font-semibold mb-1">Participants</p>
                    <p className="text-sm font-bold text-[#172018]">{program.participants}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-6 py-6 border-t border-b border-[#dfe6d7]">
              <div>
                <h4 className="font-bold text-[#172018] mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {program.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#61705d]">
                      <CheckCircle className="w-4 h-4 text-[#1b5e2b] flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#172018] mb-3">Required Documents</h4>
                <ul className="space-y-2">
                  {program.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#61705d]">
                      <CheckCircle className="w-4 h-4 text-[#1b5e2b] flex-shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="flex items-center justify-center gap-2 rounded-md bg-[#1b5e2b] px-6 py-3 text-base font-bold text-white hover:bg-[#154a22] transition"
              >
                Register Now <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 rounded-md border-2 border-[#1b5e2b] px-6 py-3 text-base font-bold text-[#1b5e2b] hover:bg-[#1b5e2b]/5 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
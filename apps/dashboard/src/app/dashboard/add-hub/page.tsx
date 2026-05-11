import Link from "next/link";
import {
  ClipboardList,
  UserCog,
  Rocket,
  Building2,
  MapPin,
  Users,
  Image,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Fill Hub Details",
    desc: "Enter the hub's name, description, location, focus area, contact info, facilities, and pricing.",
  },
  {
    icon: UserCog,
    title: "Set Up Admins",
    desc: "Create the Hub Manager and optionally assign a Content Manager and Programs Officer.",
  },
  {
    icon: Rocket,
    title: "Hub Goes Live",
    desc: "Once created, the hub is published to the platform and admins receive their login credentials by email.",
  },
];

const highlights = [
  { icon: Building2, label: "Hub Profile", desc: "Name, description, focus area, and branding." },
  { icon: MapPin, label: "Location & Contact", desc: "Physical address, email, phone, and social media links." },
  { icon: Users, label: "Team Setup", desc: "Hub Manager, Content Manager, and Programs Officer." },
  { icon: Image, label: "Media & Pricing", desc: "Logo, gallery images, and membership pricing details." },
];

export default function AddHubPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      {/* Hero */}
      <div className="rounded-2xl border border-[#dfe6d7] bg-white p-8 sm:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#006b85]">
            <Building2 className="text-white" size={32} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#006b85]">
              Hub Creation
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-[#172018] sm:text-4xl">
              Launch a New Innovation Hub
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#61705d]">
              Innovation hubs are dedicated spaces where students, researchers, and entrepreneurs
              collaborate on projects, access mentorship, and develop solutions to real-world
              challenges. Each hub has its own focus area, team, and facilities.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#61705d]">
              Setting up a new hub takes a few minutes. You will provide the hub&apos;s profile,
              location, contact details, media assets, and create its administrative team. Once
              submitted, the hub appears on the public platform and all assigned admins receive their
              login credentials automatically.
            </p>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#172018]">How it works</h2>
        <ol className="relative border-l border-[#dfe6d7] pl-8 space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.6rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#006b85] bg-white text-sm font-bold text-[#006b85]">
                  {i + 1}
                </span>
                <div className="rounded-xl border border-[#dfe6d7] bg-white p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#e8f4f8]">
                      <Icon className="text-[#006b85]" size={18} />
                    </div>
                    <h3 className="font-bold text-[#172018]">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#61705d]">{step.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* What you'll fill in */}
      <div>
        <h2 className="mb-6 text-lg font-bold text-[#172018]">What you&apos;ll fill in</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-[#dfe6d7] bg-white p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f0faf5]">
                  <Icon className="text-[#1b5e2b]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-[#172018]">{item.label}</p>
                  <p className="mt-0.5 text-sm text-[#61705d]">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Requirements note */}
      <div className="flex items-start gap-3 rounded-xl border border-[#a8d8e6] bg-[#e8f4f8] p-5">
        <CheckCircle2 className="mt-0.5 shrink-0 text-[#006b85]" size={20} />
        <div>
          <p className="font-semibold text-[#006b85]">Before you begin</p>
          <p className="mt-1 text-sm leading-6 text-[#1a5a6e]">
            Have the Hub Manager&apos;s name, personal email address, and a logo image ready.
            You can add the Content Manager and Programs Officer during setup or assign them later.
            All admins will receive their institutional login credentials via email upon creation.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-end pb-4">
        <Link
          href="/dashboard/add-hub/create"
          className="inline-flex items-center gap-2 rounded-lg bg-[#1b5e2b] px-7 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-[#154a22]"
        >
          Create a Hub
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}

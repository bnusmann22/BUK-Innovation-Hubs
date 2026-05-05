"use client";

import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  X,
} from "lucide-react";
import { TwitterIcon, LinkedinIcon, InstagramIcon } from "@/components/social-icons";

// Mock data - replace with real data fetching
const hubsData = {
  1: {
    name: "BUK- BOI Innovation HUb",
    description: "Cutting-edge AI, machine learning, and robotics research and innovation",
    imageEmoji: "",
    focus: "AI, Machine Learning, Robotics",
    established: "2022",
    location: "BUK Campus, Building A, Room 101",
    team: 45,
    programCount: 5,
    facilities:
      "GPU Clusters, Laboratory Space, Testing Ground, High-Speed Internet, Robotics Lab",
    facilityHighlights: [
      {
        title: "Advanced Prototyping Lab",
        description:
          "A dedicated lab for robotics and AI prototypes with precision tools, workstations, and testing bays.",
      },
      {
        title: "GPU & Compute Cluster",
        description:
          "High-performance computing resources for training models, simulations, and robotics control systems.",
      },
      {
        title: "Collaboration Hub",
        description:
          "Flexible meeting rooms, open collaboration zones, and innovation lounges for mentor sessions.",
      },
      {
        title: "Media & Content Studio",
        description:
          "Creative space for recording demos, producing content, and broadcasting hub activities.",
      },
    ],
    gallery: [
      "/HUB IMAGES/IMG_9843.JPG",
      "/HUB IMAGES/IMG_9845.JPG",
      "/HUB IMAGES/IMG_9848.JPG",
      "/HUB IMAGES/IMG_9852.JPG",
    ],
    pricing: [
      {
        title: "Daily Workspace",
        description: "Flexible desk access for makers and founders.",
        prices: [
          { label: "Daily rate", value: "₦1,500" },
        ],
      },
      {
        title: "Office for 2-4",
        description: "Private office space for small student teams or startups.",
        prices: [
          { label: "Student", value: "₦35,000 / month" },
          { label: "Non-student", value: "₦70,000 / month" },
        ],
      },
      {
        title: "Boardroom / Meeting Room",
        description: "Conference-ready room for pitches, meetings, and demos.",
        prices: [
          { label: "Student", value: "₦120,000 / month" },
          { label: "Non-student", value: "₦180,000 / month" },
        ],
      },
      {
        title: "Event Space",
        description: "Dedicated event booking for workshops, showcases and meetups.",
        prices: [
          { label: "6-hour slot", value: "₦25,000" },
        ],
      },
    ],
    openHours: "8:00 AM - 5:00 PM, Monday - Saturday",
    startupPartners: [
      { name: "EduMaker Labs", initials: "EL", accent: "bg-[#d8f3dc] text-[#14532d]" },
      { name: "CreatorX", initials: "CX", accent: "bg-[#e0f2fe] text-[#075985]" },
      { name: "PixelSprint", initials: "PS", accent: "bg-[#f3e8ff] text-[#6d28d9]" },
      { name: "GreenByte", initials: "GB", accent: "bg-[#fef9c3] text-[#a16207]" },
    ],
    contact: {
      email: "ai-hub@buk-hubs.edu.ng",
      phone: "+234 (0) 800 000 0001",
      website: "ai-hub.buk-hubs.edu.ng",
      socials: {
        linkedin: "https://linkedin.com/company/buk-ai-hub",
        twitter: "https://twitter.com/buk_ai_hub",
        instagram: "https://instagram.com/buk_ai_hub",
      },
    },
    leadership: [
      {
        name: "Ada Bello",
        title: "Hub Manager",
        avatar: "👩🏽‍💼",
        description:
          "Leads daily hub operations, coordinates partnerships, and ensures the hub runs effectively for members.",
        socials: {
          linkedin: "https://linkedin.com/in/ada-bello",
          twitter: "https://twitter.com/ada_bello",
          instagram: "https://instagram.com/ada.bello",
        },
      },
      {
        name: "Chinwe Eze",
        title: "Content Manager",
        avatar: "👩🏾‍💻",
        description:
          "Creates hub stories, shares program updates, and manages communications across digital channels.",
        socials: {
          linkedin: "https://linkedin.com/in/chinwe-eze",
          twitter: "https://twitter.com/chinwe_eze",
          instagram: "https://instagram.com/chinwe.eze",
        },
      },
      {
        name: "Yusuf Musa",
        title: "Program Officer",
        avatar: "👨🏽‍💼",
        description:
          "Oversees program design, application processes, and participant support to drive hub success.",
        socials: {
          linkedin: "https://linkedin.com/in/yusuf-musa",
          twitter: "https://twitter.com/yusuf_musa",
          instagram: "https://instagram.com/yusuf.musa",
        },
      },
    ],
    programs: [
      {
        name: "AI Research Fellowship",
        status: "Open",
        deadline: "June 30, 2026",
        description: "6-month program for AI researchers",
      },
      {
        name: "Robotics Bootcamp",
        status: "Open",
        deadline: "May 31, 2026",
        description: "12-week intensive robotics training",
      },
      {
        name: "AI Internship",
        status: "Rolling",
        deadline: "N/A",
        description: "3-6 month internship opportunities",
      },
    ],
    successStories: [
      { title: "EduTech AI Platform", description: "AI for personalized learning" },
      { title: "Robotics Arm Project", description: "Industrial automation solution" },
    ],
    upcomingEvents: [
      { date: "May 15, 2026", title: "AI & Innovation Workshop", time: "2:00 PM" },
      { date: "June 5, 2026", title: "Research Presentation Day", time: "10:00 AM" },
    ],
  },
};

export default function HubProfilePage() {
  const params = useParams();
  const hubId = params?.id as string;
  const hub = hubsData[parseInt(hubId) as keyof typeof hubsData];
  const [showStartupForm, setShowStartupForm] = useState(false);
  const [startupForm, setStartupForm] = useState({
    name: "",
    founder: "",
    email: "",
    website: "",
    stage: "",
    description: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!hub) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#172018] mb-4">Hub Not Found</h1>
          <p className="text-[#61705d] mb-8">The hub you're looking for doesn't exist.</p>
          <Link
            href="/hubs"
            className="inline-flex items-center gap-2 bg-[#1b5e2b] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#154a22] transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Hubs
          </Link>
        </div>
      </div>
    );
  }

  const programsList = hub.programs || [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[#dfe6d7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/hubs"
            className="inline-flex items-center gap-2 text-[#1b5e2b] font-semibold hover:text-[#154a22] mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hubs
          </Link>

          <div className="flex items-start gap-6">
            <div className="text-7xl">{hub.imageEmoji}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-[#172018] mb-2">{hub.name}</h1>
              <p className="text-lg text-[#61705d] mb-4">{hub.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-2 text-[#5a6b57]">
                  <MapPin className="w-4 h-4" />
                  {hub.location}
                </span>
                <span className="inline-flex items-center gap-2 text-[#5a6b57]">
                  <Calendar className="w-4 h-4" />
                  Established {hub.established}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Team Members", value: hub.team },
              { label: "Active Programs", value: hub.programs.length },
              { label: "Success Stories", value: hub.successStories.length },
              { label: "Upcoming Events", value: hub.upcomingEvents.length },
            ].map((stat, idx) => (
              <div key={idx} className="rounded-lg border border-[#dfe6d7] p-4 text-center">
                <div className="text-3xl font-bold text-[#1b5e2b] mb-1">{stat.value}</div>
                <p className="text-sm text-[#61705d]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-[#172018] mb-4">About This Hub</h2>
            <div className="space-y-4 text-[#61705d]">
              <div>
                <p className="font-bold text-[#172018] mb-1">Focus Area:</p>
                <p>{hub.focus}</p>
              </div>
              <div>
                <p className="font-bold text-[#172018] mb-1">Facilities:</p>
                <p>{hub.facilities}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#172018] mb-4">Contact & Connect</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1b5e2b] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#5a6b57] font-semibold mb-1">Email</p>
                  <a
                    href={`mailto:${hub.contact.email}`}
                    className="text-[#1b5e2b] hover:text-[#154a22] transition"
                  >
                    {hub.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1b5e2b] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#5a6b57] font-semibold mb-1">Phone</p>
                  <a
                    href={`tel:${hub.contact.phone}`}
                    className="text-[#1b5e2b] hover:text-[#154a22] transition"
                  >
                    {hub.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-[#1b5e2b] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#5a6b57] font-semibold mb-1">Website</p>
                  <a
                    href={`https://${hub.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1b5e2b] hover:text-[#154a22] transition inline-flex items-center gap-1"
                  >
                    {hub.contact.website}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="pt-6 border-t border-[#e4ebdd]">
                <p className="text-sm text-[#5a6b57] font-semibold mb-4">Connect with the hub</p>
                <div className="flex items-center gap-3">
                  <a
                    href={hub.contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe6d7] bg-white text-[#1b5e2b] hover:border-[#154a22] hover:text-[#154a22] transition"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={hub.contact.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe6d7] bg-white text-[#1b5e2b] hover:border-[#154a22] hover:text-[#154a22] transition"
                    title="X"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={hub.contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe6d7] bg-white text-[#1b5e2b] hover:border-[#154a22] hover:text-[#154a22] transition"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f4f8f2]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-[#172018] mb-2">Hub Facilities</h2>
              <p className="text-[#61705d] max-w-2xl">
                Explore the AI & Robotics Hub’s purpose-built spaces, technical infrastructure, and member-focused experience.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dfe6d7] bg-white px-5 py-3 text-sm font-semibold text-[#1b5e2b] shadow-sm">
              <Users className="w-4 h-4" />
              {hub.facilities}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {hub.facilityHighlights.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-6 shadow-sm border border-[#e7eee3]"
              >
                <h3 className="text-xl font-semibold text-[#172018] mb-3">{feature.title}</h3>
                <p className="text-[#61705d]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4 flex-col sm:flex-row sm:items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#172018] mb-2">Hub Experience Gallery</h2>
              <p className="text-[#61705d] max-w-2xl">
                A visual tour of the AI & Robotics Hub, showcasing workspaces, lab spaces, and member collaboration.
              </p>
            </div>
            <span className="rounded-full border border-[#dfe6d7] bg-white px-4 py-2 text-sm text-[#5a6b57]">
              Featured hub spaces from our public gallery
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hub.gallery.map((image, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-3xl border border-[#dfe6d7] bg-white shadow-sm"
              >
                <Image
                  src={image}
                  alt={`${hub.name} image ${idx + 1}`}
                  width={480}
                  height={320}
                  className="h-72 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f9fbf6]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-[#dfe6d7] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-[#1b5e2b] font-semibold mb-3">Daily Workspace</p>
              <p className="text-3xl font-bold text-[#172018]">₦1,500</p>
              <p className="text-sm text-[#61705d] mt-3">Per day access to flexible workspace and shared hub services.</p>
            </div>
            <div className="rounded-3xl border border-[#dfe6d7] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-[#1b5e2b] font-semibold mb-3">Office for 2-4</p>
              <p className="text-2xl font-bold text-[#172018]">Students ₦35,000</p>
              <p className="text-2xl font-bold text-[#172018] mt-2">Non-students ₦70,000</p>
              <p className="text-sm text-[#61705d] mt-3">Private team office for 2-4 founders and student teams.</p>
            </div>
            <div className="rounded-3xl border border-[#dfe6d7] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-[#1b5e2b] font-semibold mb-3">Boardroom / Meeting Room</p>
              <p className="text-2xl font-bold text-[#172018]">Students ₦120,000</p>
              <p className="text-2xl font-bold text-[#172018] mt-2">Non-students ₦180,000</p>
              <p className="text-sm text-[#61705d] mt-3">Monthly access for presentations, mentoring, and stakeholder meetings.</p>
            </div>
            <div className="rounded-3xl border border-[#dfe6d7] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-[#1b5e2b] font-semibold mb-3">Event Space</p>
              <p className="text-3xl font-bold text-[#172018]">₦25,000</p>
              <p className="text-sm text-[#61705d] mt-2">6 hours of event booking for workshops, showcases, and community sessions.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-[#dfe6d7] bg-white p-8 shadow-sm text-[#172018]">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold">Building Capacity with Clear Pricing</h2>
                <p className="text-[#61705d] mt-2 max-w-2xl">
                  The BUK-BOI Innovation Hub is funded by Bank of Industry and built and managed by BUK admin. Book members-only spaces, offices, boardrooms, or event sessions with transparent pricing.
                </p>
              </div>
              <span className="rounded-full border border-[#dfe6d7] bg-[#f0f7ed] px-4 py-2 text-sm font-semibold text-[#1b5e2b]">
                Open {hub.openHours}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[32px] border border-[#dfe6d7] bg-[#eff7f1] p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#1b5e2b] font-bold">We Support</p>
                <h2 className="text-4xl font-bold text-[#172018] leading-tight">WE SUPPORT STUDENT CREATORS</h2>
                <p className="mt-4 text-[#61705d] text-lg">
                  The BUK-BOI Innovation Hub connects student founders to space, mentorship, and community support. Meet the startups working with us today.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowStartupForm(true);
                  setFormSubmitted(false);
                }}
                className="inline-flex items-center justify-center rounded-full bg-[#1b5e2b] px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#154a22]"
              >
                Register your startup
              </button>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-[#dfe6d7] bg-white p-6 shadow-sm">
              <div className="startup-marquee-track flex items-center gap-4">
                {[...hub.startupPartners, ...hub.startupPartners].map((startup, idx) => (
                  <div
                    key={`${startup.name}-${idx}`}
                    className="min-w-[220px] rounded-[28px] border border-[#dfe6d7] bg-[#f8faf5] px-6 py-6 text-center shadow-sm"
                  >
                    <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl ${startup.accent} text-lg font-black`}>
                      {startup.initials}
                    </div>
                    <p className="text-lg font-semibold text-[#172018]">{startup.name}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .startup-marquee-track {
          animation: marquee 24s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      {showStartupForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div
            className="absolute inset-0"
            onClick={() => setShowStartupForm(false)}
          />
          <div
            className="relative z-10 mx-auto h-full w-full max-w-5xl overflow-y-auto rounded-[40px] bg-white p-6 shadow-2xl sm:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-6 sm:pb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#1b5e2b] font-bold">Startup Registration</p>
                <h3 className="mt-3 text-3xl font-bold text-[#172018]">Register your startup with BUK- BOI Innovation HUb</h3>
                <p className="mt-3 max-w-2xl text-[#61705d]">
                  Share your startup journey and connect with our support network, workspace options, and programming resources.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowStartupForm(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e3e9de] bg-white text-[#172018] shadow-sm transition hover:bg-[#f5f7f2]"
                aria-label="Close startup registration"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setFormSubmitted(true);
              }}
              className="grid gap-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-[#172018]">Startup Name</span>
                  <input
                    type="text"
                    value={startupForm.name}
                    onChange={(event) => setStartupForm({ ...startupForm, name: event.target.value })}
                    required
                    className="w-full rounded-3xl border border-[#dfe6d7] bg-[#f8faf5] px-4 py-3 text-sm text-[#172018] outline-none focus:border-[#1b5e2b]"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-[#172018]">Founder / Team Lead</span>
                  <input
                    type="text"
                    value={startupForm.founder}
                    onChange={(event) => setStartupForm({ ...startupForm, founder: event.target.value })}
                    required
                    className="w-full rounded-3xl border border-[#dfe6d7] bg-[#f8faf5] px-4 py-3 text-sm text-[#172018] outline-none focus:border-[#1b5e2b]"
                  />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-[#172018]">Email Address</span>
                  <input
                    type="email"
                    value={startupForm.email}
                    onChange={(event) => setStartupForm({ ...startupForm, email: event.target.value })}
                    required
                    className="w-full rounded-3xl border border-[#dfe6d7] bg-[#f8faf5] px-4 py-3 text-sm text-[#172018] outline-none focus:border-[#1b5e2b]"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-semibold text-[#172018]">Website / Link</span>
                  <input
                    type="url"
                    value={startupForm.website}
                    onChange={(event) => setStartupForm({ ...startupForm, website: event.target.value })}
                    className="w-full rounded-3xl border border-[#dfe6d7] bg-[#f8faf5] px-4 py-3 text-sm text-[#172018] outline-none focus:border-[#1b5e2b]"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-[#172018]">Stage of your startup</span>
                <input
                  type="text"
                  value={startupForm.stage}
                  onChange={(event) => setStartupForm({ ...startupForm, stage: event.target.value })}
                  placeholder="e.g. ideation, prototype, pilot"
                  className="w-full rounded-3xl border border-[#dfe6d7] bg-[#f8faf5] px-4 py-3 text-sm text-[#172018] outline-none focus:border-[#1b5e2b]"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-[#172018]">Brief description</span>
                <textarea
                  value={startupForm.description}
                  onChange={(event) => setStartupForm({ ...startupForm, description: event.target.value })}
                  rows={5}
                  placeholder="Tell us what your startup is building and what support you need."
                  className="w-full rounded-3xl border border-[#dfe6d7] bg-[#f8faf5] px-4 py-3 text-sm text-[#172018] outline-none focus:border-[#1b5e2b]"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#1b5e2b] px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#154a22]"
                >
                  Submit registration
                </button>
                {formSubmitted && (
                  <span className="text-sm font-semibold text-[#1b5e2b]">Thank you! We have received your startup details.</span>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Leadership */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#172018] mb-8">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hub.leadership.map((leader, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 text-center bg-gradient-to-br from-white to-[#f5f7f2]/50"
              >
                <div className="text-5xl mb-3">{leader.avatar}</div>
                <h3 className="font-bold text-[#172018] mb-1">{leader.name}</h3>
                <p className="text-sm text-[#1b5e2b] font-semibold mb-3">{leader.title}</p>
                <p className="text-sm text-[#61705d] leading-6">{leader.description}</p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  <a
                    href={leader.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe6d7] bg-white text-[#1b5e2b] hover:border-[#154a22] hover:text-[#154a22] transition"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={leader.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe6d7] bg-white text-[#1b5e2b] hover:border-[#154a22] hover:text-[#154a22] transition"
                    title="X"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={leader.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#dfe6d7] bg-white text-[#1b5e2b] hover:border-[#154a22] hover:text-[#154a22] transition"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#172018] mb-8">Active Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programsList.map((program, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition bg-white"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#172018]">{program.name}</h3>
                  <span className="px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                    {program.status}
                  </span>
                </div>
                <p className="text-[#61705d] text-sm mb-3">{program.description}</p>
                <p className="text-xs text-[#5a6b57] font-semibold">
                  Deadline: {program.deadline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#172018] mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hub.successStories.map((story, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-[#172018] mb-2">{story.title}</h3>
                <p className="text-[#61705d]">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#172018] mb-8">Upcoming Events</h2>
          <div className="space-y-4">
            {hub.upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition bg-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[#1b5e2b]" />
                      <span className="text-sm font-semibold text-[#5a6b57]">
                        {event.date} @ {event.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#172018]">{event.title}</h3>
                  </div>
                  <Link
                    href="/events"
                    className="text-[#1b5e2b] font-semibold hover:text-[#154a22] transition flex-shrink-0"
                  >
                    RSVP →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join {hub.name}?</h2>
          <p className="text-lg mb-8 text-white/90">
            Explore our programs and become part of this innovation community.
          </p>
          <Link
            href="/programs"
            className="inline-block bg-white text-[#1b5e2b] px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition"
          >
            View Programs
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto rounded-lg border border-[#dfe6d7] p-8 text-center">
          <h2 className="text-2xl font-bold text-[#172018] mb-2">Stay Updated</h2>
          <p className="text-[#61705d] mb-6">
            Subscribe to {hub.name} updates and never miss an opportunity.
          </p>
          <Link
            href="/newsletter"
            className="inline-block bg-[#1b5e2b] text-white px-6 py-3 rounded-md font-bold hover:bg-[#154a22] transition"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}

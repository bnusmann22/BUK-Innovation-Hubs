import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Mail,
  Rocket,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { HERO_HUB_IMAGES, HOME_GALLERY_ITEMS } from "@/lib/hub-images";

export function HeroSection() {
  return (
    <motion.section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f5f7f2] via-white to-[#f5f7f2]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-[#1b5e2b]/10 text-[#1b5e2b] rounded-full text-sm font-semibold mb-4">
              Transform Ideas Into Impact
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-[#172018] leading-tight mb-6">
              Welcome to BUK Innovation Hubs
            </h1>
            <p className="text-lg text-[#61705d] leading-relaxed mb-8 max-w-lg">
              Your gateway to world-class innovation, entrepreneurship, and
              research opportunities. Connect with fellow innovators, access
              facilities, and transform your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/hubs"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1b5e2b] px-6 py-3 text-base font-bold text-white hover:bg-[#154a22] transition"
              >
                Explore Hubs <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[#1b5e2b] px-6 py-3 text-base font-bold text-[#1b5e2b] hover:bg-[#1b5e2b]/5 transition"
              >
                Join Programs <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#dfe6d7] bg-[#172018] shadow-xl">
              {HERO_HUB_IMAGES.map((image, index) => (
                <motion.img
                  key={image}
                  src={image}
                  alt={`BUK Innovation Hub highlight ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: index === 0 ? 1 : 0, scale: 1.04 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [1.04, 1, 1, 1.04],
                  }}
                  transition={{
                    duration: 20,
                    delay: index * 4,
                    repeat: Infinity,
                    times: [0, 0.08, 0.2, 0.28],
                    ease: "easeInOut",
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172018]/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export function ValuePropositionSection() {
  const values = [
    { icon: Zap, title: "Build Faster", text: "Access focused programs and practical support for moving ideas forward." },
    { icon: Users, title: "Find Community", text: "Connect with students, mentors, founders, and researchers across BUK." },
    { icon: Wrench, title: "Use Real Spaces", text: "Work from hub environments designed for collaboration and learning." },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-lg border border-[#dfe6d7] p-6 bg-gradient-to-br from-white to-[#f5f7f2]/50">
            <Icon className="w-8 h-8 text-[#1b5e2b] mb-4" />
            <h2 className="text-xl font-bold text-[#172018] mb-2">{title}</h2>
            <p className="text-[#61705d] leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeaturedHubsSection() {
  const hubs = ["AI & Robotics Hub", "Software Development Center", "Entrepreneurship Zone"];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Featured Hubs" text="Explore the spaces supporting technology, entrepreneurship, and research at BUK." href="/hubs" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <Link key={hub} href="/hubs" className="group rounded-lg border border-[#dfe6d7] p-6 hover:border-[#1b5e2b] hover:shadow-lg transition bg-white">
              <Rocket className="w-8 h-8 text-[#1b5e2b] mb-4" />
              <h3 className="text-xl font-bold text-[#172018] mb-2 group-hover:text-[#1b5e2b] transition">{hub}</h3>
              <p className="text-[#61705d] mb-4">A dedicated environment for practical innovation and collaboration.</p>
              <span className="inline-flex items-center gap-2 text-[#1b5e2b] font-semibold text-sm">Learn More <ChevronRight className="w-4 h-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramsSection() {
  const programs = ["Incubation Program", "Hackathon 2026", "Fellowship Program", "Research Commercialization"];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Active Programs & Opportunities" text="Join transformative programs and competitions." href="/programs" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div key={program} className="rounded-lg border border-[#dfe6d7] p-6 bg-gradient-to-br from-white to-[#f5f7f2]/50">
              <h3 className="text-lg font-bold text-[#172018] mb-2">{program}</h3>
              <p className="text-[#61705d] mb-4">Structured support for innovators developing ideas, products, and ventures.</p>
              <Link href="/programs" className="inline-flex items-center gap-2 text-[#1b5e2b] font-semibold text-sm">Register Now <ArrowRight className="w-4 h-4" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventsPreviewSection() {
  const events = ["AI & Innovation Workshop", "Startup Pitch Session", "Networking Mixer"];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Upcoming Events" text="Workshops, seminars, and networking opportunities." href="/events" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event} className="rounded-lg border border-[#dfe6d7] p-6 bg-white hover:shadow-lg transition">
              <div className="flex items-center gap-2 text-[#1b5e2b] text-sm font-semibold mb-3">
                <Calendar className="w-4 h-4" /> May 2026
              </div>
              <h3 className="text-lg font-bold text-[#172018] mb-2">{event}</h3>
              <p className="text-sm text-[#61705d]">BUK Innovation Hubs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#172018] mb-4">Our Innovation Spaces</h2>
          <p className="text-lg text-[#61705d] max-w-2xl mx-auto">
            Explore our facilities and vibrant innovation ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {HOME_GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="group relative rounded-lg overflow-hidden h-64 shadow-md hover:shadow-lg transition">
              <img src={item.image} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/gallery" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1b5e2b] px-6 py-3 text-base font-bold text-white hover:bg-[#154a22] transition">
            View Full Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function StartupsShowcaseSection() {
  return <SimpleCards title="Success Stories & Startups" href="/startups" items={["EduTech Solutions", "GreenEnergy Hub", "HealthConnect", "AgriTech Innovations"]} />;
}

export function NewsAnnouncementsSection() {
  return <SimpleCards title="Latest News & Announcements" href="/news" items={["New AI Lab Opening", "Global Tech Partnership", "Startup Funding Opportunity", "Student Startup Wins Award"]} />;
}

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#172018] mb-4">What Our Community Says</h2>
          <p className="text-lg text-[#61705d]">Stories from students, entrepreneurs, and innovators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Aisha Ibrahim", "Chukwu Okafor", "Zainab Mohammed"].map((name) => (
            <div key={name} className="rounded-lg border border-[#dfe6d7] p-6 bg-gradient-to-br from-white to-[#f5f7f2]/50">
              <p className="text-[#172018] font-semibold mb-4">"The hub connected me with the people, tools, and confidence to keep building."</p>
              <p className="font-bold text-[#172018]">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Join the Innovation Movement?</h2>
        <p className="text-lg mb-8 text-white/90">Start your journey with BUK Innovation Hubs today.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/programs" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-base font-bold text-[#1b5e2b] hover:bg-gray-100 transition">
            Join a Program <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/newsletter" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white/10 transition">
            Subscribe to Newsletter <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
      <div>
        <h2 className="text-4xl font-bold text-[#172018] mb-2">{title}</h2>
        <p className="text-lg text-[#61705d]">{text}</p>
      </div>
      <Link href={href} className="inline-flex items-center gap-2 text-[#1b5e2b] font-bold hover:gap-3 transition">
        View All <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}

function SimpleCards({ title, href, items }: { title: string; href: string; items: string[] }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={title} text="Catch up with the people and updates shaping the hub community." href={href} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link key={item} href={href} className="rounded-lg border border-[#dfe6d7] p-6 hover:border-[#1b5e2b] hover:shadow-lg transition bg-white">
              <Rocket className="w-6 h-6 text-[#1b5e2b] mb-4" />
              <h3 className="font-bold text-[#172018] mb-2">{item}</h3>
              <p className="text-sm text-[#61705d]">Learn more from the BUK Innovation Hubs ecosystem.</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

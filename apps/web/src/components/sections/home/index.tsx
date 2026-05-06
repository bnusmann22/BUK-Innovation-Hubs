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

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <motion.section
      className="section-space relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.7 }}
    >
      <div className="site-shell">
        <div className="grid items-center gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl"
          >
            <span className="section-kicker">Transform ideas into impact</span>
            <h1 className="mt-3 max-w-lg text-2xl font-semibold leading-tight text-[#162018] sm:text-3xl lg:text-4xl">
              BUK Innovation Hubs
            </h1>
            <p className="mt-3 max-w-md text-xs leading-6 text-[#536250] sm:text-sm">
              A focused gateway for innovation spaces, practical programs, and
              community opportunities across Bayero University Kano.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Link href="/hubs" className="glass-button">
                Explore Hubs <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/programs" className="glass-button-secondary">
                Join Programs <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[280px]"
            variants={fadeIn}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-panel relative aspect-[4/3] overflow-hidden rounded-lg">
              {HERO_HUB_IMAGES.map((image, index) => (
                <motion.img
                  key={image}
                  src={image}
                  alt={`BUK Innovation Hub highlight ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: index === 0 ? 1 : 0, scale: 1.03 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [1.03, 1, 1, 1.03],
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#162018]/35 via-transparent to-white/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export function ValuePropositionSection() {
  const values = [
    {
      icon: Zap,
      title: "Build Faster",
      text: "Focused support for moving ideas into practical prototypes.",
    },
    {
      icon: Users,
      title: "Find Community",
      text: "Meet students, mentors, founders, and researchers across BUK.",
    },
    {
      icon: Wrench,
      title: "Use Real Spaces",
      text: "Work from environments designed for collaboration and learning.",
    },
  ];

  return (
    <section className="section-space">
      <div className="site-shell grid grid-cols-1 gap-3 md:grid-cols-3">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass-panel-soft rounded-lg p-4">
            <Icon className="mb-3 h-4 w-4 text-[#1b5e2b]" />
            <h2 className="text-sm font-semibold text-[#162018]">{title}</h2>
            <p className="mt-1.5 text-xs leading-5 text-[#61705d]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeaturedHubsSection() {
  const hubs = [
    "AI & Robotics Hub",
    "Software Development Center",
    "Entrepreneurship Zone",
  ];

  return (
    <section className="section-space">
      <div className="site-shell">
        <SectionHeading
          title="Featured Hubs"
          text="Compact spaces supporting technology, entrepreneurship, and research."
          href="/hubs"
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {hubs.map((hub) => (
            <Link
              key={hub}
              href="/hubs"
              className="glass-panel-soft group rounded-lg p-4 transition hover:-translate-y-0.5"
            >
              <Rocket className="mb-3 h-4 w-4 text-[#1b5e2b]" />
              <h3 className="text-sm font-semibold text-[#162018] transition group-hover:text-[#1b5e2b]">
                {hub}
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-[#61705d]">
                A dedicated environment for practical innovation.
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1b5e2b]">
                Learn More <ChevronRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramsSection() {
  const programs = [
    "Incubation Program",
    "Hackathon 2026",
    "Fellowship Program",
    "Research Commercialization",
  ];

  return (
    <section className="section-space">
      <div className="site-shell">
        <SectionHeading
          title="Active Programs"
          text="Opportunities for builders, researchers, and early teams."
          href="/programs"
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {programs.map((program) => (
            <div key={program} className="glass-panel-soft rounded-lg p-4">
              <h3 className="text-sm font-semibold text-[#162018]">
                {program}
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-[#61705d]">
                Structured support for developing ideas, products, and ventures.
              </p>
              <Link
                href="/programs"
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#1b5e2b]"
              >
                Register Now <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventsPreviewSection() {
  const events = [
    "AI & Innovation Workshop",
    "Startup Pitch Session",
    "Networking Mixer",
  ];

  return (
    <section className="section-space">
      <div className="site-shell">
        <SectionHeading
          title="Upcoming Events"
          text="Workshops, seminars, and practical networking moments."
          href="/events"
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {events.map((event) => (
            <div key={event} className="glass-panel-soft rounded-lg p-4">
              <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#006b85]">
                <Calendar className="h-3.5 w-3.5" /> May 2026
              </div>
              <h3 className="text-sm font-semibold text-[#162018]">
                {event}
              </h3>
              <p className="mt-1.5 text-xs text-[#61705d]">
                BUK Innovation Hubs
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="section-space">
      <div className="site-shell">
        <div className="mb-6 text-center">
          <span className="section-kicker">Gallery</span>
          <h2 className="mt-2 text-xl font-semibold text-[#162018] sm:text-2xl">
            Innovation Spaces
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-[#61705d]">
            A quick look at the facilities and the community around them.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
          {HOME_GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="glass-panel-soft group relative h-28 overflow-hidden rounded-lg sm:h-32"
            >
              <img
                src={item.image}
                alt={item.label}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-2.5">
                <h3 className="text-[11px] font-semibold text-white">
                  {item.label}
                </h3>
                <p className="mt-0.5 line-clamp-1 text-[10px] text-white/78">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <Link href="/gallery" className="glass-button">
            View Gallery <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function StartupsShowcaseSection() {
  return (
    <SimpleCards
      title="Startups"
      href="/startups"
      items={[
        "EduTech Solutions",
        "GreenEnergy Hub",
        "HealthConnect",
        "AgriTech Innovations",
      ]}
    />
  );
}

export function NewsAnnouncementsSection() {
  return (
    <SimpleCards
      title="News"
      href="/news"
      items={[
        "New AI Lab Opening",
        "Global Tech Partnership",
        "Startup Funding Opportunity",
        "Student Startup Wins Award",
      ]}
    />
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="site-shell">
        <div className="mb-6 text-center">
          <span className="section-kicker">Community</span>
          <h2 className="mt-2 text-xl font-semibold text-[#162018] sm:text-2xl">
            What People Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {["Aisha Ibrahim", "Chukwu Okafor", "Zainab Mohammed"].map(
            (name) => (
              <div key={name} className="glass-panel-soft rounded-lg p-4">
                <p className="text-xs font-medium leading-5 text-[#162018]">
                  "The hub connected me with the people, tools, and confidence
                  to keep building."
                </p>
                <p className="mt-3 text-xs font-semibold text-[#162018]">
                  {name}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section-space">
      <div className="site-shell">
        <div className="glass-panel rounded-lg p-5 text-center sm:p-6">
          <span className="section-kicker">Start here</span>
          <h2 className="mx-auto mt-2 max-w-xl text-lg font-semibold text-[#162018] sm:text-xl">
            Join the Innovation Movement
          </h2>
          <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-[#61705d]">
            Get connected to the programs, events, and hub spaces shaping new
            ideas at BUK.
          </p>
          <div className="mt-4 flex flex-col justify-center gap-2 sm:flex-row">
            <Link href="/programs" className="glass-button">
              Join a Program <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/newsletter" className="glass-button-secondary">
              Newsletter <Mail className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="section-kicker">Explore</span>
        <h2 className="mt-2 text-lg font-semibold text-[#162018] sm:text-xl">
          {title}
        </h2>
        <p className="mt-1.5 max-w-lg text-xs leading-5 text-[#61705d]">
          {text}
        </p>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#1b5e2b] transition hover:gap-2"
      >
        View All <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
}

function SimpleCards({
  title,
  href,
  items,
}: {
  title: string;
  href: string;
  items: string[];
}) {
  return (
    <section className="section-space">
      <div className="site-shell">
        <SectionHeading
          title={title}
          text="Catch up with the people and updates shaping the hub community."
          href={href}
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item}
              href={href}
              className="glass-panel-soft rounded-lg p-4 transition hover:-translate-y-0.5"
            >
              <Rocket className="mb-3 h-4 w-4 text-[#1b5e2b]" />
              <h3 className="text-xs font-semibold leading-4 text-[#162018]">
                {item}
              </h3>
              <p className="mt-1.5 text-[10px] leading-4 text-[#61705d]">
                Learn more from the BUK Innovation Hubs ecosystem.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

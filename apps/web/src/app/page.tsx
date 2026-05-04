"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Users,
  Rocket,
  Award,
  Calendar,
  Mail,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
                🚀 Transform Ideas Into Impact
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-[#172018] leading-tight mb-6">
                Welcome to BUK Innovation Hubs
              </h1>
              <p className="text-lg text-[#61705d] leading-relaxed mb-8 max-w-lg">
                Your gateway to world-class innovation, entrepreneurship, and
                research opportunities. Connect with fellow innovators, access
                cutting-edge facilities, and transform your ideas into reality.
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1b5e2b]/20 to-[#006b85]/20 flex items-center justify-center">
                <Lightbulb className="w-32 h-32 text-[#1b5e2b]/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Value Proposition Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#172018] mb-4">
              Why Join BUK Innovation Hubs?
            </h2>
            <p className="text-lg text-[#61705d] max-w-2xl mx-auto">
              We provide students, researchers, entrepreneurs, and industry
              professionals with the resources and community needed to innovate
              and succeed.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                icon: Rocket,
                title: "Launch Your Ideas",
                description:
                  "From concept to market with mentorship, funding, and resources.",
              },
              {
                icon: Users,
                title: "Connect with Innovators",
                description:
                  "Network with peers, mentors, and industry professionals.",
              },
              {
                icon: Award,
                title: "Access World-Class Facilities",
                description:
                  "Use cutting-edge tools and spaces to bring your vision to life.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-8 hover:shadow-lg transition"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-12 h-12 text-[#1b5e2b] mb-4" />
                <h3 className="text-xl font-bold text-[#172018] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#61705d] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Hubs Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-[#172018] mb-2">
                Featured Innovation Hubs
              </h2>
              <p className="text-lg text-[#61705d]">
                Explore our diverse ecosystem of innovation spaces
              </p>
            </div>
            <Link
              href="/hubs"
              className="hidden md:inline-flex items-center gap-2 text-[#1b5e2b] font-bold hover:gap-3 transition"
            >
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              {
                name: "AI & Robotics Hub",
                description:
                  "Cutting-edge AI, machine learning, and robotics research",
                icon: "🤖",
              },
              {
                name: "Software Development Center",
                description:
                  "Full-stack development and web/mobile app creation",
                icon: "💻",
              },
              {
                name: "Entrepreneurship Zone",
                description: "Startup incubation and business development",
                icon: "🚀",
              },
            ].map((hub, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={`/hubs/${idx}`}
                  className="group rounded-lg border border-[#dfe6d7] p-6 hover:border-[#1b5e2b] hover:shadow-lg transition bg-white"
                >
                  <div className="text-5xl mb-4">{hub.icon}</div>
                  <h3 className="text-xl font-bold text-[#172018] mb-2 group-hover:text-[#1b5e2b] transition">
                    {hub.name}
                  </h3>
                  <p className="text-[#61705d] mb-4">{hub.description}</p>
                  <div className="flex items-center gap-2 text-[#1b5e2b] font-semibold text-sm">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-[#172018] mb-2">
                Active Programs & Opportunities
              </h2>
              <p className="text-lg text-[#61705d]">
                Join our transformative programs and competitions
              </p>
            </div>
            <Link
              href="/programs"
              className="hidden md:inline-flex items-center gap-2 text-[#1b5e2b] font-bold hover:gap-3 transition"
            >
              All Programs <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                title: "Incubation Program",
                description: "12-month startup incubation with mentorship",
                badge: "Q3 2026",
              },
              {
                title: "Hackathon 2026",
                description: "48-hour innovation challenge with ₦5M prizes",
                badge: "June 2026",
              },
              {
                title: "Fellowship Program",
                description:
                  "6-month intensive training for aspiring entrepreneurs",
                badge: "Ongoing",
              },
              {
                title: "Research Commercialization",
                description:
                  "Transform academic research into market-ready solutions",
                badge: "Rolling",
              },
            ].map((program, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition bg-gradient-to-br from-white to-[#f5f7f2]/50"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#172018]">
                    {program.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-[#1b5e2b]/10 text-[#1b5e2b] text-xs font-semibold rounded-full">
                    {program.badge}
                  </span>
                </div>
                <p className="text-[#61705d] mb-4">{program.description}</p>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 text-[#1b5e2b] font-semibold text-sm hover:gap-3 transition"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Events Preview Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-[#172018] mb-2">
                Upcoming Events
              </h2>
              <p className="text-lg text-[#61705d]">
                Don't miss out on workshops, seminars, and networking events
              </p>
            </div>
            <Link
              href="/events"
              className="hidden md:inline-flex items-center gap-2 text-[#1b5e2b] font-bold hover:gap-3 transition"
            >
              See All Events <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              {
                date: "May 15, 2026",
                time: "2:00 PM - 5:00 PM",
                title: "AI & Innovation Workshop",
                location: "Tech Hub, Room A101",
                attendees: 120,
              },
              {
                date: "May 22, 2026",
                time: "10:00 AM - 1:00 PM",
                title: "Startup Pitch Session",
                location: "Entrepreneurship Zone",
                attendees: 85,
              },
              {
                date: "May 29, 2026",
                time: "4:00 PM - 6:00 PM",
                title: "Networking Mixer",
                location: "Innovation Hub Lounge",
                attendees: 200,
              },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition bg-white"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-2 text-[#1b5e2b] text-sm font-semibold mb-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <h3 className="text-lg font-bold text-[#172018] mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-[#61705d] mb-3">{event.time}</p>
                <p className="text-sm text-[#61705d] mb-4">{event.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#5a6b57] font-semibold">
                    {event.attendees} interested
                  </span>
                  <Link
                    href="/events"
                    className="text-[#1b5e2b] font-semibold text-sm hover:text-[#154a22] transition"
                  >
                    RSVP →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#172018] mb-4">
              Our Innovation Spaces
            </h2>
            <p className="text-lg text-[#61705d] max-w-2xl mx-auto">
              Explore our state-of-the-art facilities and vibrant innovation ecosystem
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              {
                id: "hub-1",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
                label: "AI & Robotics Lab",
                description: "Advanced computing facilities with GPU clusters"
              },
              {
                id: "hub-2",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
                label: "Development Center",
                description: "Modern workspace for software development"
              },
              {
                id: "hub-3",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
                label: "Meeting & Collaboration",
                description: "Flexible spaces for team collaboration"
              },
              {
                id: "hub-4",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
                label: "Pitch Arena",
                description: "Professional space for startup pitches"
              },
              {
                id: "hub-5",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
                label: "Design Studio",
                description: "Creative space for UX/UI and design work"
              },
              {
                id: "hub-6",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
                label: "Research Lab",
                description: "Equipped for cutting-edge research projects"
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="group relative rounded-lg overflow-hidden h-64 shadow-md hover:shadow-lg transition"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1b5e2b] px-6 py-3 text-base font-bold text-white hover:bg-[#154a22] transition"
            >
              View Full Gallery <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Startups Showcase Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-[#172018] mb-2">
                Success Stories & Startups
              </h2>
              <p className="text-lg text-[#61705d]">
                Meet the innovators and companies changing the world
              </p>
            </div>
            <Link
              href="/startups"
              className="hidden md:inline-flex items-center gap-2 text-[#1b5e2b] font-bold hover:gap-3 transition"
            >
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              {
                name: "EduTech Solutions",
                stage: "Seed Stage",
                description: "AI-powered education platform",
              },
              {
                name: "GreenEnergy Hub",
                stage: "Series A",
                description: "Renewable energy for SMEs",
              },
              {
                name: "HealthConnect",
                stage: "Pre-seed",
                description: "Telemedicine platform",
              },
              {
                name: "AgriTech Innovations",
                stage: "Seed Stage",
                description: "Smart farming solutions",
              },
            ].map((startup, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={`/startups/${idx}`}
                  className="group rounded-lg border border-[#dfe6d7] p-6 hover:border-[#1b5e2b] hover:shadow-lg transition bg-gradient-to-br from-white to-[#f5f7f2]/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1b5e2b]/10 mb-4 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-[#1b5e2b]" />
                  </div>
                  <h3 className="font-bold text-[#172018] mb-1 group-hover:text-[#1b5e2b] transition">
                    {startup.name}
                  </h3>
                  <p className="text-xs text-[#1b5e2b] font-semibold mb-2">
                    {startup.stage}
                  </p>
                  <p className="text-sm text-[#61705d]">{startup.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* News & Announcements Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-[#172018] mb-2">
                Latest News & Announcements
              </h2>
              <p className="text-lg text-[#61705d]">
                Stay updated with our latest developments
              </p>
            </div>
            <Link
              href="/news"
              className="hidden md:inline-flex items-center gap-2 text-[#1b5e2b] font-bold hover:gap-3 transition"
            >
              All News <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                date: "May 3, 2026",
                category: "Announcement",
                title: "New AI Lab Opening This Summer",
                excerpt:
                  "We're excited to announce the opening of our state-of-the-art AI laboratory with investment of ₦200M...",
              },
              {
                date: "May 1, 2026",
                category: "Partnership",
                title: "Partnership with Global Tech Leaders",
                excerpt:
                  "BUK Innovation Hubs partners with leading global tech companies to enhance our programs and resources...",
              },
              {
                date: "April 28, 2026",
                category: "Opportunity",
                title: "₦50M Funding for Early-Stage Startups",
                excerpt:
                  "Applications are now open for our new startup funding initiative supporting innovative ideas...",
              },
              {
                date: "April 25, 2026",
                category: "Achievement",
                title: "Student Startup Wins International Award",
                excerpt:
                  "Congratulations to our incubated startup for winning the Global Innovation Challenge 2026...",
              },
            ].map((news, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  href="/news"
                  className="group rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg transition bg-white hover:border-[#1b5e2b]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#1b5e2b] bg-[#1b5e2b]/10 px-2 py-1 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-xs text-[#61705d]">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#172018] mb-2 group-hover:text-[#1b5e2b] transition">
                    {news.title}
                  </h3>
                  <p className="text-[#61705d] line-clamp-2 mb-3">
                    {news.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#1b5e2b] font-semibold text-sm">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#172018] mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-[#61705d] max-w-2xl mx-auto">
              Hear from students, entrepreneurs, and professionals about their
              experience with BUK Innovation Hubs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                quote:
                  "The facilities and mentorship here transformed my startup idea into a thriving business. I couldn't have done it without BUK Innovation Hubs.",
                name: "Aisha Ibrahim",
                title: "Founder & CEO, GreenEnergy Hub",
                avatar: "🎯",
              },
              {
                quote:
                  "Being part of this ecosystem connected me with the right people and resources. Best decision I made in my university journey.",
                name: "Chukwu Okafor",
                title: "Researcher & Innovator",
                avatar: "🚀",
              },
              {
                quote:
                  "The programs are world-class, and the community is incredibly supportive. I've learned more here than anywhere else.",
                name: "Zainab Mohammed",
                title: "Hackathon Winner 2026",
                avatar: "💡",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-8 bg-gradient-to-br from-white to-[#f5f7f2]/50"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {"⭐⭐⭐⭐⭐".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="text-lg text-[#172018] font-semibold mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-bold text-[#172018]">{testimonial.name}</p>
                    <p className="text-sm text-[#61705d]">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1b5e2b] to-[#006b85] text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Join the Innovation Movement?
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Start your journey with BUK Innovation Hubs today and be part of a
            thriving ecosystem of innovators, entrepreneurs, and changemakers.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-base font-bold text-[#1b5e2b] hover:bg-gray-100 transition"
            >
              Join a Program <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-base font-bold text-white hover:bg-white/10 transition"
            >
              Subscribe to Newsletter <Mail className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

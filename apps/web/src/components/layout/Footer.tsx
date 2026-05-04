"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../social-icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Hubs", href: "/hubs" },
  { name: "Programs", href: "/programs" },
];

const exploreLinks = [
  { name: "Events", href: "/events" },
  { name: "Startups", href: "/startups" },
  { name: "News", href: "/news" },
  { name: "Newsletter", href: "/newsletter" },
];

const socialLinks = [
  { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dfe6d7] bg-white/80 text-[#172018]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">
              BUK Innovation Hubs
            </h3>
            <p className="text-sm text-[#61705d] leading-relaxed">
              Empowering students, researchers, and entrepreneurs through
              world-class innovation spaces at Bayero University Kano.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.nav variants={itemVariants}>
            <h4 className="font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-[#61705d]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#1b5e2b] transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Explore */}
          <motion.nav variants={itemVariants}>
            <h4 className="font-bold text-sm mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-[#61705d]">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#1b5e2b] transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-sm mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-[#61705d]">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <a href="mailto:innovation@buk.edu.ng">innovation@buk.edu.ng</a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <a href="tel:+2348000000000">+234 800 000 0000</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Bayero University Kano, Nigeria</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social */}
        <div className="border-t border-[#dfe6d7] py-6">
          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#61705d] hover:text-[#1b5e2b] transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#dfe6d7] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#61705d]">
          <p>© {currentYear} BUK Innovation Hubs. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
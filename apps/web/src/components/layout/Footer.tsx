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
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
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
    <footer className="border-t border-white/50 bg-white/42 text-[#172018] backdrop-blur-2xl">
      <div className="site-shell py-7">
        <motion.div
          className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="mb-2 text-sm font-semibold">
              BUK Innovation Hubs
            </h3>
            <p className="text-xs leading-5 text-[#61705d]">
              Empowering students, researchers, and entrepreneurs through
              focused innovation spaces at Bayero University Kano.
            </p>
          </motion.div>

          <motion.nav variants={itemVariants}>
            <h4 className="mb-2 text-[11px] font-semibold">Quick Links</h4>
            <ul className="space-y-1.5 text-xs text-[#61705d]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#1b5e2b]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav variants={itemVariants}>
            <h4 className="mb-2 text-[11px] font-semibold">Explore</h4>
            <ul className="space-y-1.5 text-xs text-[#61705d]">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[#1b5e2b]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={itemVariants}>
            <h4 className="mb-2 text-[11px] font-semibold">Contact</h4>
            <div className="space-y-2 text-xs text-[#61705d]">
              <div className="flex items-start gap-1.5">
                <Mail className="mt-0.5 h-3.5 w-3.5" />
                <a href="mailto:innovation@buk.edu.ng">innovation@buk.edu.ng</a>
              </div>
              <div className="flex items-start gap-1.5">
                <Phone className="mt-0.5 h-3.5 w-3.5" />
                <a href="tel:+2348000000000">+234 800 000 0000</a>
              </div>
              <div className="flex items-start gap-1.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5" />
                <span>Bayero University Kano, Nigeria</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-[#dfe6d7]/70 py-3.5">
          <div className="flex justify-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#61705d] transition hover:text-[#1b5e2b]"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#dfe6d7]/70 pt-3.5 text-[10px] text-[#61705d] md:flex-row">
          <p>© {currentYear} BUK Innovation Hubs. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

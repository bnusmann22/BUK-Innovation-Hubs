"use client";

import Logo from "@repo/ui/logo";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Hubs", href: "/hubs" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Startups", href: "/startups" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="sticky top-0 z-50 border-b border-white/40 bg-white/62 backdrop-blur-2xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="site-shell">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 [&_h1]:text-[11px] [&_p]:text-[9px]"
            >
              <Logo size="sm" showText textColor="dark" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="rounded-md px-2 py-1.5 text-[10px] font-medium text-[#172018] transition hover:bg-white/50 hover:text-[#1b5e2b]"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Desktop CTA Buttons */}
          <motion.div 
            className="hidden md:flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href="/newsletter"
              className="glass-button-secondary px-2.5 py-1.5 text-[10px]"
            >
              Newsletter
            </Link>
            <Link
              href="/programs"
              className="glass-button px-2.5 py-1.5 text-[10px]"
            >
              Join Now
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="rounded-md p-1.5 text-[#172018] transition hover:bg-white/50 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="glass-panel-soft mb-3 space-y-1 rounded-lg p-2.5 md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-md px-2.5 py-1.5 text-[11px] font-medium text-[#172018] transition hover:bg-white/58 hover:text-[#1b5e2b]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                className="mt-2.5 flex flex-col gap-1.5 border-t border-[#dfe6d7]/70 pt-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <Link
                  href="/newsletter"
                  className="glass-button-secondary w-full text-center text-[10px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Newsletter
                </Link>
                <Link
                  href="/programs"
                  className="glass-button w-full text-center text-[10px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Now
                </Link>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

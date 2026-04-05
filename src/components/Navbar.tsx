"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Logo } from "./ui/Logo";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      setScrolled(window.scrollY > 20);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Insights", href: "#insights" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Logo className="w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-slate-900 font-bold text-xl tracking-tight">Indiwebpros</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 transition-colors",
            scrolled ? "text-slate-900" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-slate-950 flex flex-col p-8 md:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <Logo className="w-10 h-10" />
                <span className="text-white font-bold text-xl tracking-tight">Indiwebpros</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto">
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-5 bg-indigo-600 text-white text-center font-bold rounded-2xl shadow-xl shadow-indigo-500/20 active:scale-95 transition-transform"
              >
                Start a Project
              </motion.a>
              <div className="mt-8 flex justify-center gap-6 text-white/40">
                <p className="text-xs font-medium tracking-widest uppercase">Innovation • Reliability • Growth</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

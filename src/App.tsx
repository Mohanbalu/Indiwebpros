/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { SplineSceneBasic } from "./components/SplineDemo";
import { LandingAccordionItem } from "./components/ui/interactive-image-accordion";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { InsightsSection } from "./components/InsightsSection";
import { PricingSection } from "./components/PricingSection";
import { ClientsSectionDemo } from "./components/ClientsSectionDemo";
import { ContactSection } from "./components/ContactSection";
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./components/ui/Logo";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100">
      <Navbar />
      
      {/* Hero Section - Clean Light Background */}
      <section className="w-full bg-slate-50 pt-20">
        <div className="w-full max-w-7xl mx-auto">
          <SplineSceneBasic />
        </div>
      </section>

      {/* Trusted By Section (Social Proof) */}
      <section className="w-full py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-mono font-bold tracking-[0.3em] text-slate-400 uppercase mb-10">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {["Google", "Microsoft", "Amazon", "Netflix", "Meta"].map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Interactive Accordion Section */}
      <LandingAccordionItem />

      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* Insights Section (SEO Content) */}
      <InsightsSection />

      {/* Pricing Section with Scroll Animation */}
      <PricingSection />

      {/* Testimonials Section */}
      <ClientsSectionDemo />

      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer Section */}
      <footer className="w-full bg-slate-900 pt-24 pb-12 text-slate-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            {/* Brand Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <Logo className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-bold text-2xl tracking-tight">Indiwebpros</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Building high-performance digital experiences for students and businesses. We bridge the gap between engineering and design.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: "Services", href: "#services" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Insights", href: "#insights" },
                  { name: "Pricing", href: "#pricing" },
                  { name: "Contact", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Services</h4>
              <ul className="space-y-4">
                {[
                  "Web Development",
                  "AI & ML Solutions",
                  "Mobile Apps",
                  "Student Projects",
                  "Cloud Systems"
                ].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Get in Touch</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:mohanbalu292@gmail.com" className="text-slate-300 hover:text-white transition-colors">mohanbalu292@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:8074223801" className="text-slate-300 hover:text-white transition-colors">8074223801</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-slate-300">Andhra Pradesh, India</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Indiwebpros. All rights reserved.</p>
              <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-mono font-bold text-emerald-500/80 uppercase tracking-widest">All Systems Operational</span>
              </div>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

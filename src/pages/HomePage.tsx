import React from "react";
import { SplineSceneBasic } from "../components/SplineDemo";
import { LandingAccordionItem } from "../components/ui/interactive-image-accordion";
import { ServicesSection } from "../components/ServicesSection";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { InsightsSection } from "../components/InsightsSection";
import { PricingSection } from "../components/PricingSection";
import { ClientsSectionDemo } from "../components/ClientsSectionDemo";
import { ContactSection } from "../components/ContactSection";

export function HomePage() {
  return (
    <>
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
    </>
  );
}

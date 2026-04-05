"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

// --- Type Definitions for props ---
export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote?: string;
  avatarSrc?: string;
  rating: number;
}

export interface ClientsSectionProps {
  tagLabel: string;
  title: string;
  description: string;
  stats: Stat[];
  testimonials: Testimonial[];
  primaryActionLabel: string;
  secondaryActionLabel: string;
  className?: string;
}

// --- Internal Sub-Components ---

// StatCard using shadcn variables
const StatCard: React.FC<Stat> = ({ value, label }) => (
  <Card className="bg-slate-50 border-slate-100 text-center rounded-xl shadow-sm">
    <CardContent className="p-4">
      <p className="text-3xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </CardContent>
  </Card>
);

// A sticky testimonial card for the stacking effect.
const StickyTestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  return (
    <motion.div
      className="sticky w-full"
      style={{ top: `${20 + index * 24}px` }} // Staggered top position for stacking
    >
      <div className={cn(
        "p-8 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col h-auto w-full",
        "bg-white border border-slate-100"
      )}>
        {/* Top section: Image and Author */}
        <div className="flex items-center gap-4">
          {testimonial.avatarSrc && (
            <div
              className="w-14 h-14 rounded-xl bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url(${testimonial.avatarSrc})` }}
              aria-label={`Photo of ${testimonial.name}`}
            />
          )}
          <div className="flex-grow">
            <p className="font-semibold text-lg text-slate-900">{testimonial.name}</p>
            <p className="text-sm text-slate-500">{testimonial.title}</p>
          </div>
        </div>

        {/* Middle section: Rating */}
        <div className="flex items-center gap-2 my-6">
          <span className="font-bold text-base text-slate-900">{testimonial.rating.toFixed(1)}</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(testimonial.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-slate-200"
                )}
              />
            ))}
          </div>
        </div>

        {/* Bottom section: Quote */}
        {testimonial.quote && (
          <p className="text-base text-slate-600 leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
        )}
      </div>
    </motion.div>
  );
};

// --- Main Exported Component ---

export const ClientsSection = ({
  tagLabel,
  title,
  description,
  stats,
  testimonials,
  primaryActionLabel,
  secondaryActionLabel,
  className,
}: ClientsSectionProps) => {
  // Calculate a height for the scroll container to ensure all cards can stack
  const scrollContainerHeight = `calc(100vh + ${testimonials.length * 100}px)`;

  return (
    <section className={cn("w-full bg-white text-slate-900 py-20 md:py-28", className)}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Sticky Content */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-slate-500 font-medium">{tagLabel}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">{title}</h2>
          <p className="text-lg text-slate-500 leading-relaxed">{description}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-8">
            <Button 
              size="lg" 
              className="rounded-full bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {primaryActionLabel}
            </Button>
          </div>
        </div>

        {/* Right Column: Container for the sticky card stack */}
        <div className="relative flex flex-col gap-4" style={{ height: scrollContainerHeight }}>
          {testimonials.map((testimonial, index) => (
            <StickyTestimonialCard
              key={testimonial.name}
              index={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

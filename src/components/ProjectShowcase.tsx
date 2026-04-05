"use client";

import React from "react";
import { CardStack, CardStackItem } from "./ui/card-stack";
import { motion } from "motion/react";

const projects: CardStackItem[] = [
  {
    id: 0,
    title: "IIT Academy Website",
    description: "A comprehensive educational portal for IIT aspirants, featuring course management and mock test modules.",
    imageSrc: "https://i.ibb.co/9kc06zxR/image.png",
    tag: "Featured",
    href: "#",
  },
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack shopping experience with real-time inventory and secure payments.",
    imageSrc: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: "Interactive data visualization for machine learning models and performance metrics.",
    imageSrc: "https://framerusercontent.com/images/ZHfo1O8H8PpzDiRGQexDwPBtZpA.png",
    href: "#",
  },
  {
    id: 3,
    title: "Student Portal",
    description: "Centralized hub for academic resources, assignments, and peer collaboration.",
    imageSrc: "https://cdn.prod.website-files.com/67a3700c65457964cf349cd4/67b6faa4a98701dd6ba4ab22_Student%20Portal%40website-card.webp",
    tag: "Education",
    href: "#",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description: "Custom content management system designed specifically for creative professionals.",
    imageSrc: "https://cdn.prod.website-files.com/62c5836076839ad95e36215d/66c4ab129ee870bbe2000ede_gallery_img1.jpg",
    tag: "CMS",
    href: "#",
  },
  {
    id: 5,
    title: "IoT Control Center",
    description: "Real-time monitoring and control for smart home devices and industrial sensors.",
    imageSrc: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    href: "#",
  },
];

export function ProjectShowcase() {
  return (
    <section id="portfolio" className="w-full py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-indigo-50 border border-indigo-100 rounded-full"
          >
            <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 uppercase">Project Showcase</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Our Latest <br />
            <span className="text-indigo-600">Innovations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed"
          >
            Explore our diverse portfolio of projects, ranging from complex full-stack applications to elegant static websites.
          </motion.p>
        </div>

        <div className="relative">
          <CardStack
            items={projects}
            initialIndex={0}
            autoAdvance
            intervalMs={3000}
            pauseOnHover
            showDots
            cardWidth={600}
            cardHeight={400}
          />
        </div>
      </div>
    </section>
  );
}

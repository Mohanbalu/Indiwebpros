"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  Globe, 
  Cpu, 
  Smartphone, 
  Database, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const services = [
  {
    title: "Custom Web Development",
    description: "High-performance, SEO-optimized websites for businesses and student portfolios using React and Next.js.",
    features: ["Business Websites", "Student Portfolios", "E-commerce Solutions"],
    icon: Globe,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "AI & Business Automation",
    description: "Integrating intelligent AI models to automate business workflows and provide data-driven student project insights.",
    features: ["Business AI Integration", "Student AI Projects", "Predictive Analytics"],
    icon: Cpu,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Mobile App Solutions",
    description: "Native and cross-platform mobile apps designed for business efficiency and student innovation.",
    features: ["iOS & Android Apps", "Startup MVPs", "Student App Projects"],
    icon: Smartphone,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    title: "Cloud & Backend Systems",
    description: "Scalable cloud infrastructure and database management for high-traffic business apps and student research.",
    features: ["Scalable Backends", "Database Design", "Cloud Hosting"],
    icon: Database,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Cybersecurity Audits",
    description: "Robust security protocols and audits to protect business data and student research integrity.",
    features: ["Security Audits", "Data Protection", "Compliance"],
    icon: ShieldCheck,
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    title: "Digital Growth & Performance",
    description: "Fine-tuning digital products for maximum speed, SEO ranking, and business conversion rates.",
    features: ["SEO Optimization", "Speed Tuning", "Conversion Growth"],
    icon: Zap,
    color: "bg-indigo-500/10 text-indigo-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-indigo-50 border border-indigo-100 rounded-full"
          >
            <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 uppercase">Our Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Solutions for the <br />
            <span className="text-indigo-600">Digital Frontier</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-500 max-w-2xl leading-relaxed"
          >
            We combine cutting-edge technology with human-centric design to build products that scale and inspire.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300", service.color)}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-200/50">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={feature} 
                      className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 bg-slate-200/30 rounded-md group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle hover accent */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

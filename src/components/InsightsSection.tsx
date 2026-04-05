import React from "react";
import { motion } from "motion/react";
import { BookOpen, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";

const insights = [
  {
    category: "For Students",
    title: "How to Build a High-Impact Student Portfolio",
    description: "Learn the essential steps to showcase your engineering projects and land your dream internship.",
    icon: BookOpen,
    keywords: ["Student Portfolio", "Engineering Projects", "Career Growth"]
  },
  {
    category: "For Business",
    title: "AI Automation: Scaling Your Business in 2026",
    description: "Discover how custom AI solutions can reduce operational costs and improve customer satisfaction.",
    icon: Lightbulb,
    keywords: ["AI Automation", "Business Scaling", "Efficiency"]
  },
  {
    category: "Technology",
    title: "The Future of Web Development: Beyond React",
    description: "Exploring the next generation of web frameworks and how they impact site performance and SEO.",
    icon: TrendingUp,
    keywords: ["Web Trends", "SEO Performance", "Next-Gen Tech"]
  }
];

export function InsightsSection() {
  return (
    <section id="insights" className="w-full py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-indigo-50 border border-indigo-100 rounded-full"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 uppercase">Knowledge Hub</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Insights for <span className="text-indigo-600">Innovation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-slate-500 leading-relaxed"
            >
              Expert perspectives on technology, business growth, and educational excellence to help you stay ahead of the curve.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all"
          >
            Explore All Insights <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">{item.category}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {item.description}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-2">
                {item.keywords.map(kw => (
                  <span key={kw} className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded">
                    #{kw.replace(/\s/g, "")}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

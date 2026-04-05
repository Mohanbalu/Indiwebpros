'use client'

import { SplineScene } from "@/src/components/ui/splite";
import { Spotlight } from "@/src/components/ui/spotlight"
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
 
export function SplineSceneBasic() {
  return (
    <div className="w-full min-h-[600px] bg-slate-50 relative overflow-hidden flex items-center justify-center py-12 md:py-24">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-50"
        fill="indigo"
      />
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 relative z-10 flex flex-col justify-center text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 w-fit mx-auto md:mx-0 bg-indigo-50 border border-indigo-100 rounded-full">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 uppercase">System Ready</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Ship your <br className="hidden md:block" /> 
            <span className="text-indigo-600">
              Digital Vision
            </span>
          </h1>
          
          <p className="mt-8 text-slate-500 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed font-normal">
            We bridge the gap between complex engineering and elegant design. High-performance websites and full-stack projects for students and businesses.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
            <div className="relative">
              <motion.button 
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-indigo-600 text-white text-sm font-bold rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              {/* Availability Indicator */}
              <div className="absolute -top-3 -right-3 px-2 py-1 bg-emerald-50 border border-emerald-100 rounded-lg shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-tighter">Next: Today</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 0, 0, 0.02)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-2xl hover:text-slate-900 transition-all"
            >
              View Case Studies
            </motion.button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-4">
            {[
              "Production Grade",
              "Fast Deployment",
              "Full Support"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 text-slate-400 text-xs font-mono"
              >
                <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right content - Robot Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative w-full h-[400px] md:h-[600px] flex items-center justify-center"
        >
          <div className="w-full h-full transform scale-110 md:scale-125">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
          {/* Subtle gradient to blend */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-50 via-transparent to-transparent md:bg-none" />
        </motion.div>
      </div>
    </div>
  )
}

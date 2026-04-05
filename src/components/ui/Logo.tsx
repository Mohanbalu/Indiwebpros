import React from "react";
import { cn } from "@/src/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
}

export function Logo({ className, iconClassName }: LogoProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Main Logo Container */}
      <div className={cn(
        "relative w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/20",
        iconClassName
      )}>
        {/* Professional Brand Mark SVG */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4"
        >
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" /> {/* Indigo-500 */}
              <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan-500 */}
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Hexagonal Foundation (Reliability & Engineering) */}
          <path 
            d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" 
            stroke="url(#logo-gradient)" 
            strokeWidth="1" 
            className="opacity-30"
          />
          
          {/* The "Indiwebpros" Dynamic Path (Innovation & Growth) */}
          {/* This path forms an abstract 'W' that also looks like a rising trajectory */}
          <path 
            d="M25 65 L40 35 L50 55 L60 35 L75 65" 
            stroke="url(#logo-gradient)" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            filter="url(#glow)"
          />

          {/* The "i" Spark (Intelligence & Precision) */}
          <circle 
            cx="50" 
            cy="20" 
            r="5" 
            fill="white" 
            className="animate-pulse"
          />
          
          {/* Negative Space Accent */}
          <path 
            d="M50 20 L50 40" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            className="opacity-40"
          />

          {/* Professional Seal Detail */}
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.5" className="opacity-10" />
        </svg>
        
        {/* Ambient Light Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
      </div>
    </div>
  );
}

import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function PricingSection() {
  const pricingGroups = [
    {
      title: "Programming & Technical",
      items: [
        { name: "C / C++ Help", desc: "Assignments / Debugging", price: "₹500" },
        { name: "Python Help", desc: "Scripting / Logic", price: "₹650" },
        { name: "DBMS Help", desc: "SQL / Schema Design", price: "₹800" },
      ],
    },
    {
      title: "Website Development",
      items: [
        { name: "Static Website", desc: "3–5 Pages / Portfolio", price: "₹1500" },
        { name: "Dynamic Website", desc: "Login / DB / Admin Panel", price: "₹3000" },
        { name: "Full Stack System", desc: "Complete Application", price: "₹5K – ₹8K" },
      ],
    },
    {
      title: "Student Projects",
      items: [
        { name: "Minor Project", desc: "Code + Report + PPT", price: "₹3K – ₹8K" },
        { name: "Major Project", desc: "Complete Academic Support", price: "₹5K – ₹10K" },
        { name: "Research Paper", desc: "6–10+ Pages", price: "₹1000+" },
      ],
    },
    {
      title: "Academic & Professional",
      items: [
        { name: "Assignments", desc: "Quick Solutions", price: "₹200 – ₹500" },
        { name: "Resume + ATS", desc: "Optimization", price: "₹1000" },
        { name: "Portfolio Creation", desc: "Personal Branding", price: "₹700" },
      ],
    },
    {
      title: "Business & Hosting",
      items: [
        { name: "Landing Page", desc: "High Conversion", price: "₹3K – ₹8K" },
        { name: "Domain & Hosting", desc: "Setup & Config", price: "₹1K – ₹1.5K" },
        { name: "Full Business Site", desc: "Enterprise Solution", price: "₹30k - 95k" },
      ],
    },
  ];

  return (
    <div id="pricing" className="flex flex-col overflow-hidden bg-white">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-indigo-50 border border-indigo-100 rounded-full">
              <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 uppercase">Transparent Pricing</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Flexible Plans for <br />
              <span className="text-indigo-600">Every Need</span>
            </h1>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full p-4 md:p-8 bg-slate-50/50 rounded-[32px] overflow-y-auto no-scrollbar">
          {pricingGroups.map((group, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-8 rounded-[32px] border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 ${idx === 1 ? 'ring-2 ring-indigo-500 shadow-lg shadow-indigo-500/10' : ''}`}
            >
              <div className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest mb-6">
                {group.title}
              </div>
              <div className="space-y-6 flex-grow">
                {group.items.map((item, i) => (
                  <div key={i} className="group/item">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover/item:text-indigo-600 transition-colors">{item.name}</h4>
                      <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{item.price}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                    {i !== group.items.length - 1 && <div className="mt-4 border-b border-slate-100" />}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`mt-10 w-full py-4 rounded-2xl text-xs font-bold transition-all active:scale-95 shadow-sm ${idx === 1 ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-500/20' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20'}`}
              >
                Get Started
              </button>
            </div>
          ))}
          
          {/* Contact Card */}
          <div className="flex flex-col p-8 rounded-[32px] border border-dashed border-slate-300 bg-white/50 items-center justify-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-4">
              <span className="text-indigo-600 text-xl font-bold">?</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Custom Requirement?</h3>
            <p className="text-xs text-slate-500 mb-8 leading-relaxed">We handle complex enterprise needs and unique academic challenges.</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white border border-slate-200 text-slate-900 text-xs font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

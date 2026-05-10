"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Rocket, 
  Users, 
  Code, 
  Cpu, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Globe, 
  MessageSquare, 
  ArrowRight, 
  ChevronDown,
  Brain,
  Layers,
  GraduationCap,
  ShieldCheck,
  Zap,
  TrendingUp,
  Briefcase
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Logo } from "./ui/Logo";

// --- Components ---

const SectionHeading = ({ title, subtitle, description, light = false }: { title: string, subtitle?: string, description?: string, light?: boolean }) => (
  <div className="flex flex-col items-center text-center mb-16 px-4">
    {subtitle && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 mb-6 border rounded-sm",
          light ? "bg-white/5 border-white/10" : "bg-slate-50 border-slate-200"
        )}
      >
        <span className={cn(
          "text-[10px] font-mono font-bold tracking-[0.2em] uppercase",
          light ? "text-indigo-300" : "text-slate-500"
        )}>{subtitle}</span>
      </motion.div>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={cn(
        "text-3xl md:text-5xl font-display font-medium leading-[1.1] tracking-tight mb-6 max-w-4xl",
        light ? "text-white" : "text-slate-900"
      )}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={cn(
          "text-base md:text-lg max-w-2xl leading-relaxed font-light",
          light ? "text-slate-400" : "text-slate-500"
        )}
      >
        {description}
      </motion.p>
    )}
  </div>
);

// --- Sections ---

export function InternshipSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    college: "",
    degree: "",
    year: "1st Year",
    domain: "",
    skills: "",
    reason: ""
  });

  const totalSteps = 4;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const setDomain = (domain: string) => setFormData(prev => ({ ...prev, domain }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      const apiUrl = "/api/internship-apply";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
        setErrorMessage(result.error || result.message || "Unknown server error");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setFormStatus("error");
      setErrorMessage(err.message || "Connection failure");
    }
  };

  const faqs = [
    { q: "Is the internship online?", a: "Yes, the internship is fully virtual, allowing students from anywhere to participate." },
    { q: "Will certificates be provided?", a: "Absolutely! Upon successful completion, you will receive an official Internship Completion Certificate." },
    { q: "Is prior experience required?", a: "While basic understanding is helpful, our program is designed for students and beginners with an eager mind to learn." },
    { q: "Are projects included?", a: "Yes, the entire program is project-based. You will work on real-time industry-standard projects." },
    { q: "What is the duration of the internship?", a: "The program spans 8 weeks, covering everything from fundamentals to final project presentation." },
    { q: "Can beginners apply?", a: "Yes, we welcome beginners! Our mentorship ensures you get the support needed at every step." },
    { q: "Will mentorship be provided?", a: "Yes, you will have access to dedicated mentors for guidance during your learning and project development." },
    { q: "How will communication happen?", a: "Communication will take place through our dedicated community platform and periodic virtual meetings." }
  ];

  return (
    <div id="internship" className="w-full bg-white selection:bg-indigo-100">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0A0A0B] pt-20">
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff1a 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        {/* Deep Atmospheric Glows */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/20 blur-[160px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-3 py-1 mb-10 border border-white/10 rounded-sm backdrop-blur-3xl bg-white/5"
          >
            <span className="w-1 h-1 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-indigo-200 uppercase">System Active — 2026 Cohort</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8.5rem] lg:text-[10rem] font-display font-light text-white leading-[0.8] tracking-tighter mb-16"
          >
            INDIWEB<span className="italic font-display font-thin text-indigo-500">PROS</span> <br />
            <span className="text-4xl md:text-5xl uppercase tracking-[0.4em] font-mono font-bold text-slate-500 mt-8 block">PROGRAM</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto text-base md:text-lg text-slate-400 font-light leading-relaxed mb-16 border-x border-white/5 px-8"
          >
            A high-performance training ground for building production-grade systems. 
            Master the architecture of the modern web alongside industrial mentors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#apply"
              className="px-10 py-5 bg-white text-black font-medium rounded-sm flex items-center gap-3 hover:bg-indigo-50 transition-all active:scale-[0.98]"
            >
              Start Application
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-medium rounded-sm backdrop-blur-md hover:bg-white/10 transition-all active:scale-[0.98]">
              View Curriculum
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT INTERNSHIP */}
      <section id="about" className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Engineered for Professional Growth"
            subtitle="Philosophy"
            description="Our program bypasses theoretical abstraction. We focus on industrial-grade system design and deployment workflows."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 mt-12 border border-slate-200">
            {[
              { title: "Direct Mentorship", desc: "Constant validation from senior engineers within the framework.", icon: Users },
              { title: "Technical Focus", desc: "Zero fluff. We prioritize technical implementation over buzzwords.", icon: Zap },
              { title: "Production Systems", desc: "Build systems that actually scale, not just toy examples.", icon: Layers },
              { title: "Global Perspective", desc: "Understand standard workflows used by top global engineering teams.", icon: Globe },
              { title: "Rapid Iteration", desc: "Master the art of shipping fast and refining continuously.", icon: TrendingUp },
              { title: "Professional Network", desc: "Direct access to our verified alumni and industry contacts.", icon: MessageSquare },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-10 bg-white hover:bg-slate-50 transition-colors duration-300"
              >
                <item.icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 mb-8 transition-colors" />
                <h3 className="text-lg font-display font-medium text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — INTERNSHIP DOMAINS */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Select Your Specialization"
            subtitle="Curriculum"
            description="High-density tracks designed for extreme technical focus."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {/* Domain Card 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 group transition-all duration-500"
            >
              <div className="flex flex-col mb-12">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600 mb-6">
                   <Code className="w-4 h-4" /> 01. Domain
                </div>
                <h3 className="text-4xl font-display font-light text-slate-900 mb-4 tracking-tight">Full Stack Engineering</h3>
                <p className="text-slate-500 font-light leading-relaxed max-w-sm">Architect modern web infrastructure from ground zero to production.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-100 italic font-light text-slate-400 text-sm">
                <div>
                  <h4 className="text-[10px] not-italic font-bold text-slate-900 uppercase tracking-widest mb-6">Core Pipeline</h4>
                  <ul className="space-y-4">
                    {["Distributed Systems", "Atomic UI Design", "Reactive State Architecture", "API Strategy", "Cloud Infrastructure"].map(topic => (
                      <li key={topic} className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-indigo-500 rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-sm not-italic border border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-4">Stack Preview</h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white border border-slate-200 text-[10px] font-mono text-slate-600">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a href="#apply" className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-[0.2em]">
                  Join Track <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Domain Card 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 group transition-all duration-500"
            >
              <div className="flex flex-col mb-12">
                <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-600 mb-6">
                   <Cpu className="w-4 h-4" /> 02. Domain
                </div>
                <h3 className="text-4xl font-display font-light text-slate-900 mb-4 tracking-tight">AI & ML Engineering</h3>
                <p className="text-slate-500 font-light leading-relaxed max-w-sm">Develop intelligent systems using modern computational techniques.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-100 italic font-light text-slate-400 text-sm">
                <div>
                  <h4 className="text-[10px] not-italic font-bold text-slate-900 uppercase tracking-widest mb-6">Algorithm Track</h4>
                  <ul className="space-y-4">
                    {["Computer Vision Layers", "Neural Architecture", "NLP Micro-services", "Data Pipeline Ops", "Model Deployment"].map(topic => (
                      <li key={topic} className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-sm not-italic border border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-4">Toolkit</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "PyTorch", "HuggingFace", "FastAPI", "Pandas", "Scikit"].map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white border border-slate-200 text-[10px] font-mono text-slate-600">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a href="#apply" className="inline-flex items-center gap-3 text-sm font-bold text-slate-900 hover:text-cyan-600 transition-colors uppercase tracking-[0.2em]">
                  Join Track <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — INTERNSHIP DETAILS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Program Logistics"
            subtitle="At a Glance"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Duration", value: "8 Weeks", icon: Calendar, color: "text-indigo-600" },
              { label: "Mode", value: "Online", icon: Globe, color: "text-blue-600" },
              { label: "Type", value: "Project-Based", icon: Rocket, color: "text-purple-600" },
              { label: "Eligibility", value: "Students & Beginners", icon: GraduationCap, color: "text-cyan-600" },
              { label: "Certificate", value: "Professional", icon: Award, color: "text-emerald-600" },
              { label: "Mentorship", value: "1-on-1 Access", icon: Users, color: "text-amber-600" },
              { label: "Projects", value: "Real-Time Tasks", icon: Layers, color: "text-rose-600" },
              { label: "Community", value: "Full Access", icon: MessageSquare, color: "text-indigo-600" },
            ].map((detail, idx) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-center flex flex-col items-center justify-center group hover:bg-white hover:border-indigo-100 hover:shadow-lg transition-all"
              >
                <detail.icon className={cn("w-8 h-8 mb-4 group-hover:scale-110 transition-transform", detail.color)} />
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">{detail.label}</p>
                <p className="text-sm md:text-base font-bold text-slate-900">{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WEEKLY ROADMAP */}
      <section id="roadmap" className="py-32 bg-[#0A0A0B] overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#4338ca15,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <SectionHeading 
            title="Accelerated Learning Pipeline"
            subtitle="The Roadmap"
            light={true}
          />

          <div className="relative mt-24 space-y-12">
            {/* Timeline center line */}
            <div className="absolute left-[31px] md:left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2" />

            {[
              { week: "01", title: "Environment & Architecture", desc: "Setting up production containers and system design patterns." },
              { week: "02", title: "Logic & Logic Flow", desc: "Core implementation of domain-specific algorithmic foundations." },
              { week: "03", title: "Interface & State", desc: "Building reactive components and managing complex data flows." },
              { week: "04", title: "System Integration", desc: "Connecting internal modules with external services and APIs." },
              { week: "05", title: "Optimization Layers", desc: "Fine-tuning performance, caching, and computational efficiency." },
              { week: "06", title: "Validation & Testing", desc: "Rigorous quality assurance, clean code audits, and security." },
              { week: "07", title: "Execution Phase", desc: "Individual capstone development under technical supervision." },
              { week: "08", title: "Final Deployment", desc: "System handoff, documentation, and technical presentation." },
            ].map((item, idx) => (
              <motion.div
                key={item.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-row items-center gap-8 w-full relative",
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                <div className="flex-1 hidden md:block text-right">
                   {idx % 2 === 0 && (
                     <div className="pr-12">
                       <h3 className="text-xl font-display font-medium text-white mb-2">{item.title}</h3>
                       <p className="text-sm text-slate-500 font-light max-w-md ml-auto">{item.desc}</p>
                     </div>
                   )}
                </div>

                <div className="relative z-10 w-16 h-16 bg-white/5 border border-white/10 text-indigo-400 rounded-sm flex items-center justify-center font-mono text-sm shadow-2xl backdrop-blur-3xl flex-shrink-0">
                  {item.week}
                </div>

                <div className="flex-1 text-left">
                   <div className="pl-4 md:pl-12">
                     <h3 className="text-xl font-display font-medium text-white mb-2">{item.title}</h3>
                     <p className="text-sm text-slate-500 font-light max-w-md">{item.desc}</p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — INTERNSHIP BENEFITS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Strategic Advantages"
            subtitle="Benefits"
          />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-slate-200 border border-slate-200 mt-12">
            {[
              { title: "Practical Exposure", icon: Rocket },
              { title: "Standard Workflows", icon: Globe },
              { title: "Project Assets", icon: Layers },
              { title: "Mentor Feedback", icon: Users },
              { title: "Collaborative Logic", icon: Briefcase },
              { title: "Credentialing", icon: Award },
              { title: "Growth Analytics", icon: TrendingUp },
              { title: "Verification", icon: ShieldCheck },
              { title: "Peer Intelligence", icon: MessageSquare },
              { title: "System Portfolio", icon: Code },
            ].map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 md:p-10 bg-white group hover:bg-slate-50 transition-colors flex flex-col items-center text-center"
              >
                <benefit.icon className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 mb-6 transition-colors" />
                <h4 className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-widest leading-tight">{benefit.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROJECT-BASED LEARNING */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-px bg-slate-200">
                <div className="pt-12 space-y-px">
                   <motion.div 
                     initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                     className="p-10 bg-white border border-slate-100 hover:bg-slate-50 transition-colors"
                   >
                     <p className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest mb-3">01. Setup</p>
                     <h4 className="font-display font-medium text-slate-900 uppercase text-xs tracking-wider">Protocol Definition</h4>
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                     className="p-10 bg-white border border-slate-100 hover:bg-slate-50 transition-colors"
                   >
                     <p className="text-[10px] font-mono font-bold text-cyan-600 uppercase tracking-widest mb-3">02. Logic</p>
                     <h4 className="font-display font-medium text-slate-900 uppercase text-xs tracking-wider">Unit Modules</h4>
                   </motion.div>
                </div>
                <div className="space-y-px">
                   <motion.div 
                     initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                     className="p-10 bg-white border border-slate-100 hover:bg-slate-50 transition-colors"
                   >
                     <p className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-3">03. Flow</p>
                     <h4 className="font-display font-medium text-slate-900 uppercase text-xs tracking-wider">Pipeline Integration</h4>
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                     className="p-10 bg-indigo-600 text-white border border-indigo-500 shadow-xl"
                   >
                     <p className="text-[10px] font-mono font-bold text-indigo-200 uppercase tracking-widest mb-3">04. Release</p>
                     <h4 className="font-display font-medium uppercase text-xs tracking-wider">Systems Deployment</h4>
                   </motion.div>
                </div>
              </div>
            </div>

            <div className="flex-1 order-1 lg:order-2">
              <SectionHeading 
                title="Industrial Pipeline Methodology"
                subtitle="Methodology"
                description="We bypass abstract theory to focus on professional-grade system execution and production deployment cycles."
              />
              <div className="mt-12 space-y-6">
                {[
                  "Continuous Integration Workflows",
                  "Modular System Architecture",
                  "Asynchronous logic patterns",
                  "High-performance state management",
                  "Security-first API protocols"
                ].map((item, idx) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-4 text-slate-600 font-light text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-600 rotate-45" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CERTIFICATION SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0A0A0B] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative border border-white/5">
            <div className="absolute top-0 right-0 w-full h-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

            <div className="flex-1 text-center lg:text-left relative z-10">
              <SectionHeading 
                title="Professional Verification"
                subtitle="Certification"
                light={true}
              />
              <p className="text-slate-500 font-light mb-12 -mt-10 text-lg max-w-xl">
                Upon benchmark completion, you will be issued a cryptographic certificate verifying your role in high-level engineering projects.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-2xl">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Endpoint</p>
                  <p className="text-sm font-medium text-white">indiwebpros.com/auth/verify</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 backdrop-blur-2xl">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Cohort Index</p>
                  <p className="text-sm font-medium text-indigo-400">BATCH-SYS-2026</p>
                </div>
              </div>
            </div>

            <div className="flex-1 relative order-first lg:order-last w-full max-w-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group cursor-zoom-in"
                id="certificate-container"
              >
                {/* Image Backdrop Shadow */}
                <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                  <div className="relative bg-white p-2 shadow-2xl border border-slate-200">
                    <img 
                      src="https://i.ibb.co/PvbjjpJZ/sample.png"
                      alt="IndiWebPros Professional Certificate" 
                      className="w-full h-auto block select-none"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dynamic Details Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-[5%]">
                       {/* Name Overlay */}
                       <div className="text-[#1e293b] font-script text-2xl md:text-3xl lg:text-4xl opacity-80 mt-[-2%]">
                          {formData.fullName || "[Intern Name]"}
                       </div>
                       
                       {/* Domain Overlay */}
                       <div className="mt-8 text-[8px] md:text-[10px] font-display font-medium text-[#1e293b] uppercase tracking-[0.2em] opacity-60">
                          {formData.domain || "Systems Engineering & Logic Distribution"}
                       </div>
                    </div>
                    
                    {/* Overlay Info */}
                  <div className="absolute inset-0 bg-indigo-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                    <Award className="w-12 h-12 mb-4 text-indigo-400" />
                    <p className="font-display font-medium text-lg uppercase tracking-widest">Verified Credential</p>
                    <p className="text-indigo-200 text-xs font-mono mt-2 uppercase tracking-tighter">IWP-2026-B1-0922</p>
                    <button className="mt-8 px-6 py-2 bg-white text-indigo-950 font-bold uppercase text-[10px] tracking-widest hover:bg-indigo-50 transition-colors">
                      Download Original
                    </button>
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-indigo-500/50" />
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-indigo-500/50" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WHY CHOOSE INDIWEBPROS */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Engineered Edge"
            subtitle="Philosophy"
            description="Our program is structured to bridge the gap between academic theory and the ruthless demands of professional tech ecosystems."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mt-16">
            {[
              { title: "Direct Execution", icon: Zap, color: "text-amber-500" },
              { title: "Peer Intelligence", icon: Users, color: "text-indigo-500" },
              { title: "Asset Building", icon: Layers, color: "text-purple-500" },
              { title: "Credentialing", icon: Award, color: "text-cyan-500" },
              { title: "Technical Network", icon: MessageSquare, color: "text-emerald-500" },
              { title: "Standard Cycles", icon: Briefcase, color: "text-indigo-500" },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-12 md:p-16 bg-white hover:bg-slate-50 transition-colors group"
              >
                <div className={cn("mb-8 transition-transform group-hover:scale-110", item.color)}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-display font-medium text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-500 font-light text-sm leading-relaxed">Systematic immersion into production environments designed for high-end technical growth and visibility.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading 
            title="Inquiry & Support"
            subtitle="F.A.Q"
          />

          <div className="mt-16 space-y-px bg-slate-200">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white group"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-display font-medium text-slate-900 text-lg italic tracking-tight">{faq.q}</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 text-slate-400 transition-transform duration-300",
                    activeFaq === idx ? "rotate-180" : ""
                  )} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-slate-500 font-light leading-relaxed text-sm bg-slate-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — APPLICATION FORM */}
      <section id="apply" className="py-32 bg-[#0A0A0B]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 md:p-16 relative overflow-hidden border border-white/5">
            <div className="relative z-10">
              <div className="mb-16">
                 <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600 mb-6">
                    Application Process
                 </div>
                 <h2 className="text-4xl font-display font-medium text-slate-900 mb-4 tracking-tight">Initiate Registration</h2>
                 <p className="text-slate-500 font-light">Enter the high-performance cohort. Limited slots available.</p>
              </div>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-50 p-12 text-center border border-slate-100"
                >
                  <div className="w-16 h-16 bg-emerald-500 text-white flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-slate-900 mb-4 tracking-tight">System Validated</h3>
                  <p className="text-slate-500 font-light leading-relaxed max-w-md mx-auto">
                    Your application has been logged. Our technical team will review your profile shortly.
                  </p>

                  <button 
                    onClick={() => {
                      setFormStatus("idle");
                      setCurrentStep(1);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        whatsapp: "",
                        college: "",
                        degree: "",
                        year: "1st Year",
                        domain: "",
                        skills: "",
                        reason: ""
                      });
                    }}
                    className="mt-10 px-8 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all"
                  >
                    New Entry
                  </button>
                </motion.div>
              ) : formStatus === "error" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-rose-50 p-12 text-center border border-rose-100"
                >
                  <h3 className="text-xl font-display font-medium text-slate-900 mb-2 tracking-tight">Transmission Failed</h3>
                  <p className="text-rose-600 text-sm font-light mb-8 max-w-sm mx-auto">
                    {errorMessage}
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-2 px-8 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest"
                  >
                    Retry
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-12">
                  <div className="w-full h-1 bg-slate-100 overflow-hidden">
                     <motion.div 
                       className="h-full bg-indigo-600"
                       initial={{ width: 0 }}
                       animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                     />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <AnimatePresence mode="wait">
                      {currentStep === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="space-y-8"
                        >
                          <div className="space-y-6">
                            <h4 className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">
                              01. Track Selection
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
                               <label className={cn(
                                 "relative flex items-center p-8 transition-all cursor-pointer bg-white group",
                                 formData.domain === "Full Stack Development" ? "bg-slate-50 shadow-inner" : "hover:bg-slate-50"
                               )}>
                                 <input type="radio" name="domain" value="Full Stack Development" className="sr-only" required checked={formData.domain === "Full Stack Development"} onChange={() => setDomain("Full Stack Development")} />
                                 <div className="flex flex-col">
                                   <p className={cn("text-xs font-bold uppercase tracking-widest transition-colors", formData.domain === "Full Stack Development" ? "text-indigo-600" : "text-slate-900")}>Full Stack</p>
                                   <p className="text-[10px] text-slate-400 font-mono mt-2">Architecture & Integration</p>
                                 </div>
                               </label>
                               <label className={cn(
                                 "relative flex items-center p-8 transition-all cursor-pointer bg-white group",
                                 formData.domain === "AI & ML Engineering" ? "bg-slate-50 shadow-inner" : "hover:bg-slate-50"
                               )}>
                                 <input type="radio" name="domain" value="AI & ML Engineering" className="sr-only" required checked={formData.domain === "AI & ML Engineering"} onChange={() => setDomain("AI & ML Engineering")} />
                                 <div className="flex flex-col">
                                   <p className={cn("text-xs font-bold uppercase tracking-widest transition-colors", formData.domain === "AI & ML Engineering" ? "text-cyan-600" : "text-slate-900")}>AI / ML</p>
                                   <p className="text-[10px] text-slate-400 font-mono mt-2">Neural Logic Pipelines</p>
                                 </div>
                               </label>
                            </div>
                          </div>
                          <button type="button" onClick={nextStep} disabled={!formData.domain} className="w-full py-5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest disabled:opacity-30 flex items-center justify-center gap-3 transition-all hover:bg-black">
                             Synchronize Tracks <ArrowRight className="w-3 h-3" />
                          </button>
                        </motion.div>
                      )}

                      {currentStep === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                          <div className="space-y-12">
                            <h4 className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">
                              02. Personal Identifier
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Legal Full Name</label>
                                <input required name="fullName" value={formData.fullName} onChange={handleInputChange} type="text" spellCheck={false} className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all text-sm outline-none font-medium placeholder:text-slate-200" placeholder="E.G. JULIAN ASKEY" />
                              </div>
                              <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Enterprise Email</label>
                                <input required name="email" value={formData.email} onChange={handleInputChange} type="email" spellCheck={false} className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all text-sm outline-none font-medium placeholder:text-slate-200" placeholder="JULIAN@MAIL.COM" />
                              </div>
                              <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Mobile Contact</label>
                                <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" spellCheck={false} className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all text-sm outline-none font-medium placeholder:text-slate-200" placeholder="+91 XXX XXX XXXX" />
                              </div>
                              <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Messaging Channel (WhatsApp)</label>
                                <input required name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} type="tel" spellCheck={false} className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all text-sm outline-none font-medium placeholder:text-slate-200" placeholder="+91 XXX XXX XXXX" />
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-px bg-slate-100 pt-4">
                            <button type="button" onClick={prevStep} className="px-10 py-5 bg-white border border-slate-100 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors">Previous</button>
                            <button type="button" onClick={nextStep} disabled={!formData.fullName || !formData.email || !formData.phone || !formData.whatsapp} className="flex-1 py-5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors disabled:opacity-50">
                               Validate Identity
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                          <div className="space-y-12">
                            <h4 className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">03. Academic Context</h4>
                            <div className="space-y-10">
                              <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Institution</label>
                                <input required name="college" value={formData.college} onChange={handleInputChange} type="text" spellCheck={false} className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all text-sm outline-none font-medium placeholder:text-slate-200" placeholder="UNIVERSITY NAME" />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Program / Degree</label>
                                  <input required name="degree" value={formData.degree} onChange={handleInputChange} type="text" spellCheck={false} className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all text-sm outline-none font-medium placeholder:text-slate-200" placeholder="FIELD OF STUDY" />
                                </div>
                                <div className="space-y-3">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Cohort Year</label>
                                  <select name="year" value={formData.year} onChange={handleInputChange} className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all text-sm outline-none font-medium bg-white">
                                    <option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option><option>Graduate</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-px bg-slate-100 pt-4">
                            <button type="button" onClick={prevStep} className="px-10 py-5 bg-white border border-slate-100 text-[10px] font-bold uppercase tracking-widest">Previous</button>
                            <button type="button" onClick={nextStep} disabled={!formData.college || !formData.degree} className="flex-1 py-5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors">
                               Process Academic Data
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {currentStep === 4 && (
                        <motion.div key="step4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
                          <div className="space-y-12">
                            <h4 className="text-[10px] font-mono font-bold text-indigo-600 uppercase tracking-widest">04. Technical Interest</h4>
                            <div className="space-y-10">
                              <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Technology Toolkit</label>
                                <input name="skills" value={formData.skills} onChange={handleInputChange} type="text" spellCheck={false} className="w-full px-0 py-3 bg-transparent border-b border-slate-200 focus:border-indigo-600 transition-all text-sm outline-none font-medium placeholder:text-slate-200" placeholder="E.G. PYTORCH, RUST, NEXT.JS" />
                              </div>
                              <div className="space-y-4">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Statement of Intent</label>
                                <textarea name="reason" value={formData.reason} onChange={handleInputChange} rows={5} spellCheck={false} className="w-full p-8 bg-slate-50 border border-slate-100 focus:border-indigo-600 transition-all text-sm outline-none font-light leading-relaxed resize-none" placeholder="Elaborate on your technical roadmap and why you want to enter this specific engineering track."></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 p-8 bg-slate-50 border border-slate-100">
                            <input type="checkbox" required className="mt-1 w-3 h-3 border-slate-300 text-indigo-600" />
                            <p className="text-[8px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">I consent to the processing of this dataset and commit to the full 8-week accelerated pipeline cycle.</p>
                          </div>
                          <div className="flex gap-px bg-slate-100 pt-4">
                            <button type="button" onClick={prevStep} className="px-10 py-5 bg-white border border-slate-100 text-[10px] font-bold uppercase tracking-widest">Previous</button>
                            <button disabled={formStatus === "submitting"} className={cn("flex-1 py-5 text-white text-[10px] font-bold uppercase tracking-widest transition-all", formStatus === "submitting" ? "bg-slate-400" : "bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-500/20")}>
                               {formStatus === "submitting" ? "Syncing Logic..." : "Commit Transaction"}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

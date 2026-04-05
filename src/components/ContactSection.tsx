"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzeoca_n5-hF0L5jCeD4vbX8mM0Qn4yEJeuFDyENNwogKPKCTR2c7LD0If0J8Bgarowjg/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // With no-cors, we can't check response.ok, so we assume success if no error is thrown
      setStatus('success');
      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('idle');
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-indigo-50 border border-indigo-100 rounded-full"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 uppercase">Contact Us</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Ready to Build <br />
              <span className="text-indigo-600">Something Great?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg text-slate-500 max-w-xl leading-relaxed"
            >
              Whether you have a specific project in mind or just want to explore the possibilities, our team is ready to help you navigate the digital landscape.
            </motion.p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-slate-900 font-medium">mohanbalu292@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">WhatsApp / Call</p>
                  <p className="text-slate-900 font-medium">8074223801</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <MapPin className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="text-slate-900 font-medium">Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 p-8 md:p-12 bg-slate-50 border border-slate-100 rounded-[32px] shadow-sm"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-sm font-bold text-indigo-600 hover:text-indigo-500"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-widest px-1">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-widest px-1">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-widest px-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5 transition-all resize-none"
                  />
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all active:scale-[0.98] shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

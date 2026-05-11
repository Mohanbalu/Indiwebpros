import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { Logo } from "./ui/Logo";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 pt-24 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
              <Logo className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-bold text-2xl tracking-tight">Indiwebpros</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building high-performance digital experiences for students and businesses. We bridge the gap between engineering and design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Services", href: "/#services" },
                { name: "Internship", href: "/internship" },
                { name: "Portfolio", href: "/#portfolio" },
                { name: "Insights", href: "/#insights" },
                { name: "Pricing", href: "/#pricing" },
                { name: "Contact", href: "/#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              {[
                "Web Development",
                "AI & ML Solutions",
                "Internship Program",
                "Mobile Apps",
                "Student Projects",
                "Cloud Systems"
              ].map((service) => (
                <li key={service}>
                  <Link to={service === "Internship Program" ? "/internship" : "/#services"} className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-indigo-400 transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:admin@indiwebpros.in" className="text-slate-300 hover:text-white transition-colors">admin@indiwebpros.in</a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-slate-300">Andhra Pradesh, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-slate-500 text-xs">© {new Date().getFullYear()} Indiwebpros. All rights reserved.</p>
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold text-emerald-500/80 uppercase tracking-widest">All Systems Operational</span>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="/sitemap.xml" className="text-slate-500 hover:text-white transition-colors text-xs">Sitemap</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

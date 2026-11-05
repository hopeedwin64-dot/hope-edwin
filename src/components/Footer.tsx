import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { SITE_METADATA } from '../data/content';

interface FooterProps {
  businessEmail: string;
}

export const Footer: React.FC<FooterProps> = ({ businessEmail }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050C18] text-white pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/60 bg-[#0A192F] flex items-center justify-center shrink-0">
                <img
                  src={SITE_METADATA.profilePhoto}
                  alt="Patricia Slyvia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-xl text-white">
                {SITE_METADATA.name}
              </span>
            </div>

            <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
              {SITE_METADATA.title}
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed pt-1">
              "{SITE_METADATA.tagline}"
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio & Concepts
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  My Working Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Work With Me
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Get in Touch
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <a
                href={`mailto:${businessEmail}`}
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>{businessEmail}</span>
              </a>
              <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                Available worldwide for remote Skool community setup, classroom organization, and management.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Patricia Slyvia. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Specialized Skool Community Setup & Growth</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

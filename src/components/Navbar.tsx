import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { SITE_METADATA } from '../data/content';

interface NavbarProps {
  onOpenCustomize?: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomize, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'My Process', href: '#process' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A192F]/95 backdrop-blur-md border-b border-[#1E293B] shadow-sm py-3.5'
          : 'bg-[#0A192F] border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single clean text element) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/60 bg-[#0A192F] flex items-center justify-center shrink-0 shadow-xs">
              <img
                src={SITE_METADATA.profilePhoto}
                alt="Patricia Slyvia"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-[#D4AF37] transition-colors whitespace-nowrap shrink-0">
              {SITE_METADATA.name}
            </span>
          </a>

          {/* Zone 2: 5–6 Concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`hover:text-white transition-colors py-1 cursor-pointer whitespace-nowrap shrink-0 relative ${
                    isActive ? 'text-[#D4AF37]' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onOpenCustomize && (
              <button
                onClick={onOpenCustomize}
                className="text-xs text-slate-400 hover:text-[#D4AF37] px-2.5 py-1.5 rounded transition-colors flex items-center gap-1.5 border border-slate-700/60 hover:border-[#D4AF37]/50"
                title="Quick customizer: update placeholder photo, email or links"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="hidden xl:inline">Personalize Info</span>
              </button>
            )}
            <button
              onClick={() => handleNavClick('#contact')}
              className="px-5 py-2.5 text-xs md:text-sm font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] active:bg-[#C5A059] rounded-lg transition-all duration-200 shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <span>Work With Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('#contact')}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-[#0A192F] bg-[#D4AF37] rounded-md whitespace-nowrap"
            >
              Work With Me
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F] border-b border-[#1E293B] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-slate-200 hover:text-[#D4AF37] py-2 px-3 rounded-md hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full py-3 text-center text-sm font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] rounded-lg shadow-sm"
              >
                Work With Me
              </button>
              {onOpenCustomize && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCustomize();
                  }}
                  className="w-full py-2 text-center text-xs text-slate-400 hover:text-[#D4AF37] flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Personalize Portfolio Information</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

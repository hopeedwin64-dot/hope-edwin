import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onWorkWithMe: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onWorkWithMe }) => {
  return (
    <section className="py-20 md:py-28 bg-[#0A192F] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#16325C]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-[#D4AF37] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Professional Skool Community Services</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6 text-balance">
          Ready to Build a Better Skool Community?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
          Whether you need a brand-new Skool community, a well-organized classroom, course uploading,
          membership setup, or ongoing community management, let's discuss how I can help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onWorkWithMe}
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] active:bg-[#C5A059] rounded-xl transition-all duration-200 shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-8 text-xs text-slate-400">
          Direct communication · Customized scope · Transparent project management
        </div>
      </div>
    </section>
  );
};

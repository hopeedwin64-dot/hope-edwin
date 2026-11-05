import React from 'react';
import { ArrowUpRight, ArrowDown, CheckCircle2, ShieldCheck, Layers, Users } from 'lucide-react';

interface HeroProps {
  onWorkWithMe: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWorkWithMe, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#0A192F] text-white overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#16325C]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Grid: 2-column layout with matching height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-4">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>Skool Community Setup, Management & Growth Expert</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold text-white tracking-tight leading-[1.15] mb-6 text-balance">
              Build, Organize & Grow a Thriving Skool Community.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              I help coaches, course creators, entrepreneurs, and business owners set up, structure,
              manage, and grow professional Skool communities that create better experiences for
              their members.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onWorkWithMe}
                className="px-7 py-3.5 text-sm sm:text-base font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] active:bg-[#C5A059] rounded-lg transition-all duration-200 shadow-lg shadow-[#D4AF37]/15 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Work With Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>Explore My Services</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Key Service Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Turnkey Workspace Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Classroom & Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Member Onboarding</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Container (High Quality Workspace Asset) */}
          <div className="lg:col-span-5 flex items-center">
            <div className="w-full relative group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/30 to-[#16325C]/50 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500" />

              {/* Main Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-[#0F2444] shadow-2xl">
                {/* Visual Header Bar simulating clean browser/device frame */}
                <div className="px-4 py-2.5 bg-[#081220] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 tracking-tight">
                    skool.com/community-hub
                  </span>
                  <div className="w-6" />
                </div>

                {/* Hero Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/aistudio/Jazz_Guitar_Academy_Dashboard_5bcd82a4.png"
                    alt="Jazz Guitar Academy - Live Skool Community Setup by Patricia Slyvia"
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/src/assets/images/hero_skool_workspace_1793892762090.jpg';
                    }}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Feature Highlights (Concept Design Preview) */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0A192F]/90 backdrop-blur-md border border-slate-700/70 text-xs text-slate-200">
                    <div className="flex items-center justify-between text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider mb-1">
                      <span>Live Setup Showcase</span>
                      <span className="text-slate-400 font-normal">Jazz Guitar Academy</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-snug line-clamp-2">
                      Custom banner branding, categorized discussion spaces, pinned onboarding video & classroom tracks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width strip below hero split: Trust & Specialization Pillars */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-white mb-1">100% Dedicated Skool Focus</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tailored exclusively to Skool’s platform architecture, features, and best practices.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mb-3">
              <Layers className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-white mb-1">Clear Classroom Hierarchy</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Step-by-step module flows, lesson notes, and materials that keep students progressing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mb-3">
              <Users className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-white mb-1">High-Retention Onboarding</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Orient new members immediately so they introduce themselves and find value on day one.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mb-3">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-semibold text-white mb-1">Reliable, Hands-On Delivery</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every setting, permission gate, and course asset is thoroughly checked before handover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

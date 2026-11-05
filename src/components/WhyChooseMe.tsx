import React from 'react';
import {
  CheckCircle2,
  Layers,
  UserCheck,
  Award,
  Sparkles,
  HeartHandshake,
  MessageSquare,
  Check,
} from 'lucide-react';
import { WHY_CHOOSE_ME } from '../data/content';

const iconList = [
  <Layers className="w-5 h-5 text-[#D4AF37]" />,
  <Award className="w-5 h-5 text-[#D4AF37]" />,
  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />,
  <Sparkles className="w-5 h-5 text-[#D4AF37]" />,
  <UserCheck className="w-5 h-5 text-[#D4AF37]" />,
  <Check className="w-5 h-5 text-[#D4AF37]" />,
  <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />,
  <MessageSquare className="w-5 h-5 text-[#D4AF37]" />,
];

export const WhyChooseMe: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] text-[#1E293B] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-5 h-[1px] bg-[#C5A059]" />
            <span>The Patricia Slyvia Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0A192F] tracking-tight">
            Why Choose Me?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            I prioritize clarity, structure, and reliability. Here is why creators, educators, and
            business owners trust me to build and manage their Skool spaces.
          </p>
        </div>

        {/* 8 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ME.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-200 hover:border-[#D4AF37]/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0A192F] flex items-center justify-center mb-4 shadow-inner">
                  {iconList[idx % iconList.length]}
                </div>
                <h3 className="font-display font-bold text-base text-[#0A192F] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Point {String(idx + 1).padStart(2, '0')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement (No fake metrics, strictly authentic pledge) */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-slate-200/90 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            <strong className="text-[#0A192F]">A Commitment to Genuine Professionalism:</strong> I
            believe in transparent work and real craftsmanship. Every project is configured to high
            standards, tailored specifically to your audience, and delivered with step-by-step
            clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

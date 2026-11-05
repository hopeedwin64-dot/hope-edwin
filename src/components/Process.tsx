import React from 'react';
import { Compass, FileText, Wrench, RefreshCw, Handshake } from 'lucide-react';
import { WORKING_PROCESS, ProcessStep } from '../data/content';

const processIcons = [
  <Compass className="w-5 h-5 text-[#D4AF37]" />,
  <FileText className="w-5 h-5 text-[#D4AF37]" />,
  <Wrench className="w-5 h-5 text-[#D4AF37]" />,
  <RefreshCw className="w-5 h-5 text-[#D4AF37]" />,
  <Handshake className="w-5 h-5 text-[#D4AF37]" />,
];

interface ProcessProps {
  onWorkWithMe: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onWorkWithMe }) => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white text-[#1E293B] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-5 h-[1px] bg-[#C5A059]" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0A192F] tracking-tight">
            A Simple Process From Start to Finish
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Collaborating with me is straightforward, transparent, and organized. Here is how we take
            your community vision from initial idea to live launch.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {WORKING_PROCESS.map((step: ProcessStep, index: number) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#D4AF37]/60 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#0A192F] flex items-center justify-center shadow-xs">
                    {processIcons[index]}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#C5A059] transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-bold text-lg text-[#0A192F] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step Deliverable Keynote */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Step Deliverable
                </div>
                <div className="text-xs font-medium text-slate-700 leading-snug">
                  {step.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-base text-[#0A192F] mb-1">
              Have Questions Before We Begin?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We can talk through your existing materials, timeline, and goals so you feel completely
              confident in the plan.
            </p>
          </div>
          <button
            onClick={onWorkWithMe}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0A192F] hover:bg-[#16325C] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            Schedule a Discussion
          </button>
        </div>
      </div>
    </section>
  );
};

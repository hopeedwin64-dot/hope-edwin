import React from 'react';
import { Camera, Check, Sparkles } from 'lucide-react';
import { SITE_METADATA } from '../data/content';

interface AboutProps {
  customPhotoUrl?: string;
  onOpenCustomizer?: () => void;
  onWorkWithMe: () => void;
}

export const About: React.FC<AboutProps> = ({
  customPhotoUrl,
  onOpenCustomizer,
  onWorkWithMe,
}) => {
  const photoSrc = customPhotoUrl || SITE_METADATA.profilePhoto;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Professional Photo Container with Replace option */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Subtle background card offset */}
              <div className="absolute inset-0 bg-[#0A192F] rounded-2xl transform rotate-2 translate-x-2 translate-y-2 -z-10 opacity-90" />
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-2xl transform -rotate-1 -translate-x-1 -translate-y-1 -z-10" />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl group">
                <div className="aspect-[1/1] overflow-hidden bg-slate-100">
                  <img
                    src={photoSrc}
                    alt="Patricia Slyvia - Skool Community Setup, Management & Growth Expert"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = SITE_METADATA.profilePhoto;
                    }}
                  />
                </div>

                {/* Bottom Overlay Label */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-[#0A192F]">
                      {SITE_METADATA.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Skool Community Specialist
                    </p>
                  </div>

                  {onOpenCustomizer && (
                    <button
                      onClick={onOpenCustomizer}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 bg-slate-100 hover:bg-[#D4AF37]/15 hover:text-[#0A192F] rounded-md transition-colors cursor-pointer"
                      title="Replace with your genuine photo"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Replace Photo</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Trust Badge Floating Element */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#0A192F] text-white p-3.5 rounded-xl border border-slate-700/80 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    Hands-On Specialist
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Structured · Reliable · Member-Focused
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
              <span className="w-5 h-[1px] bg-[#C5A059]" />
              <span>About Me</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0A192F] tracking-tight mb-6">
              Meet Your Skool Community Expert
            </h2>

            {/* Verbatim Provided Bio Prose */}
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p className="text-lg font-medium text-[#0A192F]">
                Hello, I'm Patricia Slyvia, a Skool Community Setup, Management & Growth Expert.
              </p>

              <p>
                I help business owners, coaches, course creators, and entrepreneurs turn their ideas
                into organized, professional, and engaging Skool communities.
              </p>

              <p>
                From building your community from the ground up to setting up your classroom,
                uploading your courses, organizing membership access, and supporting your members, I
                provide practical services to help make managing your Skool community easier.
              </p>

              <p>
                My goal is to help you create a community that is easy to navigate, valuable to
                members, and professionally presented.
              </p>

              <p className="font-medium text-slate-800">
                Whether you're starting from scratch or improving an existing community, I'm here to
                help you bring your vision to life.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#0A192F]">
                  <Check className="w-3 h-3 text-[#C5A059]" />
                </div>
                <span>End-to-End Skool Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#0A192F]">
                  <Check className="w-3 h-3 text-[#C5A059]" />
                </div>
                <span>Classroom & Curriculum Staging</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#0A192F]">
                  <Check className="w-3 h-3 text-[#C5A059]" />
                </div>
                <span>Streamlined Onboarding Paths</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#0A192F]">
                  <Check className="w-3 h-3 text-[#C5A059]" />
                </div>
                <span>Ongoing Maintenance & Growth</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onWorkWithMe}
                className="px-6 py-3 text-sm font-semibold text-white bg-[#0A192F] hover:bg-[#16325C] rounded-lg transition-all shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A192F]"
              >
                Let's Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

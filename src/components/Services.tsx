import React, { useState } from 'react';
import {
  Layout,
  BookOpen,
  UploadCloud,
  MessageSquare,
  UserCheck,
  CreditCard,
  Compass,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  X,
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem, SETUP_SHOWCASES } from '../data/content';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
  onWorkWithMe: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  'community-setup': <Layout className="w-5 h-5" />,
  'classroom-setup': <BookOpen className="w-5 h-5" />,
  'course-uploading': <UploadCloud className="w-5 h-5" />,
  'community-management': <MessageSquare className="w-5 h-5" />,
  'membership-onboarding': <UserCheck className="w-5 h-5" />,
  'payment-configuration': <CreditCard className="w-5 h-5" />,
  'landing-page-design': <Compass className="w-5 h-5" />,
  'growth-support': <TrendingUp className="w-5 h-5" />,
};

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForInquiry,
  onWorkWithMe,
}) => {
  const [filter, setFilter] = useState<'all' | 'setup' | 'classroom' | 'management' | 'growth'>('all');

  const [activeSetupTab, setActiveSetupTab] = useState<'jazz' | 'suite'>('jazz');
  const [lightboxImage, setLightboxImage] = useState<{ title: string; image: string; desc: string } | null>(null);

  const filteredServices = filter === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.category === filter);

  const currentSetup = activeSetupTab === 'jazz' ? SETUP_SHOWCASES[0] : SETUP_SHOWCASES[1];

  return (
    <section id="services" className="py-20 md:py-28 bg-white text-[#1E293B] relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
              <span className="w-5 h-[1px] bg-[#C5A059]" />
              <span>Comprehensive Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0A192F] tracking-tight">
              How I Can Help You
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Tailored services to build, structure, manage, and scale your Skool community with
              clean organization and dedicated member focus.
            </p>
          </div>

          {/* Interactive Filter Controls (Functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-[#0A192F] shadow-xs'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              All Services ({SERVICES_LIST.length})
            </button>
            <button
              onClick={() => setFilter('setup')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'setup'
                  ? 'bg-white text-[#0A192F] shadow-xs'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              Setup & Access
            </button>
            <button
              onClick={() => setFilter('classroom')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'classroom'
                  ? 'bg-white text-[#0A192F] shadow-xs'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              Classroom & Content
            </button>
            <button
              onClick={() => setFilter('management')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'management'
                  ? 'bg-white text-[#0A192F] shadow-xs'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              Management
            </button>
            <button
              onClick={() => setFilter('growth')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'growth'
                  ? 'bg-white text-[#0A192F] shadow-xs'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              Landing & Growth
            </button>
          </div>
        </div>

        {/* Featured Visual Setup Showcase: Jazz Guitar Academy & Platform Suite */}
        <div className="mb-14 rounded-2xl bg-[#0A192F] text-white border border-slate-800 shadow-xl overflow-hidden">
          {/* Header strip with tab selector */}
          <div className="p-4 sm:p-6 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-1">
                Setup In Action · Visual Case Studies
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Skool Community & Classroom Setup Showcase
              </h3>
            </div>

            {/* Segmented controls */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 shrink-0">
              <button
                onClick={() => setActiveSetupTab('jazz')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeSetupTab === 'jazz'
                    ? 'bg-[#D4AF37] text-[#0A192F] font-semibold shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Jazz Guitar Academy
              </button>
              <button
                onClick={() => setActiveSetupTab('suite')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeSetupTab === 'suite'
                    ? 'bg-[#D4AF37] text-[#0A192F] font-semibold shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Platform Suite (5-in-1)
              </button>
            </div>
          </div>

          {/* Body: Split view of image and setup deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
            {/* Visual Screen Container */}
            <div className="lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-700/80 shadow-2xl group">
                {/* Browser Frame Header */}
                <div className="px-3.5 py-2 bg-[#081220] border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">
                    {activeSetupTab === 'jazz'
                      ? 'skool.com/jazz-guitar-academy'
                      : 'skool.com/complete-platform-suite'}
                  </span>
                  <span className="text-[10px] text-[#D4AF37] font-semibold uppercase">
                    Setup Preview
                  </span>
                </div>

                {/* Main Setup Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={currentSetup.image}
                    alt={currentSetup.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button
                      onClick={() =>
                        setLightboxImage({
                          title: currentSetup.title,
                          image: currentSetup.image,
                          desc: currentSetup.description,
                        })
                      }
                      className="px-4 py-2 text-xs font-semibold text-[#0A192F] bg-white rounded-lg shadow-md cursor-pointer hover:bg-slate-100"
                    >
                      Click to View Full-Size Mockup
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Setup Specification Breakdown */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-2">
                {currentSetup.badge}
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                {currentSetup.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {currentSetup.description}
              </p>

              {/* What I Set Up */}
              <div className="space-y-2.5 mb-8">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                  Key Setup Elements Included:
                </div>
                {currentSetup.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onSelectServiceForInquiry('Skool Community Setup')}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Request Similar Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() =>
                    setLightboxImage({
                      title: currentSetup.title,
                      image: currentSetup.image,
                      desc: currentSetup.description,
                    })
                  }
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Expand Full Image
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            return (
              <div
                key={service.id}
                className="group p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#C5A059]/60 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Letter indicator + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0A192F] text-[#D4AF37] flex items-center justify-center shadow-xs">
                      {serviceIcons[service.id] || <Layout className="w-5 h-5" />}
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-400 group-hover:text-[#C5A059] transition-colors">
                      Service {service.letter}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-[#0A192F] mb-2 group-hover:text-[#0F2444] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables List */}
                  <div className="pt-4 border-t border-slate-200/80 mb-6">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
                      Included Deliverables
                    </div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="text-xs font-semibold text-[#0A192F] hover:text-[#C5A059] flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-0.5 duration-150"
                  >
                    <span>Inquire About This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400 capitalize">{service.category}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Platform Standards & Call to action */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0A192F] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
          <div className="max-w-2xl text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-white mb-1.5">
              Need a Custom Bundle or Multi-Service Setup?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you need end-to-end community creation, bulk classroom uploads, or daily ongoing
              moderation, I can tailor a custom plan for your exact goals.
            </p>
          </div>

          <button
            onClick={onWorkWithMe}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] rounded-lg transition-all shadow-md whitespace-nowrap shrink-0 cursor-pointer"
          >
            Let's Work Together
          </button>
        </div>
      </div>

      {/* Full-Size Mockup Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#0A192F] rounded-2xl shadow-2xl overflow-hidden border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-[#081220] border-b border-slate-800 flex items-center justify-between text-white">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37] block">
                  Skool Setup Architecture
                </span>
                <h4 className="text-base sm:text-lg font-display font-bold text-white">
                  {lightboxImage.title}
                </h4>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto bg-slate-950 flex flex-col items-center">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-auto rounded-lg shadow-lg border border-slate-800"
              />
              <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-3xl text-center leading-relaxed">
                {lightboxImage.desc}
              </p>
            </div>

            <div className="px-6 py-4 bg-[#081220] border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Crafted to platform specifications by Patricia Slyvia
              </span>
              <button
                onClick={() => {
                  setLightboxImage(null);
                  onSelectServiceForInquiry('Skool Community Setup');
                }}
                className="px-4 py-2 text-xs font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] rounded-lg transition-colors cursor-pointer"
              >
                Inquire For Similar Setup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

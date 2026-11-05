import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles, UploadCloud } from 'lucide-react';
import { PORTFOLIO_CONCEPTS, PortfolioItem } from '../data/content';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onInquireAboutProject: (projectTitle: string) => void;
  onWorkWithMe: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  onInquireAboutProject,
  onWorkWithMe,
}) => {
  const [projects, setProjects] = useState<PortfolioItem[]>(PORTFOLIO_CONCEPTS);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const handleUpdateProjectImage = (projectId: string, newImageUrl: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, image: newImageUrl } : p))
    );
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject((prev) => (prev ? { ...prev, image: newImageUrl } : null));
    }
  };

  const [filter, setFilter] = useState<'all' | 'landing' | 'setup' | 'classroom' | 'onboarding'>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => {
        if (filter === 'landing') return p.sectionType === 'landing';
        if (filter === 'setup') return p.sectionType === 'setup';
        if (filter === 'classroom') return p.sectionType === 'classroom';
        if (filter === 'onboarding') return p.sectionType === 'onboarding';
        return true;
      });

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#F8FAFC] text-[#1E293B] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
              <span className="w-5 h-[1px] bg-[#C5A059]" />
              <span>Showcase of Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0A192F] tracking-tight">
              My Work & Design Concepts
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Explore custom community landing pages, intuitive classroom architectures, and engagement
              structures designed for high conversion and student completion.
            </p>

            {/* Transparent Authenticity Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>
                All sample work is clearly designated as <strong>Concept Design</strong> or{' '}
                <strong>Personal Design Project</strong>.
              </span>
            </div>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-[#0A192F] shadow-xs'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('landing')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'landing'
                  ? 'bg-white text-[#0A192F] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              Landing Pages (4)
            </button>
            <button
              onClick={() => setFilter('setup')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'setup'
                  ? 'bg-white text-[#0A192F] shadow-xs'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              Community Setup
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
              onClick={() => setFilter('onboarding')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                filter === 'onboarding'
                  ? 'bg-white text-[#0A192F] shadow-xs'
                  : 'text-slate-600 hover:text-[#0A192F]'
              }`}
            >
              Onboarding
            </button>
          </div>
        </div>

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#D4AF37]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Container */}
                <div
                  className={`relative overflow-hidden bg-slate-100 ${
                    project.isFullLandingPage ? 'aspect-[16/11]' : 'aspect-[16/10]'
                  }`}
                >
                  {project.isFullLandingPage && (
                    <div className="absolute top-0 left-0 right-0 z-10 px-3 py-1.5 bg-[#0F172A]/90 backdrop-blur-xs border-b border-slate-800 flex items-center justify-between text-[10px] text-slate-300">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <span className="font-mono text-slate-400 truncate max-w-[160px]">
                        {project.title.split('–')[0]?.trim()}
                      </span>
                      <span className="text-[#D4AF37] font-medium">Landing Page</span>
                    </div>
                  )}

                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 ${
                      project.isFullLandingPage ? 'object-top pt-6' : 'object-center'
                    }`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/src/assets/images/hero_skool_workspace_1793892762090.jpg';
                    }}
                  />

                  {/* Gradient Scrim & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-[#0A192F] bg-white rounded-lg flex items-center justify-center gap-1.5 shadow-md cursor-pointer hover:bg-slate-100 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{project.isFullLandingPage ? 'View Full Landing Page' : 'View Concept Details'}</span>
                    </button>
                  </div>

                  {/* Unboxed Tag in Corner */}
                  <div className="absolute bottom-3 left-3 bg-[#0A192F]/90 backdrop-blur-md text-[#D4AF37] px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider border border-[#D4AF37]/30">
                    {project.categoryTag}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-display font-bold text-lg text-[#0A192F] group-hover:text-[#0F2444] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Feature preview list */}
                  <ul className="space-y-1.5 mb-2">
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#C5A059] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[#0A192F] hover:text-[#C5A059] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{project.isFullLandingPage ? 'Explore Page Layout' : 'Explore Architecture'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onInquireAboutProject(project.title)}
                  className="text-[11px] font-medium text-slate-500 hover:text-[#0A192F] transition-colors cursor-pointer"
                >
                  Request Similar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Customization Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#0A192F] text-[#D4AF37] flex items-center justify-center shrink-0">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base text-[#0A192F]">
                Are you ready for your community to be featured here?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Every project is designed from scratch around your brand colors, assets, and curriculum requirements.
              </p>
            </div>
          </div>

          <button
            onClick={onWorkWithMe}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#16325C] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            Start Your Setup
          </button>
        </div>
      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onUpdateProjectImage={handleUpdateProjectImage}
          onInquireAboutProject={onInquireAboutProject}
        />
      )}
    </section>
  );
};

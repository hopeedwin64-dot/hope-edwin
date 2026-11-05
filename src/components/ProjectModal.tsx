import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle, Image as ImageIcon, Upload } from 'lucide-react';
import { PortfolioItem } from '../data/content';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onUpdateProjectImage?: (projectId: string, newImageUrl: string) => void;
  onInquireAboutProject?: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onUpdateProjectImage,
  onInquireAboutProject,
}) => {
  const [showReplaceInput, setShowReplaceInput] = useState(false);
  const [customUrl, setCustomUrl] = useState('');

  if (!project) return null;

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrl.trim() && onUpdateProjectImage) {
      onUpdateProjectImage(project.id, customUrl.trim());
      setShowReplaceInput(false);
      setCustomUrl('');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateProjectImage) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onUpdateProjectImage(project.id, reader.result);
          setShowReplaceInput(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#0A192F] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#D4AF37]">
              {project.categoryTag}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300">Detailed Concept Breakdown</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* Main Visual Preview */}
          <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200 mb-6 group shadow-lg">
            {project.isFullLandingPage && (
              <div className="px-4 py-2.5 bg-[#0F172A] border-b border-slate-700 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[11px] text-slate-400 bg-slate-800/80 px-3 py-0.5 rounded border border-slate-700/60">
                  {project.id === 'concept-landing-pet'
                    ? 'https://www.mypetandi.com'
                    : project.id === 'concept-landing-ai'
                    ? 'https://www.ailearningacademy.com'
                    : project.id === 'concept-landing-art'
                    ? 'https://www.hossanahart.com'
                    : 'https://www.yourhealthfinances.com'}
                </span>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                  Scrollable Preview ↓
                </span>
              </div>
            )}

            <div
              className={`w-full overflow-y-auto ${
                project.isFullLandingPage ? 'max-h-[520px] bg-slate-950' : 'aspect-[16/9]'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick replace image overlay bar for Patricia */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <button
                onClick={() => setShowReplaceInput(!showReplaceInput)}
                className="px-3 py-1.5 text-xs font-medium text-white bg-black/80 hover:bg-black backdrop-blur-md rounded-md flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20 shadow-md"
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Replace With Genuine Project Image</span>
              </button>
            </div>
          </div>

          {/* Image replacement widget */}
          {showReplaceInput && (
            <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-semibold text-[#0A192F] mb-2 flex items-center justify-between">
                <span>Update Project Screenshot (Preview):</span>
                <span className="text-[11px] text-slate-500 font-normal">
                  You can upload a file or paste an image link
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="url"
                  placeholder="Paste direct image URL (https://...)"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] bg-white"
                />
                <button
                  onClick={handleApplyUrl}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0A192F] rounded-lg hover:bg-slate-800 cursor-pointer"
                >
                  Apply URL
                </button>
                <label className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 flex items-center justify-center gap-1.5 cursor-pointer">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Local File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          )}

          {/* Project Details */}
          <div>
            <div className="inline-block text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-2">
              {project.categoryTag}
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0A192F] mb-4">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              {project.fullDescription}
            </p>

            {/* Key Features */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A192F] mb-3">
                Key Structural Specifications & Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500">
                Designed with precision for Skool platform standards.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                {onInquireAboutProject && (
                  <button
                    onClick={() => {
                      onInquireAboutProject(project.title);
                      onClose();
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inquire For Similar Setup</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Upload, Check, RefreshCw, Sparkles, Copy, Mail } from 'lucide-react';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onUpdatePhoto: (url: string) => void;
  currentEmail: string;
  onUpdateEmail: (email: string) => void;
  onResetToDefault: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onUpdatePhoto,
  currentEmail,
  onUpdateEmail,
  onResetToDefault,
}) => {
  const [photoUrl, setPhotoUrl] = useState(currentPhoto);
  const [emailInput, setEmailInput] = useState(currentEmail);
  const [savedNotice, setSavedNotice] = useState(false);
  const [copiedConfig, setCopiedConfig] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setPhotoUrl(reader.result);
          onUpdatePhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePhoto(photoUrl);
    onUpdateEmail(emailInput);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  const copyConfigSnippet = () => {
    const snippet = `// In src/data/content.ts:
export const SITE_METADATA = {
  name: 'Patricia Slyvia',
  title: 'Skool Community Setup, Management & Growth Expert',
  email: '${emailInput}',
  profilePhoto: '${photoUrl}',
};`;
    navigator.clipboard.writeText(snippet);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0A192F] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="font-display font-bold text-base text-white">
              Personalize Portfolio Information
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSaveAll} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <p className="text-xs text-slate-600 leading-relaxed">
            Use this panel to customize your profile photo and business email address. Changes take effect
            immediately across the website.
          </p>

          {/* Profile Photo */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A192F] mb-2">
              Profile Photo
            </label>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 shrink-0">
                <img
                  src={photoUrl}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <label className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#0A192F] bg-white border border-slate-300 rounded-lg hover:bg-slate-100 cursor-pointer shadow-2xs">
                  <Upload className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Upload From Computer</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <input
                  type="url"
                  placeholder="Or paste direct image URL (https://...)"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                />
              </div>
            </div>
          </div>

          {/* Business Email */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#0A192F] mb-1.5">
              Business Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="yourname@domain.com"
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onResetToDefault}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset to Default</span>
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={copyConfigSnippet}
                className="text-xs text-slate-500 hover:text-[#0A192F] flex items-center gap-1 cursor-pointer"
                title="Copy ready-to-paste TypeScript snippet for permanent storage"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedConfig ? 'Snippet Copied!' : 'Copy Code Snippet'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 sm:flex-none px-5 py-2 text-xs font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] rounded-lg shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {savedNotice ? <Check className="w-3.5 h-3.5" /> : null}
                <span>{savedNotice ? 'Saved!' : 'Save & Preview'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

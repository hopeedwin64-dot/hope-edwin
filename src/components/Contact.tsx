import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle,
  Copy,
} from 'lucide-react';
import { SERVICE_OPTIONS } from '../data/content';

interface ContactProps {
  selectedService: string;
  onSelectService: (service: string) => void;
  businessEmail: string;
}

export const Contact: React.FC<ContactProps> = ({
  selectedService,
  onSelectService,
  businessEmail,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState(selectedService || 'Skool Community Setup');
  const [projectDetails, setProjectDetails] = useState('');

  // Submission & Validation States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync if selectedService prop changes
  React.useEffect(() => {
    if (selectedService) {
      setServiceNeeded(selectedService);
    }
  }, [selectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!projectDetails.trim()) {
      errs.projectDetails = 'Please share a few details about your community project or goals';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const emailSubject = encodeURIComponent(`Skool Community Enquiry: ${serviceNeeded} - ${fullName}`);
  const emailBody = encodeURIComponent(
    `Hello Patricia,\n\nName: ${fullName}\nEmail: ${email}\nService Needed: ${serviceNeeded}\n\nProject Details:\n${projectDetails}\n\nSent via patricia-slyvia-portfolio`
  );
  const mailtoLink = `mailto:${businessEmail}?subject=${emailSubject}&body=${emailBody}`;

  const copyInquiryText = () => {
    const text = `Client Name: ${fullName}\nClient Email: ${email}\nService Requested: ${serviceNeeded}\n\nProject Details:\n${projectDetails}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setProjectDetails('');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F8FAFC] text-[#1E293B] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-3">
            <span className="w-5 h-[1px] bg-[#C5A059]" />
            <span>Direct Inquiries</span>
            <span className="w-5 h-[1px] bg-[#C5A059]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0A192F] tracking-tight">
            Let's Talk About Your Skool Community
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Fill in the details below to discuss your project requirements, scope, and timeline. I look
            forward to learning about your vision.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
              {submitted ? (
                /* Submission Confirmation Panel */
                <div className="py-6 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0A192F] mb-2">
                    Your Enquiry Draft is Ready!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Thank you, <strong className="text-slate-800">{fullName}</strong>. To ensure complete
                    transparency without unconfigured email servers, your enquiry has been compiled and is ready
                    to be sent directly to Patricia.
                  </p>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs text-slate-700 space-y-2">
                    <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                      <span className="font-semibold text-slate-500">Service:</span>
                      <span className="font-medium text-[#0A192F]">{serviceNeeded}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                      <span className="font-semibold text-slate-500">Sender Email:</span>
                      <span className="font-medium text-[#0A192F]">{email}</span>
                    </div>
                    <div className="pt-1">
                      <span className="font-semibold text-slate-500 block mb-1">Project Summary:</span>
                      <p className="text-slate-600 italic bg-white p-2.5 rounded border border-slate-200">
                        "{projectDetails}"
                      </p>
                    </div>
                  </div>

                  {/* Direct Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <a
                      href={mailtoLink}
                      className="flex-1 px-5 py-3 text-xs sm:text-sm font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] rounded-lg shadow-sm flex items-center justify-center gap-2 text-center"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open Pre-filled Email</span>
                    </a>
                    <button
                      onClick={copyInquiryText}
                      className="px-4 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      {copied ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Enquiry'}</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={handleResetForm}
                      className="text-xs text-slate-500 hover:text-[#0A192F] underline cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                    <span className="text-[11px] text-slate-400">
                      Destination: {businessEmail}
                    </span>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-colors ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-500">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-colors ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Service Needed Dropdown (All 10 required options) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Service Needed <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={serviceNeeded}
                      onChange={(e) => {
                        setServiceNeeded(e.target.value);
                        onSelectService(e.target.value);
                      }}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 text-slate-800"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your community goals, current platform status, estimated launch date, or specific classroom requirements..."
                      value={projectDetails}
                      onChange={(e) => {
                        setProjectDetails(e.target.value);
                        if (errors.projectDetails) setErrors({ ...errors, projectDetails: '' });
                      }}
                      className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-colors ${
                        errors.projectDetails ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="mt-1 text-xs text-rose-500">{errors.projectDetails}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] active:bg-[#C5A059] rounded-lg transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <span>Send My Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    I typically review and reply to all genuine enquiries within 24–48 business hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

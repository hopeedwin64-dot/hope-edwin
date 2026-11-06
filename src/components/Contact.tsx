import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle,
  CheckCircle2,
  Copy,
  Loader2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          serviceNeeded,
          projectDetails: projectDetails.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to deliver your enquiry. Please try again or use direct email.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Contact form submission error:', err);
      setSubmitError(
        err.message || 'There was a temporary problem delivering your message. You can also send via your email app.'
      );
    } finally {
      setIsSubmitting(false);
    }
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
    setSubmitError(null);
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
            Fill in the details below to discuss your project requirements, scope, and timeline. Your information
            is sent directly to Patricia Slyvia's private inbox.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0A192F] via-[#D4AF37] to-[#0A192F]" />

            {submitted ? (
              /* Submission Confirmation Panel */
              <div className="py-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Sent to {businessEmail}
                  </span>
                  <span className="text-xs text-slate-400">· Instant Delivery</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-[#0A192F] mb-2">
                  Enquiry Successfully Received!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Thank you, <strong className="text-slate-900 font-semibold">{fullName}</strong>. Your message and project details have been sent directly to Patricia Slyvia's inbox. She will review your requirements and respond within 24–48 hours.
                </p>

                {/* Customized Summary Box */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-xs text-slate-700 space-y-2.5">
                  <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
                    <span className="font-semibold text-slate-500">Service Requested:</span>
                    <span className="font-semibold text-[#0A192F] bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded">
                      {serviceNeeded}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-200/80 pb-2">
                    <span className="font-semibold text-slate-500">Your Email:</span>
                    <span className="font-medium text-[#0A192F]">{email}</span>
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-slate-500 block mb-1.5">Submitted Project Details:</span>
                    <p className="text-slate-700 whitespace-pre-line bg-white p-3 rounded-lg border border-slate-200 text-xs leading-relaxed">
                      {projectDetails}
                    </p>
                  </div>
                </div>

                {/* Additional Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <button
                    onClick={copyInquiryText}
                    className="flex-1 px-4 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {copied ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                  </button>
                  <a
                    href={mailtoLink}
                    className="px-4 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-slate-500" />
                    <span>Have attachments? Email directly</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={handleResetForm}
                    className="text-xs text-[#0A192F] hover:text-[#C5A059] font-medium underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                  <span className="text-[11px] text-slate-400">
                    Direct recipient: {businessEmail}
                  </span>
                </div>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Banner */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-3 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-rose-900 mb-1">Failed to send enquiry</p>
                      <p className="text-rose-700 mb-2">{submitError}</p>
                      <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-1.5 font-medium underline text-rose-900 hover:text-rose-950"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Click here to send directly via your email app</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={fullName}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-colors ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
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
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-colors ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
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
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setServiceNeeded(e.target.value);
                      onSelectService(e.target.value);
                    }}
                    className={`w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 text-slate-800 ${
                      isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
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
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setProjectDetails(e.target.value);
                      if (errors.projectDetails) setErrors({ ...errors, projectDetails: '' });
                    }}
                    className={`w-full px-4 py-2.5 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-colors ${
                      errors.projectDetails ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                  />
                  {errors.projectDetails && (
                    <p className="mt-1 text-xs text-rose-500">{errors.projectDetails}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5C07B] active:bg-[#C5A059] disabled:bg-amber-200 disabled:cursor-not-allowed rounded-lg transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0A192F]" />
                      <span>Delivering Enquiry to Patricia's Inbox...</span>
                    </>
                  ) : (
                    <>
                      <span>Send My Enquiry Directly</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Enquiries are delivered immediately to patriciaslyvia005@gmail.com</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


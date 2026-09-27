import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, ExternalLink, Send, CheckCircle2, Download, MessageSquare, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

interface ContactProps {
  onOpenResume: () => void;
}

const encodeFormData = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export const ContactSection: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Enterprise AI Architecture & RFP',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    setSubmitError(false);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({ 'form-name': 'contact', ...formData })
      });
      setFormSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Info Column */}
          <Reveal className="lg:col-span-5">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold mb-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Let's Architect Your Next AI Transformation
                </h2>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Available for advisory engagements, enterprise AI architecture consulting, RFP reviews, and leadership roles.
                </p>
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-3">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase">Direct Phone</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      +91 {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-slate-400 uppercase">Email Address</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">LinkedIn Profile</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        Rajneesh Prakash Hajela
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors" />
                </a>
              </div>

              {/* Resume Button */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-xs font-bold text-slate-800">Full Executive Resume</div>
                  <div className="text-[11px] text-slate-500">View or download complete PDF version</div>
                </div>
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>Resume</span>
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </Reveal>

          {/* Right Form Column */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-xl shadow-slate-200/60">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Rajneesh will review your inquiry regarding "{formData.topic}" and contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form name="contact" onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Direct Consultation Request</h3>
                  <p className="text-xs text-slate-500 mb-4">Send a message directly to Rajneesh Hajela.</p>
                  {submitError && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      Something went wrong sending your message. Please try again or email directly.
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1">Company / Org</label>
                      <input
                        type="text"
                        placeholder="e.g. Enterprise / Fintech"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1">Consulting Subject</label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400"
                      >
                        <option>Enterprise AI Architecture & RFP</option>
                        <option>Agentic AI & Multi-Agent Frameworks</option>
                        <option>AIOps & DB Query Optimization</option>
                        <option>Cloud Migration & Microservices</option>
                        <option>Advisory / Leadership Opportunity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 uppercase mb-1">Message / Project Outline</label>
                    <textarea
                      rows={4}
                      placeholder="Briefly outline your enterprise requirements or project goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-60 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
                  >
                    <span>{submitting ? 'Sending...' : 'Submit Consultation Request'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

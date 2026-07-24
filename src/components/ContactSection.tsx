import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, ExternalLink, Send, CheckCircle2, Download, MessageSquare, ShieldCheck } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'Enterprise AI Architecture & RFP',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 bg-slate-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Let's Architect Your Next AI Transformation
              </h2>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Available for advisory engagements, enterprise AI architecture consulting, RFP reviews, and leadership roles.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Phone</div>
                  <div className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    +91 {PERSONAL_INFO.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Email Address</div>
                  <div className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                      Rajneesh Prakash Hajela
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </a>
            </div>

            {/* Resume Button */}
            <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-200">Full Executive Resume</div>
                <div className="text-[11px] text-slate-400">View or download complete PDF version</div>
              </div>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-sm"
              >
                <span>Resume</span>
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-800 shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100">Message Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Rajneesh will review your inquiry regarding "{formData.topic}" and contact you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-slate-100 mb-1">Direct Consultation Request</h3>
                <p className="text-xs text-slate-400 mb-4">Send a message directly to Rajneesh Hajela.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Company / Org</label>
                    <input
                      type="text"
                      placeholder="e.g. Enterprise / Fintech"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Consulting Subject</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-500"
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
                  <label className="block text-[11px] font-mono text-slate-400 uppercase mb-1">Message / Project Outline</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly outline your enterprise requirements or project goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Submit Consultation Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

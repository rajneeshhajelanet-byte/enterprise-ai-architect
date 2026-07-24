import React, { useState } from 'react';
import { PERSONAL_INFO, CAREER_HISTORY, EDUCATION_LIST, CERTIFICATIONS_LIST, COMPETENCY_GROUPS } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, Phone, Mail, Award, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${PERSONAL_INFO.name}
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
${PERSONAL_INFO.title}

EXECUTIVE SUMMARY:
${PERSONAL_INFO.summary}

CORE ACHIEVEMENTS:
${PERSONAL_INFO.highlights.map(h => `• ${h}`).join('\n')}

PROFESSIONAL EXPERIENCE:
${CAREER_HISTORY.map(c => `
${c.role} - ${c.company} (${c.period})
Responsibilities:
${c.responsibilities.map(r => ` - ${r}`).join('\n')}
`).join('\n')}

EDUCATION & CERTIFICATIONS:
${EDUCATION_LIST.map(e => `• ${e.degree} - ${e.institution} (${e.year})`).join('\n')}
${CERTIFICATIONS_LIST.map(c => `• ${c.name} (${c.year})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 md:p-8 overflow-y-auto flex items-center justify-center">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Toolbar Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">{PERSONAL_INFO.name}</h3>
              <p className="text-[11px] text-slate-400">Executive Resume View</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-200 font-sans print:p-0 print:text-black print:bg-white">
          
          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-100 print:text-black">{PERSONAL_INFO.name}</h1>
            <p className="text-sm font-bold text-amber-400 print:text-gray-800 mt-1">{PERSONAL_INFO.title}</p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-gray-600 mt-3">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Phone: {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                Email: {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span>Location: {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider mb-2">Executive Summary</h2>
            <p className="text-xs leading-relaxed text-slate-300 print:text-gray-800">{PERSONAL_INFO.summary}</p>
          </div>

          {/* Key Achievements */}
          <div>
            <h2 className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider mb-2">Key Accomplishments</h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-gray-800">
              {PERSONAL_INFO.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider mb-2">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {COMPETENCY_GROUPS.map((group, idx) => (
                <div key={idx} className="p-3 bg-slate-950 rounded-lg border border-slate-800 print:border-gray-300">
                  <div className="text-xs font-bold text-slate-100 mb-1">{group.title}</div>
                  <p className="text-[11px] text-slate-400 leading-normal">{group.items.join(' • ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider mb-3">Professional Experience</h2>
            <div className="space-y-4">
              {CAREER_HISTORY.map((exp) => (
                <div key={exp.id} className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 print:border-gray-300 space-y-2">
                  <div className="flex flex-wrap items-center justify-between text-xs font-bold">
                    <span className="text-slate-100">{exp.role} <span className="text-amber-400 font-normal">@ {exp.company}</span></span>
                    <span className="text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-300 leading-relaxed">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider mb-2">Education</h2>
              <div className="space-y-2 text-xs">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.id} className="p-2.5 bg-slate-950 rounded border border-slate-800">
                    <div className="font-bold text-slate-200">{edu.degree}</div>
                    <div className="text-[11px] text-slate-400">{edu.institution} ({edu.year})</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider mb-2">Certifications</h2>
              <div className="space-y-2 text-xs">
                {CERTIFICATIONS_LIST.map((cert) => (
                  <div key={cert.id} className="p-2.5 bg-slate-950 rounded border border-slate-800 flex justify-between">
                    <div>
                      <div className="font-bold text-slate-200">{cert.name}</div>
                      <div className="text-[11px] text-slate-400">{cert.issuer || 'Professional'}</div>
                    </div>
                    <span className="text-amber-400 font-mono font-bold">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

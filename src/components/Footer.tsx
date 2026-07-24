import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Phone, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-black text-base flex items-center justify-center">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <div className="font-bold text-slate-100 text-sm">{PERSONAL_INFO.name}</div>
              <div className="text-[11px] text-slate-400">{PERSONAL_INFO.title}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a href="#blueprint" className="hover:text-amber-400 transition-colors">Architecture</a>
            <span>•</span>
            <a href="#slide-deck" className="hover:text-amber-400 transition-colors">14 Topics & Slides</a>
            <span>•</span>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Key Work</a>
            <span>•</span>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <span>•</span>
            <button onClick={onOpenResume} className="text-amber-400 hover:underline font-bold">
              Resume PDF ↓
            </button>
          </div>

          <a
            href="#top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Enterprise AI Architecture & Consulting.
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-mono">
            <span>Direct: +91 {PERSONAL_INFO.phone}</span>
            <span>•</span>
            <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 flex items-center gap-1">
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

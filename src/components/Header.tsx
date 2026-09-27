import React, { useState } from 'react';
import { Menu, X, Download, Phone, Layers, BookOpen, Briefcase, Award, GraduationCap, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Architecture', href: '#blueprint', icon: Layers },
    { label: 'Topics & Slides', href: '#slide-deck', icon: BookOpen },
    { label: 'Key Work', href: '#projects', icon: Briefcase },
    { label: 'Expertise', href: '#expertise', icon: Award },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Education', href: '#education', icon: GraduationCap },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Brand Mark */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 text-white font-black text-base flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            {PERSONAL_INFO.initials}
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm tracking-tight leading-tight group-hover:text-amber-600 transition-colors">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              Enterprise AI Architect
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-md transition-all ${
                  isActive
                    ? 'text-amber-600 font-semibold'
                    : 'hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-3 right-3 -bottom-[1px] h-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
            title="Call Rajneesh Hajela"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-sm transition-all hover:shadow-lg hover:shadow-amber-500/20"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 rounded text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-center gap-1"
          >
            Resume <Download className="w-3 h-3" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-md bg-slate-50 border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg">
          <div className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 px-2">
            Navigation Menu
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
            >
              <item.icon className="w-4 h-4 text-slate-400" />
              <span>{item.label}</span>
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 bg-slate-50 rounded-md"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call: {PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

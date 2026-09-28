import React, { useState, useEffect } from 'react';
import { useApp } from '@/src/context/AppContext';
import { BUSINESS_INFO } from '@/src/data/businessData';
import { 
  Calendar, 
  MessageCircle, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  ShieldCheck, 
  Clock, 
  FileText, 
  HelpCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate, openAppointmentModal } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: "Women's Health", path: '/womens-health' },
    { label: 'Patient Guide', path: '/patient-guide' },
    { label: 'Contact', path: '/contact' },
  ];

  const moreLinks = [
    { label: 'Why HJR Scans', path: '/why-hjr', icon: Sparkles, desc: "Our commitment to women's care & privacy" },
    { label: 'Scan Preparation', path: '/preparation', icon: Clock, desc: 'Guidelines before your scan' },
    { label: 'FAQs', path: '/faq', icon: HelpCircle, desc: 'Common questions & visit answers' },
    { label: 'Health Resources', path: '/resources', icon: FileText, desc: 'Educational diagnostic insights' },
    { label: 'Privacy & Terms', path: '/privacy', icon: ShieldCheck, desc: 'Clinical policies & patient confidentiality' },
  ];

  const handleLinkClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsMoreDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-200/80 shadow-xs'
            : 'bg-white border-slate-200/60'
        }`}
      >
        {/* Top announcement bar: subtle, high-trust reassurance */}
        <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="flex items-center gap-2 truncate">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span className="font-medium text-slate-200">
                Scanning only for women by a trained, qualified and experienced Lady Doctor
              </span>
            </p>
            <div className="hidden md:flex items-center gap-4 text-xs text-slate-300 shrink-0">
              <a 
                href={BUSINESS_INFO.phoneTel} 
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3 h-3 text-teal-400" />
                <span>044 4552 5205</span>
              </a>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Adyar, Chennai</span>
            </div>
          </div>
        </div>

        {/* Main 3-Zone Header Contract */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleLinkClick('/')}
            className="text-left group cursor-pointer shrink-0 py-1"
            aria-label="HJR SCANS Home"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 font-display transition-colors group-hover:text-teal-800">
              HJR SCANS
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`relative py-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-teal-800 font-semibold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-700 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* "More" Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                onBlur={() => setTimeout(() => setIsMoreDropdownOpen(false), 200)}
                className="flex items-center gap-1 py-1.5 hover:text-slate-900 cursor-pointer transition-colors"
                aria-expanded={isMoreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    isMoreDropdownOpen ? 'rotate-180 text-teal-700' : 'text-slate-400'
                  }`}
                />
              </button>

              {isMoreDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Patient Hub & Clinic
                  </div>
                  {moreLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.path}
                        onClick={() => handleLinkClick(item.path)}
                        className="w-full text-left px-3 py-2.5 flex items-start gap-3 hover:bg-slate-50 transition-colors cursor-pointer group"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-100 text-teal-800 group-hover:bg-teal-50 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900 group-hover:text-teal-900">
                            {item.label}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Secondary CTA: WhatsApp Us */}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium text-teal-900 bg-teal-50/80 hover:bg-teal-100 border border-teal-200/70 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-teal-700" />
              <span>WhatsApp Us</span>
            </a>

            {/* Primary CTA: Book an Appointment */}
            <button
              onClick={() => openAppointmentModal()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-slate-950 font-display">HJR SCANS</span>
                <p className="text-xs text-slate-500">Diagnostic & Women's Imaging Centre</p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Core Links */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  Navigation
                </div>
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between cursor-pointer ${
                      currentPath === link.path
                        ? 'bg-teal-50 text-teal-900 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </button>
                ))}
              </div>

              {/* Extended More Links */}
              <div className="space-y-1 pt-4 border-t border-slate-200">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
                  Patient Resources
                </div>
                {moreLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleLinkClick(item.path)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-3 cursor-pointer ${
                        currentPath === item.path
                          ? 'bg-teal-50 text-teal-900 font-semibold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Verified Trust Statement */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  Women's Diagnostic Centre
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Scanning only for women by a trained, qualified and experienced Lady Doctor.
                </p>
              </div>

              {/* Quick Contact Info */}
              <div className="space-y-2 pt-2 text-xs text-slate-600">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-100 text-slate-900 font-medium"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Call: 044 4552 5205</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-teal-50 text-teal-900 font-medium"
                >
                  <MessageCircle className="w-4 h-4 text-teal-700" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openAppointmentModal();
                }}
                className="w-full py-3 px-4 bg-slate-950 text-white font-medium rounded-lg text-sm shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

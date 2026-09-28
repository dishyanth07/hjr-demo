import React from 'react';
import { useApp } from '@/src/context/AppContext';
import { BUSINESS_INFO } from '@/src/data/businessData';
import { MessageCircle, Phone, Calendar, Home, Stethoscope, MapPin } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { currentPath, navigate, openAppointmentModal } = useApp();

  return (
    <>
      {/* Desktop & Tablet Floating Quick-Action Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        {/* Floating Call Button */}
        <a
          href={BUSINESS_INFO.phoneTel}
          aria-label="Call HJR Scans Reception"
          className="group relative flex items-center justify-center w-12 h-12 bg-white text-slate-800 hover:text-teal-700 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs px-2.5 py-1 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md">
            Call 044 4552 5205
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire on WhatsApp"
          className="group relative flex items-center justify-center w-13 h-13 bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-xl transition-all hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 fill-white/20" />
          <span className="absolute right-15 whitespace-nowrap bg-slate-900 text-white text-xs px-3 py-1.5 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md font-medium">
            WhatsApp HJR Scans
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom CTA Bar (Strictly fixed, high-contrast, visible while scrolling) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-t border-slate-200/90 px-3 py-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* CALL NOW */}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg text-xs font-bold transition-colors text-center shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
            <span className="truncate">CALL NOW</span>
          </a>

          {/* WHATSAPP */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200/80 rounded-lg text-xs font-bold transition-colors text-center shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-teal-700 shrink-0" />
            <span className="truncate">WHATSAPP</span>
          </a>

          {/* BOOK */}
          <button
            onClick={() => openAppointmentModal()}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors text-center shadow-md active:scale-98 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-300 shrink-0" />
            <span className="truncate">BOOK</span>
          </button>
        </div>
      </div>
    </>
  );
};

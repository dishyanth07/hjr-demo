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

      {/* Mobile Sticky Bottom CTA Bar (Strictly capped under 15% mobile viewport height) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-1.5 shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {/* Home */}
          <button
            onClick={() => navigate('/')}
            className={`flex flex-col items-center justify-center w-14 py-1 cursor-pointer transition-colors ${
              currentPath === '/' ? 'text-teal-800 font-semibold' : 'text-slate-500'
            }`}
          >
            <Home className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] tracking-tight">Home</span>
          </button>

          {/* Services */}
          <button
            onClick={() => navigate('/services')}
            className={`flex flex-col items-center justify-center w-14 py-1 cursor-pointer transition-colors ${
              currentPath.startsWith('/services') ? 'text-teal-800 font-semibold' : 'text-slate-500'
            }`}
          >
            <Stethoscope className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] tracking-tight">Services</span>
          </button>

          {/* Book Appointment (Hero Center Action) */}
          <button
            onClick={() => openAppointmentModal()}
            className="flex flex-col items-center justify-center px-3.5 py-1.5 bg-slate-950 text-white rounded-lg shadow-sm cursor-pointer active:scale-95 transition-transform"
          >
            <Calendar className="w-4 h-4 text-teal-300 mb-0.5" />
            <span className="text-[10px] font-medium tracking-tight">Book Scan</span>
          </button>

          {/* WhatsApp */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-14 py-1 text-teal-700 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] tracking-tight font-medium">WhatsApp</span>
          </a>

          {/* Call */}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="flex flex-col items-center justify-center w-14 py-1 text-slate-700 cursor-pointer"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] tracking-tight font-medium">Call</span>
          </a>
        </div>
      </div>
    </>
  );
};

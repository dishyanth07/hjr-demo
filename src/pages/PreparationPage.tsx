import React from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO } from '@/src/data/businessData';
import { 
  AlertCircle, 
  Phone, 
  MessageCircle, 
  Clock, 
  Droplet, 
  UtensilsCrossed, 
  ShieldCheck, 
  HelpCircle,
  Calendar
} from 'lucide-react';

export const PreparationPage: React.FC = () => {
  const { openAppointmentModal } = useApp();

  const prepCategories = [
    {
      category: 'Abdominal & Upper GI Ultrasound',
      typicalRequirement: 'Often requires a period of fasting (usually 4 to 6 hours) to minimize intestinal gas and optimize gallbladder visualization.',
      keyNote: 'Please contact HJR Scans to confirm exact fasting duration prior to scheduling.',
      icon: UtensilsCrossed
    },
    {
      category: 'Pelvic & Early Pregnancy Scans',
      typicalRequirement: 'Often requires drinking water approximately 1 hour prior to the scan to achieve a comfortably full urinary bladder.',
      keyNote: 'Please contact HJR Scans to confirm hydration guidelines for your scan.',
      icon: Droplet
    },
    {
      category: 'Thyroid, Neck & Small Parts Imaging',
      typicalRequirement: 'Usually does not require any dietary fasting or bladder preparation. Wear comfortable clothing with an open collar.',
      keyNote: 'Please confirm specific requirements with HJR Scans.',
      icon: Clock
    },
    {
      category: 'General Soft Tissue & Musculoskeletal',
      typicalRequirement: 'Generally requires no special preparation. Loose clothing recommended for easy access to the targeted examination site.',
      keyNote: 'Please confirm specific requirements with HJR Scans.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pb-24 space-y-12">
      <Breadcrumbs items={[{ label: 'Scan Preparation' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Diagnostic Readiness
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
            Scan Preparation Guide
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Proper preparation ensures that soundwave transmission is optimal and results are of the highest diagnostic fidelity.
          </p>
        </div>

        {/* Mandatory Prominent Notice */}
        <div className="mt-8 p-6 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-950 space-y-2 max-w-3xl shadow-xs">
          <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
            <AlertCircle className="w-5 h-5 text-amber-700" />
            <span>Important Clinical Protocol</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
            Preparation requirements may vary depending on the scan. Please contact HJR Scans to confirm the instructions for your appointment.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-900 text-white rounded-lg text-xs font-semibold hover:bg-amber-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call 044 4552 5205</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-amber-300 text-amber-900 rounded-lg text-xs font-semibold hover:bg-amber-100 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-teal-700" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Visually Designed Placeholders & Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prepCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {item.category}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.typicalRequirement}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-800">Verification:</span> {item.keyNote}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* General Advice Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold font-display text-white">
              Questions regarding medications or special circumstances?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If you take prescribed medications (such as for diabetes or hypertension), please mention this when booking so our team can provide personalized guidance.
            </p>
          </div>
          <button
            onClick={() => openAppointmentModal()}
            className="px-5 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO, CLINICAL_IMAGES } from '@/src/data/businessData';
import { 
  Heart, 
  Lock, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Phone, 
  MessageCircle, 
  Sparkles,
  CheckCircle,
  EyeOff,
  UserCheck
} from 'lucide-react';

export const WhyHjrPage: React.FC = () => {
  const { openAppointmentModal } = useApp();

  return (
    <div className="pb-24 space-y-16 sm:space-y-24">
      <Breadcrumbs items={[{ label: 'Why HJR Scans' }]} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Clinical Distinction
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
            Why Choose HJR Scans
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            In an era of high-volume, impersonal diagnostic chains, HJR Scans was created with a deeply personal focus: clinical scanning only for women by a trained, qualified and experienced Lady Doctor.
          </p>
        </div>
      </section>

      {/* Story Narrative 1: Women-Focused Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              01. The Principle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
              A Dedicated Women-Focused Practice
            </h2>
            <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed">
              <p>
                Medical diagnostic appointments—especially those involving pelvic, abdominal, or obstetric scans—can often evoke vulnerability and discomfort.
              </p>
              <p>
                HJR Scans eliminated that stress by establishing an exclusive environment for women. Here, every clinical protocol, seating arrangement, and patient interaction is designed to ensure peace of mind.
              </p>
            </div>
            <div className="p-4 bg-teal-50 border border-teal-200/80 rounded-xl text-xs text-teal-950">
              <span className="font-semibold">Core Principle:</span> A serene, modest, and dedicated healthcare space tailored exclusively for female patients.
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={CLINICAL_IMAGES.womensClinic}
                alt="Women's Imaging Suite at HJR Scans Adyar"
                className="w-full h-full object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Narrative 2: Privacy & Comfort */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                <img
                  src={CLINICAL_IMAGES.hero}
                  alt="Private Diagnostic Console at HJR Scans"
                  className="w-full h-full object-cover aspect-4/3"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                02. Privacy & Dignity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Uncompromising Patient Privacy
              </h2>
              <div className="space-y-3.5 text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  At HJR Scans, your appointment is scheduled with intentional spacing to avoid crowded waiting rooms and overlapping consultations.
                </p>
                <p>
                  Our private scanning rooms are secure, and patients are respectfully draped throughout their procedure. We hold patient confidentiality and personal dignity as sacred clinical responsibilities.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                  <EyeOff className="w-5 h-5 text-teal-400 mb-1" />
                  <div className="font-semibold text-white text-xs">Secured Rooms</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Strict privacy during scans</div>
                </div>
                <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                  <Lock className="w-5 h-5 text-teal-400 mb-1" />
                  <div className="font-semibold text-white text-xs">Discreet Records</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Confidential medical reporting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Narrative 3: Professional Experience & Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
            <UserCheck className="w-8 h-8 text-teal-700" />
            <h3 className="text-xl font-bold text-slate-900 font-display">
              03. Trained, Qualified & Experienced Lady Doctor
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every single ultrasound procedure is performed firsthand by an experienced female physician who brings clinical rigor, attentive eye, and gentle communication to every scan.
            </p>
            <p className="text-xs text-slate-500">
              There is no impersonal delegation to unqualified technicians; you are examined by an experienced professional from start to finish.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs space-y-4">
            <MapPin className="w-8 h-8 text-teal-700" />
            <h3 className="text-xl font-bold text-slate-900 font-display">
              04. Convenient Adyar Location
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Located on the Ground Floor at Chandra Flats, Mahatma Gandhi Road, Shastri Nagar, Adyar, Chennai.
            </p>
            <p className="text-xs text-slate-500">
              Step-free ground floor access ensures that expectant mothers, recovering patients, and senior women can visit comfortably without climbing stairs or navigating labyrinthine hospital corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-6 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold font-display">
            Experience the Difference of Attentive Care
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Book your appointment at HJR Scans in Adyar or reach out directly to our team via WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openAppointmentModal()}
              className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              Book an Appointment
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-slate-800 hover:bg-slate-750 text-white rounded-xl text-xs font-semibold border border-slate-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

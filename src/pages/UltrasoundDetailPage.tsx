import React from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO, CLINICAL_IMAGES, SERVICES_DATA } from '@/src/data/businessData';
import { 
  ShieldCheck, 
  Calendar, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export const UltrasoundDetailPage: React.FC = () => {
  const { navigate, openAppointmentModal } = useApp();
  const service = SERVICES_DATA.find((s) => s.id === 'ultrasound') || SERVICES_DATA[0];

  return (
    <div className="pb-24 space-y-16">
      <Breadcrumbs
        items={[
          { label: 'Services', path: '/services' },
          { label: 'Ultrasound Scanning' },
        ]}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-900 bg-teal-50 px-3 py-1 rounded border border-teal-200">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
              <span>Diagnostic Soundwave Imaging</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
              Diagnostic Ultrasound Scanning
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              Safe, high-resolution cross-sectional anatomical visualization utilizing advanced soundwave frequencies without ionizing radiation. Conducted with precision and bedside gentleness in Adyar, Chennai.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 text-white text-xs space-y-1 border-l-4 border-teal-400">
              <span className="font-semibold text-teal-300">Clinical Protocol:</span>
              <p className="text-slate-200">
                Scanning only for women by a trained, qualified and experienced Lady Doctor.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openAppointmentModal('ultrasound')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book Ultrasound Scan</span>
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 rounded-xl text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-teal-700" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={CLINICAL_IMAGES.ultrasoundTech}
                alt="Ultrasound Equipment at HJR Scans Adyar"
                className="w-full h-full object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview & What it is */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-950 font-display">
              What Is Diagnostic Ultrasound?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Diagnostic ultrasound, also called sonography, uses high-frequency acoustic waves to produce real-time dynamic images of soft tissue structures, organs, and vascular flow inside the body.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Because ultrasound does not use ionizing radiation (unlike X-rays or CT scans), it is widely regarded as an extraordinarily safe, painless, and versatile diagnostic modality for female health evaluations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-slate-950 font-display">
              When Patients May Be Referred
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {service.whenReferred.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What to Expect & Preparation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
                Clinical Workflow
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                What to Expect During Your Ultrasound
              </h2>
              <div className="space-y-3 pt-2">
                {service.whatToExpect.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3 text-xs text-slate-200"
                  >
                    <span className="w-5 h-5 rounded-full bg-teal-600/30 text-teal-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <p className="leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Instruction Box */}
            <div className="lg:col-span-5 bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-4">
              <div className="flex items-center gap-2 text-teal-300 font-semibold text-xs uppercase tracking-wide">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Preparation Instructions</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Confirm Requirements With Centre
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Preparation guidelines depend on the specific anatomical area being evaluated:
              </p>
              <ul className="text-xs text-slate-400 space-y-2 list-disc list-inside">
                <li>Abdominal scans often require 4 to 6 hours of fasting.</li>
                <li>Pelvic or urinary scans generally require a full bladder.</li>
                <li>Thyroid or musculoskeletal scans rarely require fasting.</li>
              </ul>
              <div className="p-3 rounded-lg bg-teal-950/60 border border-teal-800 text-[11px] text-teal-200">
                Please contact HJR Scans at <span className="font-semibold text-white">044 4552 5205</span> or on WhatsApp when booking to confirm specific instructions for your appointment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 rounded-2xl bg-white border border-slate-200 max-w-2xl mx-auto space-y-4 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 font-display">
            Ready to schedule your ultrasound?
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Book online or speak with our friendly reception team in Adyar, Chennai.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => openAppointmentModal('ultrasound')}
              className="px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold"
            >
              Request Appointment
            </button>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold"
            >
              Call Reception
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

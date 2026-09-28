import React, { useState } from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO, CLINICAL_IMAGES } from '@/src/data/businessData';
import { 
  Heart, 
  Lock, 
  ShieldCheck, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  CheckCircle,
  EyeOff,
  UserCheck,
  Smile,
  ArrowRight
} from 'lucide-react';

export const WomensHealthPage: React.FC = () => {
  const { openAppointmentModal } = useApp();
  const [selectedFocusTab, setSelectedFocusTab] = useState<'pelvic' | 'antenatal' | 'follicular'>('pelvic');

  const focusData = {
    pelvic: {
      title: 'Pelvic & Gynecological Imaging',
      desc: 'Focused evaluation of uterine, ovarian, and pelvic anatomy. Conducted with sensitivity, gentleness, and complete privacy.',
      points: [
        'Detailed visualization of the uterus and endometrial lining',
        'Ovarian morphology and follicle evaluation',
        'Investigation of lower abdominal discomfort or cyclical irregularities',
        'Private consultation room with female-only medical staff'
      ]
    },
    antenatal: {
      title: 'Antenatal Wellbeing Scanning',
      desc: 'Gentle obstetric ultrasound examinations monitoring fetal development milestones throughout pregnancy in a reassuring space.',
      points: [
        'Gestational sac confirmation and early fetal cardiac activity',
        'Routine trimester monitoring as prescribed by your obstetrician',
        'Amniotic fluid assessment and placental localization',
        'Comfortable examination bed allowing expectant mothers to rest'
      ]
    },
    follicular: {
      title: 'Follicular & Ovulation Tracking',
      desc: 'Time-sensitive follicular ultrasound scans monitoring follicle development, tailored for women tracking fertility or undergoing treatment.',
      points: [
        'Serial follicular measurement and endometrial thickness tracking',
        'Timely, flexible appointment slots to match ovulation cycles',
        'Consistent clinical reviews by the same experienced Lady Doctor',
        'Gentle and respectful clinical execution'
      ]
    }
  };

  return (
    <div className="pb-24 space-y-16 sm:space-y-24">
      <Breadcrumbs items={[{ label: "Women's Health Imaging" }]} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-900 bg-teal-50 px-3 py-1.5 rounded-md border border-teal-200">
              <Heart className="w-3.5 h-3.5 text-teal-700" />
              <span>Dedicated Women's Diagnostic Centre · Adyar</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
              Women’s Health, With Care and Privacy.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A private, reassuring healthcare sanctuary dedicated exclusively to women’s diagnostic scanning. Experience specialized ultrasound performed by a trained, qualified and experienced Lady Doctor.
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white border-l-4 border-teal-400 shadow-md">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-teal-300 font-bold mb-0.5">
                    Our Unbending Standard
                  </div>
                  <p className="text-sm sm:text-base font-medium text-slate-100">
                    "Scanning only for women by a trained, qualified and experienced Lady Doctor"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openAppointmentModal('womens-health')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-300" />
                <span>Book Women's Scan</span>
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 rounded-xl text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-teal-700" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <img
                src={CLINICAL_IMAGES.womensClinic}
                alt="Women's Health Scanning Room at HJR Scans Adyar"
                className="w-full h-full object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-xl text-xs text-slate-800 shadow-md">
                <span className="font-bold text-slate-950">100% Female Clinical Setting:</span> Designed from the ground up for feminine comfort and modesty.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars: Comfort, Privacy, Professional Care, Women-Focused Scanning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Why Patients Choose HJR Scans
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
            The Four Pillars of Our Women's Practice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-teal-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
              <Smile className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display mb-2">
              1. Deep Comfort
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We eliminate clinical coldness. Soft lighting, warm acoustic gel, restful beds, and empathetic bedside manners ensure you remain at ease.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-teal-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display mb-2">
              2. Absolute Privacy
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Discreet private rooms where doors remain closed throughout your examination. Never any unexpected interruptions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-teal-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display mb-2">
              3. Professional Care
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Exclusively performed by a trained, qualified and experienced Lady Doctor with deep understanding of women's anatomy and diagnostic nuances.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-teal-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display mb-2">
              4. Women-Only Focus
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A serene clinical environment reserved exclusively for women, avoiding the overwhelming chaos of generic multi-specialty waiting halls.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Clinical Focus Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Interactive Clinical Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Specialized Women's Scanning Protocols
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select a specialized area below to understand our clinical focus and patient care measures.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedFocusTab('pelvic')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedFocusTab === 'pelvic'
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              Pelvic & Gynecological
            </button>
            <button
              onClick={() => setSelectedFocusTab('antenatal')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedFocusTab === 'antenatal'
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              Antenatal Pregnancy Scans
            </button>
            <button
              onClick={() => setSelectedFocusTab('follicular')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedFocusTab === 'follicular'
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              Follicular & Ovulation
            </button>
          </div>

          {/* Active Tab Card */}
          <div className="bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                {focusData[selectedFocusTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {focusData[selectedFocusTab].desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {focusData[selectedFocusTab].points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Service availability subject to prior booking & clinical confirmation.
              </span>
              <button
                onClick={() => openAppointmentModal('womens-health')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                <span>Book This Examination</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Adyar Women's Care CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs text-center space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            A Safe Space for Your Health
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Located in Shastri Nagar, Adyar. Contact HJR Scans today to book your scan or ask any questions about your visit.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => openAppointmentModal('womens-health')}
              className="px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold"
            >
              Book an Appointment
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 rounded-xl text-xs font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO, CLINICAL_IMAGES } from '@/src/data/businessData';
import { 
  ShieldCheck, 
  Heart, 
  MapPin, 
  Lock, 
  Calendar, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Sparkles,
  Building,
  UserCheck
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate, openAppointmentModal } = useApp();

  return (
    <div className="pb-24 space-y-16 sm:space-y-20">
      <Breadcrumbs items={[{ label: 'About HJR Scans' }]} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Institutional Profile
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight leading-tight">
            A Dignified Approach to Women’s Diagnostic Imaging
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            HJR Scans was established in Adyar, Chennai, with a foundational purpose: to provide clinical scanning exclusively for women conducted by a trained, qualified and experienced Lady Doctor in a setting of complete privacy and compassionate care.
          </p>
        </div>
      </section>

      {/* Key Principle Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border-l-4 border-teal-400 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs uppercase font-bold text-teal-300 tracking-wider">
              Core Clinical Commitment
            </div>
            <p className="text-lg sm:text-xl font-medium font-display leading-snug">
              "Scanning only for women by a trained, qualified and experienced Lady Doctor"
            </p>
            <p className="text-xs text-slate-400">
              Preserving patient dignity and clinical thoroughness in every procedure.
            </p>
          </div>
          <button
            onClick={() => openAppointmentModal()}
            className="inline-flex items-center gap-2 px-5 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Book Appointment</span>
          </button>
        </div>
      </section>

      {/* Editorial Section: Our Approach & Women-focused Care */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
                Our Approach
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Unhurried, Attentive & Thorough
              </h2>
            </div>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                In busy diagnostic centres, patients often face rushed appointments, crowded waiting halls, and impersonal hand-offs. HJR Scans was designed specifically to counter that experience.
              </p>
              <p>
                By dedicating our scanning exclusively to women, we maintain a calm, serene environment where patients feel fully supported. Each scan is given adequate clinical time, allowing the Lady Doctor to perform exhaustive evaluations without rushing.
              </p>
              <p>
                Whether it is a routine abdominal scan, a gynecological assessment, or antenatal monitoring, our team ensures the patient is put at ease before, during, and after the test.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <Heart className="w-5 h-5 text-teal-700 mb-2" />
                <div className="text-sm font-bold text-slate-900">Gentle Care</div>
                <div className="text-xs text-slate-500 mt-0.5">Sensitive to patient comfort</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <Lock className="w-5 h-5 text-teal-700 mb-2" />
                <div className="text-sm font-bold text-slate-900">Absolute Privacy</div>
                <div className="text-xs text-slate-500 mt-0.5">Strict confidentiality protocol</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
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

      {/* Professional Environment & Facility */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Centre Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              The HJR Scans Clinical Environment
            </h2>
            <p className="text-sm text-slate-400">
              Every detail of our facility reflects clinical hygiene, modern comfort, and welcoming warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <UserCheck className="w-6 h-6 text-teal-400" />
              <h3 className="text-base font-bold text-white font-display">
                Qualified Lady Doctor
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Examinations are executed with clinical precision and bedside empathy by our experienced female physician.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <Building className="w-6 h-6 text-teal-400" />
              <h3 className="text-base font-bold text-white font-display">
                Ground Floor Accessibility
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Step-free ground floor access at Chandra Flats on Mahatma Gandhi Road, ideal for expectant mothers and elderly patients.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-3">
              <Sparkles className="w-6 h-6 text-teal-400" />
              <h3 className="text-base font-bold text-white font-display">
                Tranquil Waiting Lounge
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A calm, respectful environment free of overcrowding, designed to keep anxiety and waiting stress to a minimum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Centrally Located in Adyar
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              HJR Scans · Chandra Flats, Shastri Nagar
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
              {BUSINESS_INFO.address.full}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <MapPin className="w-4 h-4 text-teal-300" />
              <span>Google Maps</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>044 4552 5205</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

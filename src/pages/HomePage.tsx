import React, { useState } from 'react';
import { useApp } from '@/src/context/AppContext';
import { 
  BUSINESS_INFO, 
  CLINICAL_IMAGES, 
  SERVICES_DATA, 
  FAQS_DATA, 
  GENUINE_GOOGLE_REVIEWS,
  PATIENT_JOURNEY_STAGES 
} from '@/src/data/businessData';
import { 
  Calendar, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Heart, 
  Lock, 
  MapPin, 
  ArrowRight, 
  ChevronRight, 
  Plus, 
  Minus, 
  Star,
  Activity,
  CheckCircle,
  ExternalLink,
  EyeOff,
  UserCheck,
  Smile
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate, openAppointmentModal } = useApp();
  const [activeJourneyTab, setActiveJourneyTab] = useState<number>(0);
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setExpandedFaqId((prev) => (prev === id ? null : id));
  };

  const trustPillars = [
    {
      title: "Women-Focused Care",
      desc: "Thoughtfully established to provide female patients with an uncompromised sense of comfort, dignity, and specialized attention.",
      icon: Heart,
    },
    {
      title: "Professional Scanning",
      desc: "All clinical ultrasound examinations are performed by a trained, qualified and experienced Lady Doctor.",
      icon: ShieldCheck,
    },
    {
      title: "Patient Privacy",
      desc: "Complete confidentiality with dedicated private consultation rooms and spacious, respectful appointment intervals.",
      icon: Lock,
    },
    {
      title: "Convenient Adyar Location",
      desc: "Situated on the ground floor at Chandra Flats, Shastri Nagar, Adyar with hassle-free patient drop-off and access.",
      icon: MapPin,
    },
  ];

  const stepsHowItWorks = [
    {
      num: '01',
      title: 'Choose Your Scan',
      desc: 'Identify the ultrasound or women’s imaging test recommended by your physician or healthcare provider.',
    },
    {
      num: '02',
      title: 'Contact HJR Scans',
      desc: 'Reach out via our online request form, phone at 044 4552 5205, or directly on WhatsApp.',
    },
    {
      num: '03',
      title: 'Confirm Appointment',
      desc: 'Our reception confirms the exact date, slot timing, and specific clinical preparation instructions.',
    },
    {
      num: '04',
      title: 'Visit the Centre',
      desc: 'Arrive at our serene ground-floor Adyar facility for your private examination and prompt diagnostic report.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-28 pb-20">
      {/* ========================================================
          1. HERO SECTION — MAJOR IMPROVEMENT
          ======================================================== */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-14 sm:pb-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Immediate Brand Communication & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Brand Wordmark & Location Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-900 bg-slate-100 px-3 py-1 rounded-md border border-slate-200/80">
                  HJR SCANS
                </span>
                <span className="text-xs font-semibold text-teal-900 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></span>
                  <span>Adyar, Chennai</span>
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.1] text-balance">
                Trusted Diagnostic Scanning for Women
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Professional scanning with care, privacy and comfort. Experience thorough diagnostic evaluations in a calm and dignified clinical setting.
              </p>

              {/* Mandatory Highlight Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white shadow-md border-l-4 border-teal-400">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-teal-300 font-bold mb-0.5">
                      Clinical Positioning
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-100">
                      "Scanning only for women by a trained, qualified and experienced Lady Doctor"
                    </p>
                  </div>
                </div>
              </div>

              {/* Primary & Secondary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                <button
                  onClick={() => openAppointmentModal()}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-950 hover:bg-slate-850 text-white text-xs sm:text-sm font-bold uppercase tracking-wide rounded-xl shadow-md transition-all cursor-pointer hover:shadow-lg active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>BOOK AN APPOINTMENT</span>
                </button>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-teal-50 hover:bg-teal-100 text-teal-950 border border-teal-200/90 text-xs sm:text-sm font-bold uppercase tracking-wide rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-teal-700" />
                  <span>WHATSAPP US</span>
                </a>
              </div>

              {/* Additional Quick Information */}
              <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>Adyar, Chennai</span>
                </a>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>044 4552 5205</span>
                </a>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="text-slate-500">Ground Floor Access</span>
              </div>
            </div>

            {/* Right Column: Hero Visual with Real High-Res Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 aspect-16/11 sm:aspect-4/3 lg:aspect-square">
                <img
                  src={CLINICAL_IMAGES.hero}
                  alt="HJR Scans Diagnostic Imaging Suite in Adyar, Chennai"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Quiet Floating Clinical Indicator */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-lg text-slate-900 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800">
                      <Activity className="w-5 h-5 text-teal-700" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Diagnostic Excellence
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Trained, Qualified Lady Doctor
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      Adyar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. TRUST EXPERIENCE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Clinical Standards
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
            A Patient-First Diagnostic Experience
          </h3>
          <p className="text-sm text-slate-600">
            Engineered around the comfort, peace of mind, and diagnostic certainty that every patient deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:border-teal-500/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-5 group-hover:bg-teal-700 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display mb-2 group-hover:text-teal-900 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. SERVICES SECTION
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
              Clinical Offerings
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 font-display mt-1">
              Diagnostic Services
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              High-resolution ultrasound imaging conducted with meticulous attention to detail.
            </p>
          </div>
          <div>
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-800 hover:text-teal-950 cursor-pointer group"
            >
              <span>View Full Directory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col group"
            >
              <div className="h-52 overflow-hidden relative bg-slate-100">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-xs font-semibold text-slate-900 border border-slate-200">
                  {srv.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-950 font-display group-hover:text-teal-900 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Notice:</span> {srv.availabilityNote}
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (srv.id === 'ultrasound') navigate('/services/ultrasound');
                      else if (srv.id === 'womens-health') navigate('/services/womens-health');
                      else navigate('/services');
                    }}
                    className="text-xs font-semibold text-teal-800 hover:text-teal-950 cursor-pointer flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openAppointmentModal(srv.id)}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium cursor-pointer transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. WOMEN'S HEALTH SECTION ("Care Designed Around Women")
          ======================================================== */}
      <section className="bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Dedicated Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Care Designed Around Women
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We have designed every aspect of HJR Scans around the unique health, privacy, and clinical comfort of female patients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Privacy',
                desc: 'Private rooms with secured doors, soft lighting, and discreet registration protocols.',
                icon: EyeOff,
              },
              {
                title: 'Comfort',
                desc: 'Gentle transducer application, warm ultrasound gel, and restful clinical beds.',
                icon: Smile,
              },
              {
                title: 'Professional Care',
                desc: 'Scanning conducted only for women by a trained, qualified and experienced Lady Doctor.',
                icon: UserCheck,
              },
              {
                title: 'Women-focused Scanning',
                desc: 'Dedicated female sonography protocols respecting modesty and physical ease.',
                icon: Heart,
              },
            ].map((col) => {
              const Icon = col.icon;
              return (
                <div
                  key={col.title}
                  className="bg-slate-900/70 backdrop-blur-xs p-6 rounded-xl border border-slate-800/90 space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-display">
                    {col.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {col.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate('/womens-health')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 text-sm font-bold rounded-xl transition-colors cursor-pointer"
            >
              <span>Explore Women's Health</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => openAppointmentModal('womens-health')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800/90 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl border border-slate-700 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>Book Women's Scan</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHY HJR SCANS ("Why Choose HJR Scans")
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Factual Distinction
          </span>
          <h2 className="text-3xl font-bold text-slate-950 font-display">
            Why Choose HJR Scans
          </h2>
          <p className="text-sm text-slate-600">
            A dedicated diagnostic centre grounded in clinical ethics and female patient comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">
              Women-Focused Scanning
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Exclusively created for women to ensure a tranquil, dignified, and comfortable diagnostic examination.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">
              Professional Care
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All scans performed directly by a trained, qualified, and experienced Lady Doctor without rushed hand-offs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">
              Patient Privacy
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated private examination rooms with secured doors and generous appointment spacing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-950 font-display">
              Convenient Adyar Location
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Step-free ground floor access at Chandra Flats on M.G. Road in Shastri Nagar, Adyar.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. GOOGLE REVIEWS SECTION (Genuine Reviews)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-1.5 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-900 ml-1.5">
                  5.0 on Google
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                Patient Feedback on Google
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Verified reviews from patients and families who visited HJR Scans in Adyar.
              </p>
            </div>

            <div>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 rounded-xl text-xs font-semibold shadow-xs transition-colors"
              >
                <span>View all Google Reviews</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GENUINE_GOOGLE_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-800 italic leading-relaxed font-normal">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-950">— {review.name}</span>
                  <span className="text-slate-400 text-[11px]">{review.relativeTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. HOW IT WORKS & PATIENT JOURNEY
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Streamlined Process
          </span>
          <h2 className="text-3xl font-bold text-slate-950 font-display">
            How It Works
          </h2>
          <p className="text-sm text-slate-600">
            From initial enquiry to your final diagnostic report in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stepsHowItWorks.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-teal-800/25 font-display block mb-4">
                  {step.num}
                </span>
                <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-[11px] text-teal-800 font-medium">
                <span>Step {step.num} of 04</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Patient Care Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Every Step of Your Visit, Simplified
            </h2>
            <p className="text-sm text-slate-400">
              Clear expectations ensure that you feel completely relaxed throughout your diagnostic imaging visit.
            </p>
          </div>

          {/* Interactive Segmented Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-800/80 rounded-xl mb-8 max-w-md">
            {PATIENT_JOURNEY_STAGES.map((stage, idx) => (
              <button
                key={stage.title}
                onClick={() => setActiveJourneyTab(idx)}
                className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeJourneyTab === idx
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {stage.title}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="bg-slate-800/40 rounded-2xl p-6 sm:p-8 border border-slate-700/60">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs text-teal-400 uppercase font-semibold">
                  Stage {PATIENT_JOURNEY_STAGES[activeJourneyTab].stage}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {PATIENT_JOURNEY_STAGES[activeJourneyTab].title}
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                {PATIENT_JOURNEY_STAGES[activeJourneyTab].subtitle}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {PATIENT_JOURNEY_STAGES[activeJourneyTab].points.map((pt, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Need specific guidelines for your scan?
              </div>
              <button
                onClick={() => navigate('/preparation')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-white cursor-pointer"
              >
                <span>Read Full Scan Preparation Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. LOCATION SECTION ("Visit HJR Scans")
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Info details */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
                  Location & Access
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
                  Visit HJR Scans
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Conveniently situated on the ground floor with peaceful surroundings and easy car and auto drop-off right outside Chandra Flats in Shastri Nagar, Adyar.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        HJR Scans Address
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        {BUSINESS_INFO.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
                    <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Phone Reception
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {BUSINESS_INFO.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 text-teal-300" />
                  <span>GET DIRECTIONS</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-teal-700" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Reception Photo Visual */}
            <div className="lg:col-span-6 bg-slate-100 relative min-h-[300px]">
              <img
                src={CLINICAL_IMAGES.adyarLounge}
                alt="Reception Lounge at HJR Scans Adyar Chennai"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200 shadow-md text-xs text-slate-700">
                <span className="font-semibold text-slate-900">Ground Floor Accessibility:</span> Step-free, tranquil lounge designed for patient comfort.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. FAQ PREVIEW
          ======================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Common Inquiries
          </span>
          <h2 className="text-3xl font-bold text-slate-950 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Answers to common questions regarding our diagnostic services, location, and booking.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.slice(0, 6).map((faq) => {
            const isOpen = expandedFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-slate-900 font-display">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => navigate('/faq')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 cursor-pointer"
          >
            <span>View All Frequently Asked Questions</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ========================================================
          10. FINAL APPOINTMENT CTA
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-950 text-white overflow-hidden p-8 sm:p-14 border border-slate-800 shadow-2xl text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">
              Dedicated Diagnostic Care
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              Your comfort matters.
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Talk to HJR Scans today.
            </p>
            <p className="text-xs text-slate-400 max-w-lg mx-auto pt-1 italic">
              "Scanning only for women by a trained, qualified and experienced Lady Doctor"
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openAppointmentModal()}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>BOOK AN APPOINTMENT</span>
            </button>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 hover:bg-slate-850 text-white border border-slate-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-teal-400" />
              <span>WHATSAPP HJR SCANS</span>
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-500">
            <span>2nd Avenue, Chandra Flats, Shastri Nagar, Adyar, Chennai 600020</span>
            <span className="mx-2">·</span>
            <span>Tel: 044 4552 5205</span>
          </div>
        </div>
      </section>
    </div>
  );
};

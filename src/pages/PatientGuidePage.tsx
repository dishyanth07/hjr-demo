import React, { useState } from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO, PATIENT_JOURNEY_STAGES } from '@/src/data/businessData';
import { 
  Search, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const PatientGuidePage: React.FC = () => {
  const { navigate, openAppointmentModal } = useApp();
  const [guideSearch, setGuideSearch] = useState('');

  const guideSections = [
    {
      id: 'before-visit',
      title: 'Before Your Visit',
      desc: 'Essential steps to schedule and verify your diagnostic appointment seamlessly.',
      tips: [
        'Confirm whether your scan requires prior scheduling or priority walk-in availability.',
        'Always consult with our staff regarding required preparation (fasting vs drinking water).',
        'Verify your physician’s referral prescription to ensure the requested test is confirmed.'
      ]
    },
    {
      id: 'what-to-bring',
      title: 'What to Bring for Your Scan',
      desc: 'Key documentation required at the reception desk upon check-in.',
      tips: [
        'Official prescription / requisition slip from your consulting doctor or obstetrician.',
        'Previous ultrasound reports, CT/MRI scans, or relevant medical records for longitudinal comparison.',
        'A valid government-issued photo ID card.',
        'Comfortable, loose two-piece clothing for ease of examination.'
      ]
    },
    {
      id: 'preparing-scan',
      title: 'Preparing for Your Scan',
      desc: 'Guidelines on hydration, dietary restrictions, and clinical readiness.',
      tips: [
        'Preparation requirements vary depending on the scan. Please confirm instructions with HJR Scans.',
        'For whole abdomen ultrasound, an empty stomach (usually 4–6 hours fasting) is typically recommended.',
        'For pelvic and early obstetric scans, drinking water to achieve a full bladder is often required.',
        'Always take your essential daily medications with small sips of water unless specifically told otherwise by your doctor.'
      ]
    },
    {
      id: 'during-visit',
      title: 'During Your Visit',
      desc: 'Your clinical experience inside our private women’s scanning suite.',
      tips: [
        'Your scan is performed only by a trained, qualified and experienced Lady Doctor.',
        'The doctor will apply warm hypoallergenic gel to ensure clear acoustic sound transmission.',
        'You will be comfortably draped to respect personal modesty and dignity at all times.',
        'Average procedure time ranges between 15 and 30 minutes.'
      ]
    },
    {
      id: 'after-visit',
      title: 'After Your Visit & Reports',
      desc: 'Documentation turnaround and sharing findings with your treating physician.',
      tips: [
        'Comprehensive, structured diagnostic imaging reports are prepared promptly.',
        'Both physical imaging films and typed reports are handed to you with clear instructions.',
        'Our staff is on hand to answer administrative questions regarding report collection.'
      ]
    }
  ];

  const filteredSections = guideSections.filter((sec) => {
    return (
      sec.title.toLowerCase().includes(guideSearch.toLowerCase()) ||
      sec.desc.toLowerCase().includes(guideSearch.toLowerCase()) ||
      sec.tips.some((t) => t.toLowerCase().includes(guideSearch.toLowerCase()))
    );
  });

  return (
    <div className="pb-24 space-y-12">
      <Breadcrumbs items={[{ label: 'Patient Guide' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Patient Support Center
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
            Patient Guide & Visit Information
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Everything you need to know about preparing for your visit to HJR Scans in Adyar. We believe that clarity and informed guidance alleviate visit anxiety.
          </p>
        </div>

        {/* Search */}
        <div className="mt-8 max-w-md relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search preparation, documents, fasting..."
            value={guideSearch}
            onChange={(e) => setGuideSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 bg-white shadow-xs"
          />
        </div>
      </section>

      {/* Verified Medical Disclaimer Alert */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/90 flex items-start gap-3 text-xs text-amber-950">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-900">Clinical Preparation Notice:</span>{' '}
            Preparation requirements may vary depending on the scan. Please contact HJR Scans at <span className="font-semibold">{BUSINESS_INFO.phone}</span> or via WhatsApp to confirm the exact instructions for your appointment.
          </div>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSections.map((sec) => (
            <div
              key={sec.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4 hover:border-slate-300 transition-colors"
            >
              <div>
                <h2 className="text-xl font-bold text-slate-950 font-display">
                  {sec.title}
                </h2>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {sec.desc}
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {sec.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Common Patient Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'How can I book an appointment?',
              a: 'You can request an appointment through our online booking form, call reception directly at 044 4552 5205, or message us on WhatsApp.'
            },
            {
              q: 'What should I bring for my visit?',
              a: 'Please bring your doctor’s referral prescription, past ultrasound or imaging reports, and a valid photo ID.'
            },
            {
              q: 'Do I need preparation before my scan?',
              a: 'Preparation requirements may vary depending on the scan. Please contact HJR Scans to confirm the instructions for your appointment.'
            }
          ].map((faq, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
              <h3 className="text-sm font-bold text-slate-900 font-display">
                {faq.q}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => navigate('/faq')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 cursor-pointer"
          >
            <span>View All FAQs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Quick Help CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-display text-white">
              Have specific questions about your appointment?
            </h3>
            <p className="text-xs text-slate-400">
              Our clinical desk in Shastri Nagar, Adyar is happy to help you with directions, timings, and instructions.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-slate-950" />
              <span>Call 044 4552 5205</span>
            </a>
            <button
              onClick={() => openAppointmentModal()}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-white font-semibold text-xs rounded-lg transition-colors"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

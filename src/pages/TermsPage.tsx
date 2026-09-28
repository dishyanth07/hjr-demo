import React from 'react';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO } from '@/src/data/businessData';
import { AlertCircle, ShieldCheck } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pb-24 space-y-12">
      <Breadcrumbs items={[{ label: 'Terms & Clinical Disclaimer' }]} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Regulatory & Clinical Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            Terms & Clinical Disclaimer
          </h1>
          <p className="text-xs text-slate-500">
            HJR Scans · Adyar, Chennai, Tamil Nadu
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <span className="font-bold">Medical Disclaimer:</span> This website is for informational and appointment requesting purposes only. It does not provide medical diagnoses or replace direct consultation with a qualified medical specialist.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 font-display">
              1. Clinical Role & Scope
            </h2>
            <p>
              HJR Scans is a diagnostic imaging centre providing ultrasound examinations. Scans are conducted only for women by a trained, qualified, and experienced Lady Doctor. All scans require an attending physician's referral or clinical requisition.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 font-display">
              2. Appointment Requests
            </h2>
            <p>
              Submissions made through our appointment forms represent scheduling requests and are subject to clinical confirmation by our reception team based on doctor availability and scan preparation status.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 font-display">
              3. Preparation Instructions
            </h2>
            <p>
              Diagnostic ultrasound accuracy depends substantially upon patient preparation (e.g., fasting or hydration). Patients are advised to strictly verify preparation guidelines with HJR Scans before their scheduled visit.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 font-display">
              4. Governing Jurisdiction
            </h2>
            <p>
              Any clinical or administrative inquiries are subject to the local healthcare guidelines and statutory laws applicable in Chennai, Tamil Nadu, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

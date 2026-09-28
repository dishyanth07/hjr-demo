import React from 'react';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO } from '@/src/data/businessData';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pb-24 space-y-12">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Compliance & Confidentiality
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            Patient Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: September 2026 · HJR Scans, Adyar, Chennai
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-xs text-slate-700 flex items-start gap-3">
          <Lock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            At HJR Scans, medical privacy and patient dignity form the bedrock of our clinical ethos. We maintain rigorous standards to safeguard all personal, diagnostic, and clinical information entrusted to us.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 font-display">
              1. Scope of Clinical Information
            </h2>
            <p>
              When requesting an appointment or undergoing an ultrasound examination at HJR Scans, we collect essential demographic data (such as patient name, phone number, and referral doctor) and clinical details necessary to perform accurate diagnostic evaluations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 font-display">
              2. Strict Diagnostic Confidentiality
            </h2>
            <p>
              All ultrasound images, sonographic cine loops, and finalized diagnostic reports are treated as strictly confidential medical records. Diagnostic records are released only to the patient, their authorized guardian, or the prescribing healthcare provider.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 font-display">
              3. Female-Centric Physical Privacy
            </h2>
            <p>
              Our clinic operates with strict examination room privacy protocols. Consultations and ultrasound scanning are conducted exclusively by a trained, qualified and experienced Lady Doctor in closed private suites, ensuring personal modesty and emotional security throughout the visit.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 font-display">
              4. Contact & Inquiries
            </h2>
            <p>
              For questions concerning your medical records or data security practices, please contact our administrative desk at {BUSINESS_INFO.phone} or visit our centre at {BUSINESS_INFO.address.full}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

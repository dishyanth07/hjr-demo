import React from 'react';
import { useApp } from '@/src/context/AppContext';
import { BUSINESS_INFO } from '@/src/data/businessData';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  ArrowUpRight, 
  ShieldCheck, 
  Calendar,
  Clock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, openAppointmentModal } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Col 1: Brand & Key Clinical Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="text-2xl font-bold tracking-tight text-white font-display">
                HJR SCANS
              </span>
              <p className="text-xs text-teal-400 mt-1 font-medium tracking-wide">
                PREMIUM DIAGNOSTIC & WOMEN'S IMAGING CENTRE
              </p>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated diagnostic ultrasound scanning focused on women’s clinical care, privacy, and thorough diagnostic evaluation in Adyar, Chennai.
            </p>

            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-teal-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Clinical Guarantee</span>
              </div>
              <p className="text-slate-400 italic">
                "{BUSINESS_INFO.tagline}"
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={() => openAppointmentModal()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>Book Appointment</span>
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-teal-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Diagnostic Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => navigate('/services/ultrasound')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Ultrasound Scanning
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services/womens-health')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Women's Health Scanning
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Diagnostic Imaging
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Pregnancy-Related Scanning
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/services')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Pelvic & Follicular Scans
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Patient Care */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Patient Care
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => navigate('/patient-guide')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Patient Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/preparation')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Scan Preparation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/why-hjr')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Why HJR Scans
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/faq')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/resources')}
                  className="hover:text-teal-300 transition-colors text-left cursor-pointer"
                >
                  Health Resources Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Centre & Location */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Centre & Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-500">Call Reception</div>
                  <div className="font-semibold text-slate-200 group-hover:text-teal-300">
                    {BUSINESS_INFO.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 leading-relaxed">
                  2nd Avenue, A2, Ground Floor,<br />
                  Chandra Flats, M.G. Road,<br />
                  Shastri Nagar, Adyar, Chennai 600020
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-medium"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Legal & Disclaimer Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} HJR Scans. All rights reserved. Adyar, Chennai.</p>
            <p className="mt-1 text-slate-600">
              Notice: HJR Scans provides dedicated diagnostic ultrasound scanning only for women conducted by a trained, qualified and experienced Lady Doctor.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms & Clinical Disclaimer
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

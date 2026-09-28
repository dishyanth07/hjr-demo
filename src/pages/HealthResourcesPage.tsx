import React, { useState } from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { HEALTH_RESOURCES_DATA, BUSINESS_INFO } from '@/src/data/businessData';
import { 
  FileText, 
  Clock, 
  Info, 
  ChevronRight, 
  Search, 
  ShieldAlert, 
  BookOpen,
  Calendar
} from 'lucide-react';

export const HealthResourcesPage: React.FC = () => {
  const { openAppointmentModal } = useApp();
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = HEALTH_RESOURCES_DATA.filter((art) => {
    return (
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="pb-24 space-y-12">
      <Breadcrumbs items={[{ label: 'Health Resources' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Educational Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
            Diagnostic Health Resources
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Educational guides to help patients understand diagnostic ultrasound technology, prepare for clinical visits, and comprehend routine women’s health imaging.
          </p>
        </div>

        {/* Required Prominent Sample Content Disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 text-xs flex items-start gap-3 max-w-3xl">
          <ShieldAlert className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-900">Patient Educational Notice (Sample Content):</span>
            <p className="leading-relaxed">
              The articles below are provided strictly for general health education and informational awareness. HJR Scans does not provide personalized medical diagnoses through this digital hub. Always consult your referring physician for personal medical advice.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mt-8 max-w-md relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search articles, topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 bg-white"
          />
        </div>
      </section>

      {/* Resource Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => {
            const isSelected = activeArticleId === article.id;
            return (
              <div
                key={article.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between space-y-5 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-teal-800">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-950 font-display">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-900 uppercase tracking-wide">
                      Key Topics Covered:
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                      {article.sections.map((sec, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {sec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {isSelected && (
                    <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2 animate-in fade-in duration-200">
                      <div className="font-semibold text-slate-900">
                        Educational Note:
                      </div>
                      <p className="leading-relaxed">
                        Diagnostic sonography is a vital cornerstone of preventive and routine healthcare. When conducted by trained physicians using calibrated transducers, it offers an indispensable, non-invasive window into internal anatomy.
                      </p>
                      <p className="text-[11px] text-slate-500 italic">
                        Demo educational resource for HJR Scans client presentation.
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setActiveArticleId(isSelected ? null : article.id)}
                    className="text-xs font-semibold text-teal-800 hover:text-teal-950 cursor-pointer flex items-center gap-1"
                  >
                    <span>{isSelected ? 'Collapse Overview' : 'Read Article Overview'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </button>

                  <button
                    onClick={() => openAppointmentModal()}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-display text-white">
              Need to book a diagnostic scan?
            </h3>
            <p className="text-xs text-slate-400">
              HJR Scans provides dedicated ultrasound scanning for women in Adyar, Chennai.
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

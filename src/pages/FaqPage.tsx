import React, { useState } from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { FAQS_DATA, BUSINESS_INFO } from '@/src/data/businessData';
import { 
  Search, 
  Plus, 
  Minus, 
  HelpCircle, 
  Phone, 
  MessageCircle, 
  Calendar,
  AlertCircle
} from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { openAppointmentModal } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [faqSearch, setFaqSearch] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = ['All', 'Appointments', 'Services', 'Preparation', 'Location', 'General'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pb-24 space-y-12">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Help & Knowledge
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Find answers to commonly asked questions about diagnostic scanning, visit preparations, and appointments at HJR Scans in Adyar.
          </p>
        </div>

        {/* Filter controls & Search */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search questions..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 bg-slate-50/50"
            />
          </div>
        </div>
      </section>

      {/* Preparation Disclaimer Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Medical Preparation Note:</span> Specific preparation requirements vary based on the scan ordered by your physician. Please confirm preparation requirements directly with HJR Scans when scheduling.
          </div>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No questions matched your search</h3>
            <p className="text-xs text-slate-500">
              Please contact our reception at 044 4552 5205 for immediate assistance.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-xs font-semibold text-teal-800 uppercase tracking-wide mr-2">
                        {faq.category} ·
                      </span>
                      <span className="text-sm font-bold text-slate-900 font-display">
                        {faq.question}
                      </span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 text-center space-y-4">
          <h3 className="text-xl font-bold font-display text-white">
            Have a question not listed here?
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Our clinical team in Shastri Nagar, Adyar is on hand to guide you through procedure details and test preparations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-colors"
            >
              Call 044 4552 5205
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-750 text-white font-semibold text-xs rounded-xl border border-slate-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

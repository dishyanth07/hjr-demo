import React, { useState } from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { SERVICES_DATA, BUSINESS_INFO } from '@/src/data/businessData';
import { 
  Search, 
  ChevronRight, 
  Calendar, 
  Info, 
  ShieldCheck, 
  HelpCircle,
  FileCheck,
  Phone
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { navigate, openAppointmentModal } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Ultrasound', "Women's Health", 'Obstetric', 'Diagnostic'];

  const filteredServices = SERVICES_DATA.filter((srv) => {
    const matchesCategory = selectedCategory === 'All' || srv.category === selectedCategory;
    const matchesSearch =
      srv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      srv.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-24 space-y-12">
      <Breadcrumbs items={[{ label: 'Services Directory' }]} />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Clinical Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
            Diagnostic & Imaging Services
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            High-resolution diagnostic ultrasound examinations conducted exclusively for women by our qualified Lady Doctor. Explore our clinical services below.
          </p>
        </div>

        {/* Clinical Assurance Note */}
        <div className="mt-6 p-4 rounded-xl bg-teal-50/80 border border-teal-200/80 flex items-start gap-3 text-xs text-teal-950 max-w-3xl">
          <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Patient Privacy & Lady Doctor Protocol:</span>{' '}
            All scans are conducted exclusively for women by a trained, qualified and experienced Lady Doctor. Specific preparation guidelines and appointment slots are confirmed directly upon booking.
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Buttons (Functional button controls per anti-slop rules) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search scans, pelvic, obstetric..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 bg-slate-50/50"
            />
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No matching services found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Please try searching with another keyword or reach out directly to HJR Scans reception at 044 4552 5205.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-xs font-semibold text-teal-800 hover:underline pt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 relative bg-slate-100 overflow-hidden">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-md text-xs font-semibold text-slate-900 border border-slate-200 shadow-xs">
                      {srv.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="text-xl font-bold text-slate-950 font-display">
                        {srv.title}
                      </h2>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        {srv.fullDesc}
                      </p>
                    </div>

                    {/* Unboxed Tags */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                      {srv.tags.map((t, i) => (
                        <React.Fragment key={t}>
                          <span>{t}</span>
                          {i < srv.tags.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* What to Expect Bulletins */}
                    <div className="space-y-1.5 pt-2">
                      <div className="text-xs font-semibold text-slate-900">
                        What to Expect:
                      </div>
                      <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                        {srv.whatToExpect.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Preparation Warning */}
                    <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-[11px] text-amber-900 leading-normal">
                      <span className="font-semibold">Preparation:</span> {srv.preparationNote}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => {
                      if (srv.id === 'ultrasound') navigate('/services/ultrasound');
                      else if (srv.id === 'womens-health') navigate('/services/womens-health');
                      else navigate(`/services/${srv.id}`);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 hover:text-teal-950 cursor-pointer"
                  >
                    <span>Detailed Overview</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => openAppointmentModal(srv.id)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Book Scan
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Enquiry Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold font-display">
              Unsure which scan your physician requested?
            </h3>
            <p className="text-xs text-slate-400">
              Our clinical staff in Adyar is available to review your prescription and advise you on preparation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>Call 044 4552 5205</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

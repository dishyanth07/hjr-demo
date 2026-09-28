import React, { useState } from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO, SERVICES_DATA } from '@/src/data/businessData';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Info,
  ArrowRight,
  ArrowLeft,
  FileText
} from 'lucide-react';

export const AppointmentsPage: React.FC = () => {
  const { showToast } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<string>('ultrasound');
  const [preferredDate, setPreferredDate] = useState<string>(() => {
    const tmrw = new Date();
    tmrw.setDate(tmrw.getDate() + 1);
    return tmrw.toISOString().split('T')[0];
  });
  const [preferredTimeSlot, setPreferredTimeSlot] = useState<string>('morning');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [referralDoctor, setReferralDoctor] = useState<string>('');
  const [patientNotes, setPatientNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateDetails = () => {
    const errs: { [key: string]: string } = {};
    if (!patientName.trim()) {
      errs.name = 'Patient name is required';
    }
    const cleanPhone = patientPhone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit contact number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateDetails()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
      showToast('Appointment request received! HJR Scans will confirm availability.', 'success');
    }, 700);
  };

  const currentServiceObj = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  const timeSlots = [
    { id: 'morning', label: 'Morning Slot', window: '09:00 AM – 12:30 PM' },
    { id: 'afternoon', label: 'Afternoon Slot', window: '02:00 PM – 05:00 PM' },
    { id: 'evening', label: 'Evening Slot', window: '05:30 PM – 08:00 PM' },
  ];

  return (
    <div className="pb-24 space-y-12">
      <Breadcrumbs items={[{ label: 'Book an Appointment' }]} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Diagnostic Scheduling
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
            Request an Appointment
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Schedule your private ultrasound examination at HJR Scans in Adyar, Chennai. Dedicated scanning only for women by an experienced Lady Doctor.
          </p>
        </div>

        {/* Main Multi-Step Container Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Progress bar */}
          <div className="bg-slate-900 text-white px-6 sm:px-8 py-4 border-b border-slate-800">
            <div className="flex items-center justify-between text-xs">
              {[
                { num: 1, label: '1. Select Service' },
                { num: 2, label: '2. Date & Time' },
                { num: 3, label: '3. Patient Details' },
                { num: 4, label: '4. Confirmation' },
              ].map((s) => {
                const isDone = step > s.num;
                const isCurrent = step === s.num;
                return (
                  <div
                    key={s.num}
                    className={`flex items-center gap-1.5 ${
                      isCurrent
                        ? 'text-teal-300 font-semibold'
                        : isDone
                        ? 'text-slate-300'
                        : 'text-slate-500'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isDone
                          ? 'bg-teal-600 text-white'
                          : isCurrent
                          ? 'bg-teal-400 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {s.num}
                    </span>
                    <span className="hidden sm:inline">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Step Body */}
          <div className="p-6 sm:p-10">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-950 font-display">
                    Step 1: Choose Your Diagnostic Scan
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Select the scanning examination required by your physician.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVICES_DATA.map((srv) => {
                    const isSelected = selectedService === srv.id;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setSelectedService(srv.id)}
                        className={`p-5 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-teal-600 bg-teal-50/50 ring-1 ring-teal-600 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold text-slate-900">
                              {srv.title}
                            </span>
                            <span className="text-[11px] text-teal-800 font-semibold bg-teal-100/70 px-2 py-0.5 rounded">
                              {srv.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {srv.shortDesc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                          {isSelected ? (
                            <span className="text-teal-800 font-semibold">✓ Selected</span>
                          ) : (
                            <span>Click to select</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <span>
                    Scanning is performed exclusively for women by a trained, qualified, and experienced Lady Doctor.
                  </span>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <span>Proceed to Date & Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-950 font-display">
                    Step 2: Choose Preferred Date & Window
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Select when you would like to visit HJR Scans in Adyar.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full max-w-sm px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                    Preferred Time Window
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {timeSlots.map((ts) => {
                      const isSelected = preferredTimeSlot === ts.id;
                      return (
                        <button
                          key={ts.id}
                          type="button"
                          onClick={() => setPreferredTimeSlot(ts.id)}
                          className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'border-teal-600 bg-teal-50/70 shadow-xs'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="text-xs font-bold text-slate-900">{ts.label}</div>
                          <div className="text-[11px] text-slate-500 mt-1">{ts.window}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    Exact timing will be confirmed by HJR Scans. Some scans require specific fasting or hydration prior to examination.
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <span>Enter Patient Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-950 font-display">
                    Step 3: Patient Information
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Provide the patient's contact information for scheduling.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Patient Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        placeholder="e.g. S. Kavitha"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className={`w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border ${
                          errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        } focus:border-teal-600 focus:ring-1 focus:ring-teal-600`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        placeholder="e.g. 98401 23456"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className={`w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                        } focus:border-teal-600 focus:ring-1 focus:ring-teal-600`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        placeholder="patient@example.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Referring Doctor <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Doctor or Clinic Name"
                      value={referralDoctor}
                      onChange={(e) => setReferralDoctor(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Clinical Notes or Specific Requests <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention specific scan types or previous scan details..."
                    value={patientNotes}
                    onChange={(e) => setPatientNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                {/* Clear Transparency & Disclaimer */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-900">
                    Important Booking Protocol
                  </div>
                  <p>
                    This is a booking request demo. Appointment availability will be confirmed by HJR Scans. Please retain your physician’s prescription for verification on the day of your visit.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <span>Request Appointment</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="text-center py-6 space-y-6 max-w-lg mx-auto">
                <div className="w-16 h-16 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto ring-8 ring-teal-50/50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-slate-950 font-display">
                    Appointment request received
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    Your request has been recorded. HJR Scans will contact you to confirm availability.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-2.5">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-semibold text-slate-900">{currentServiceObj.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Preferred Date:</span>
                    <span className="font-semibold text-slate-900">{preferredDate}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Time Window:</span>
                    <span className="font-semibold text-slate-900 uppercase">{preferredTimeSlot} Slot</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact Number:</span>
                    <span className="font-semibold text-slate-900">{patientPhone}</span>
                  </div>
                </div>

                {/* Required statement */}
                <div className="p-4 bg-teal-50 border border-teal-200/80 rounded-xl text-xs text-teal-950 text-left">
                  <span className="font-semibold">Next Step:</span> Appointment availability will be confirmed by HJR Scans. Our reception will call or message you to confirm the exact time and answer any preparation queries.
                </div>

                {/* Alternative: WhatsApp option */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/914445525205?text=Hi%20HJR%20Scans%2C%20I%20have%20requested%20an%20appointment%20for%20${encodeURIComponent(currentServiceObj.title)}%20for%20${encodeURIComponent(patientName)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Prefer WhatsApp? Message Us</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setPatientName('');
                      setPatientPhone('');
                    }}
                    className="w-full sm:w-auto px-5 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                  >
                    Make Another Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

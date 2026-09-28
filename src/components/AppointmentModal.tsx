import React, { useState, useEffect } from 'react';
import { useApp } from '@/src/context/AppContext';
import { BUSINESS_INFO, SERVICES_DATA } from '@/src/data/businessData';
import { 
  X, 
  Check, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Info,
  CheckCircle2
} from 'lucide-react';

export const AppointmentModal: React.FC = () => {
  const { isAppointmentModalOpen, closeAppointmentModal, selectedServiceForModal, showToast } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState<string>(selectedServiceForModal || 'ultrasound');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState<string>('morning');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [referralDoctor, setReferralDoctor] = useState<string>('');
  const [clinicalNotes, setClinicalNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (selectedServiceForModal) {
      setSelectedService(selectedServiceForModal);
    }
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setPreferredDate(dateStr);
  }, [selectedServiceForModal, isAppointmentModalOpen]);

  if (!isAppointmentModalOpen) return null;

  const validateStep3 = () => {
    const errs: { [key: string]: string } = {};
    if (!patientName.trim()) {
      errs.name = 'Patient name is required';
    }
    const cleanPhone = patientPhone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextFromStep1 = () => {
    setStep(2);
  };

  const handleNextFromStep2 = () => {
    if (!preferredDate) {
      setErrors({ date: 'Please select a preferred date' });
      return;
    }
    setErrors({});
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
      showToast('Appointment request received. Our team will contact you shortly.', 'success');
    }, 600);
  };

  const currentServiceObj = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  const handleClose = () => {
    setStep(1);
    setErrors({});
    closeAppointmentModal();
  };

  const timeSlots = [
    { id: 'morning', label: 'Morning Slot', window: '09:00 AM – 12:30 PM' },
    { id: 'afternoon', label: 'Afternoon Slot', window: '02:00 PM – 05:00 PM' },
    { id: 'evening', label: 'Evening Slot', window: '05:30 PM – 08:00 PM' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold font-display tracking-tight">HJR SCANS</span>
              <span className="text-slate-500">·</span>
              <span className="text-xs text-teal-300 font-medium">Appointment Request</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Adyar, Chennai · Clinical Scanning for Women
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-Step Progress Indicator */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200/80">
          <div className="flex items-center justify-between text-xs">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Date & Time' },
              { num: 3, label: 'Details' },
              { num: 4, label: 'Confirmation' },
            ].map((s) => {
              const isDone = step > s.num;
              const isCurrent = step === s.num;
              return (
                <div key={s.num} className="flex items-center gap-1.5">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                      isDone
                        ? 'bg-teal-600 text-white'
                        : isCurrent
                        ? 'bg-slate-900 text-white ring-2 ring-teal-500/40'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {isDone ? <Check className="w-3.5 h-3.5" /> : s.num}
                  </div>
                  <span
                    className={`hidden sm:inline font-medium ${
                      isCurrent ? 'text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 font-display">
                  Select Diagnostic Service
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Choose the primary imaging examination prescribed by your physician.
                </p>
              </div>

              <div className="space-y-2.5">
                {SERVICES_DATA.map((srv) => {
                  const isSelected = selectedService === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                        isSelected
                          ? 'border-teal-600 bg-teal-50/50 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-teal-600 bg-teal-600 text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-900">
                            {srv.title}
                          </span>
                          <span className="text-xs text-teal-800 font-medium">
                            {srv.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                          {srv.shortDesc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Verified Lady Doctor Reassurance */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  All scans are conducted exclusively for women by a trained, qualified and experienced Lady Doctor.
                </span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextFromStep1}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
                >
                  <span>Continue to Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 font-display">
                  Select Preferred Date & Slot
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Appointments are structured with generous intervals to guarantee absolute patient privacy.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
                {errors.date && (
                  <p className="text-xs text-rose-600 mt-1">{errors.date}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  Preferred Consultation Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((ts) => {
                    const isSelected = preferredTimeSlot === ts.id;
                    return (
                      <button
                        key={ts.id}
                        type="button"
                        onClick={() => setPreferredTimeSlot(ts.id)}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? 'border-teal-600 bg-teal-50/60 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-xs font-semibold text-slate-900">
                          {ts.label}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {ts.window}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 bg-teal-50/60 rounded-lg border border-teal-200/60 flex items-start gap-2.5 text-xs text-teal-900">
                <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span>
                  Our reception will contact you to confirm the exact time and any scan-specific preparation (e.g. fasting or hydration).
                </span>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextFromStep2}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
                >
                  <span>Continue to Patient Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900 font-display">
                  Patient Information
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Enter details to register your appointment request.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Patient Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Priyadarshini S."
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:border-teal-600 focus:ring-1 focus:ring-teal-600`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-rose-600 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="e.g. 98401 23456"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:border-teal-600 focus:ring-1 focus:ring-teal-600`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address <span className="text-slate-400">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="patient@example.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Referring Doctor / Clinic <span className="text-slate-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Doctor or Clinic Name"
                    value={referralDoctor}
                    onChange={(e) => setReferralDoctor(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Clinical Notes or Scan Requisition <span className="text-slate-400">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention if you have any questions or specific timing preferences..."
                  value={clinicalNotes}
                  onChange={(e) => setClinicalNotes(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                />
              </div>

              {/* Required Transparency Notice */}
              <div className="text-[11px] text-slate-500 leading-normal bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-700">Notice:</span> Appointment availability will be confirmed by HJR Scans. Please retain your prescription and follow any preparation guidelines provided during confirmation.
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-50"
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
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto ring-8 ring-teal-50/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Appointment Request Received
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-slate-800">{patientName || 'Patient'}</span>. Our reception team at HJR Scans has received your request.
                </p>
              </div>

              {/* Summary card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
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

              {/* Important confirmation statement */}
              <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs text-amber-900 max-w-md mx-auto text-left">
                <span className="font-semibold">Confirmation Protocol:</span> Appointment availability will be confirmed by HJR Scans via telephone or WhatsApp. Please ensure your phone is reachable.
              </div>

              {/* Alternative: WhatsApp option */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/914445525205?text=Hi%20HJR%20Scans%2C%20I%20have%20submitted%20an%20appointment%20request%20for%20${encodeURIComponent(currentServiceObj.title)}%20under%20the%20name%20${encodeURIComponent(patientName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Prefer WhatsApp? Message Us</span>
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

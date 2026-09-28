import React, { useState } from 'react';
import { useApp } from '@/src/context/AppContext';
import { Breadcrumbs } from '@/src/components/Breadcrumbs';
import { BUSINESS_INFO, CLINICAL_IMAGES } from '@/src/data/businessData';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  ExternalLink, 
  Mail, 
  User, 
  CheckCircle2, 
  Clock, 
  Send,
  ShieldCheck
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast } = useApp();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name';
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!message.trim()) errs.message = 'Please provide an enquiry message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Enquiry received! HJR Scans reception will respond shortly.', 'success');
    }, 600);
  };

  return (
    <div className="pb-24 space-y-12">
      <Breadcrumbs items={[{ label: 'Contact HJR Scans' }]} />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">
            Adyar Clinical Reception
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
            Contact HJR Scans
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            We are here to assist with appointments, scan preparation instructions, and directions to our centre in Shastri Nagar, Adyar.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Card + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Polished Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                  Direct Telephone
                </span>
                <div className="text-2xl font-bold text-slate-950 font-display">
                  {BUSINESS_INFO.phone}
                </div>
                <p className="text-xs text-slate-500">
                  Reception available for appointment bookings and enquiries.
                </p>
              </div>

              <div className="space-y-2 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>Centre Location</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {BUSINESS_INFO.address.line1}<br />
                  {BUSINESS_INFO.address.line2}<br />
                  {BUSINESS_INFO.address.line3}<br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                </p>
              </div>

              <div className="space-y-2 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-teal-700" />
                  <span>Clinical Hours</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monday to Saturday: Morning & Evening Consultation Windows.<br />
                  <span className="text-[11px] text-slate-500 italic">
                    Please call prior to visiting to confirm scan schedule.
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Call 044 4552 5205</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 rounded-xl text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-teal-700" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl text-xs font-medium transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Clinical Note */}
            <div className="p-4 bg-slate-900 text-white rounded-2xl text-xs space-y-1.5 border-l-4 border-teal-400">
              <div className="flex items-center gap-1.5 font-bold text-teal-300">
                <ShieldCheck className="w-4 h-4" />
                <span>Female-Only Scanning Policy</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Scanning only for women by a trained, qualified and experienced Lady Doctor.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto ring-8 ring-teal-50/50">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    Message Sent Successfully
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to HJR Scans. Our reception staff in Adyar will review your message and connect with you shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="px-6 py-2.5 bg-slate-950 text-white rounded-xl text-xs font-semibold hover:bg-slate-850"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-950 font-display">
                      Send an Enquiry
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Have a query regarding test preparation, scheduling, or reports? Drop us a line.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
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
                          placeholder="Contact Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={`w-full pl-10 pr-3.5 py-2.5 text-xs rounded-xl border ${
                            errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                          } focus:border-teal-600 focus:ring-1 focus:ring-teal-600`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Enquiry or Question *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please mention scan details, referral doctor's recommendation, or preferred dates..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full p-3 text-xs rounded-xl border ${
                        errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:border-teal-600 focus:ring-1 focus:ring-teal-600`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Notice:</span> Medical advice is not dispensed through online forms. For immediate appointments, please call 044 4552 5205.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-slate-950 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-teal-300" />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

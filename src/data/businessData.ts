/**
 * HJR Scans - Verified Business Data & Clinical Directory
 * Strict compliance: No fabricated doctors, credentials, stats, or unconfirmed claims.
 */

import heroSuiteImg from '@/src/assets/images/hero_diagnostic_suite_1790605904372.jpg';
import womensClinicImg from '@/src/assets/images/womens_health_clinic_1790605919733.jpg';
import ultrasoundTechImg from '@/src/assets/images/ultrasound_scanner_tech_1790605937006.jpg';
import adyarLoungeImg from '@/src/assets/images/adyar_centre_lounge_1790605951611.jpg';

export const BUSINESS_INFO = {
  name: 'HJR SCANS',
  legalName: 'HJR Scans',
  descriptor: "Premium Diagnostic & Women's Imaging Centre",
  locationName: 'Adyar, Chennai',
  tagline: "Scanning only for women by a trained, qualified and experienced Lady Doctor",
  
  phone: '044 4552 5205',
  phoneFormatted: '044 4552 5205',
  phoneTel: 'tel:04445525205',
  
  address: {
    line1: '2nd Avenue, A2, Ground Floor',
    line2: 'Chandra Flats, Mahatma Gandhi Road',
    line3: 'Shastri Nagar, Adyar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600020',
    full: '2nd Avenue, A2, Ground Floor, Chandra Flats, Mahatma Gandhi Road, Shastri Nagar, Adyar, Chennai, Tamil Nadu 600020',
  },
  
  whatsappNumber: '914445525205',
  whatsappUrl: 'https://wa.me/914445525205?text=Hi%20HJR%20Scans%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chandra+Flats+2nd+Avenue+Shastri+Nagar+Adyar+Chennai+600020',
  
  hours: 'Monday to Saturday: Morning & Evening Consultation Hours (Please call to confirm exact appointment timing)',
  
  disclaimer: 'HJR Scans provides dedicated diagnostic ultrasound scanning only for women conducted by a trained, qualified and experienced Lady Doctor. Appointment availability and specific scan preparation guidelines are confirmed prior to your visit.'
};

export const CLINICAL_IMAGES = {
  hero: heroSuiteImg,
  womensClinic: womensClinicImg,
  ultrasoundTech: ultrasoundTechImg,
  adyarLounge: adyarLoungeImg,
};

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Ultrasound' | "Women's Health" | 'Diagnostic' | 'Obstetric';
  shortDesc: string;
  fullDesc: string;
  whenReferred: string[];
  whatToExpect: string[];
  preparationNote: string;
  availabilityNote: string;
  image: string;
  tags: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ultrasound',
    slug: 'ultrasound',
    title: 'Ultrasound Scanning',
    category: 'Ultrasound',
    shortDesc: 'High-resolution diagnostic ultrasound imaging for abdominal, pelvic, and general clinical indications.',
    fullDesc: 'Comprehensive ultrasound diagnostic examinations utilizing precision transducers to provide clear cross-sectional anatomical visualization. Conducted with clinical rigor in a private and tranquil setting.',
    whenReferred: [
      'Evaluation of persistent abdominal or pelvic discomfort',
      'Routine health assessments recommended by treating physicians',
      'Follow-up monitoring of specific internal structures',
      'Clinical investigation for hepatobiliary, renal, or digestive organs'
    ],
    whatToExpect: [
      'Non-invasive, radiation-free diagnostic soundwave procedure',
      'Warm acoustic gel applied for clear signal transmission',
      'Attentive evaluation by our experienced Lady Doctor',
      'Average duration of 15 to 30 minutes depending on clinical protocol'
    ],
    preparationNote: 'Preparation requirements (such as fasting or bladder filling) vary based on the specific scan protocol. Please confirm preparation requirements with HJR Scans when booking.',
    availabilityNote: 'Routine and priority appointments available upon enquiry.',
    image: CLINICAL_IMAGES.ultrasoundTech,
    tags: ['Abdominal', 'Pelvic', 'Non-Invasive', 'Radiation-Free']
  },
  {
    id: 'womens-health',
    slug: 'womens-health',
    title: "Women's Health Scanning",
    category: "Women's Health",
    shortDesc: 'Specialized gynecological and pelvic ultrasound designed exclusively for female patients with complete privacy.',
    fullDesc: 'Dedicated ultrasound scanning focused specifically on women’s reproductive and pelvic health. Performed exclusively by a trained, qualified, and experienced Lady Doctor in a private, gentle, and dignified clinical suite.',
    whenReferred: [
      'Investigation of menstrual irregularity or pelvic discomfort',
      'Routine gynecological wellness and uterine evaluation',
      'Ovarian and endometrial assessment',
      'Pre-conception or fertility-related diagnostic evaluation'
    ],
    whatToExpect: [
      '100% private scanning suite designed around female comfort',
      'Gentle clinical approach with clear step-by-step communication',
      'Examination performed by a trained, qualified and experienced Lady Doctor',
      'Respectful and supportive healthcare environment'
    ],
    preparationNote: 'Specific pelvic scans may require a full bladder. Please confirm exact preparation instructions with HJR Scans prior to your visit.',
    availabilityNote: 'Exclusively for women. Prior booking recommended.',
    image: CLINICAL_IMAGES.womensClinic,
    tags: ["Gynecological", "Pelvic", "Privacy-Focused", "Lady Doctor"]
  },
  {
    id: 'pregnancy-scanning',
    slug: 'pregnancy-scanning',
    title: 'Pregnancy-Related Scanning',
    category: 'Obstetric',
    shortDesc: 'Antenatal ultrasound monitoring supporting expectant mothers through essential gestational milestones.',
    fullDesc: 'Careful antenatal ultrasound examinations to monitor fetal wellbeing, amniotic parameters, and developmental markers throughout pregnancy in a peaceful, mother-first setting.',
    whenReferred: [
      'Confirmation of early pregnancy and gestational sac localization',
      'Routine trimester developmental milestones and fetal cardiac activity',
      'Placental localization and amniotic fluid volume evaluation',
      'Obstetric monitoring as prescribed by your obstetrician'
    ],
    whatToExpect: [
      'Calm examination suite allowing the expectant mother to rest comfortably',
      'Clear monitor visualization during the scan',
      'Attentive bedside care and gentle acoustic probe handling',
      'Formal imaging report provided for your attending obstetrician'
    ],
    preparationNote: 'Drinking water prior to early pregnancy scans may be required. Please confirm preparation requirements with HJR Scans.',
    availabilityNote: 'Service availability subject to confirmation & obstetric referral.',
    image: CLINICAL_IMAGES.hero,
    tags: ['Antenatal', 'Trimester Care', 'Fetal Wellbeing', 'Obstetric']
  },
  {
    id: 'diagnostic-imaging',
    slug: 'diagnostic-imaging',
    title: 'Diagnostic Imaging & Soft Tissue',
    category: 'Diagnostic',
    shortDesc: 'Precision soft tissue, small parts, and targeted diagnostic ultrasound examinations.',
    fullDesc: 'Focused ultrasound imaging protocols evaluating superficial structures, neck/thyroid, and soft tissue indications with high-frequency soundwave technology.',
    whenReferred: [
      'Evaluation of palpable lumps or superficial soft-tissue swelling',
      'Thyroid and neck gland architectural assessment',
      'Investigation of localized tenderness or post-traumatic swelling',
      'Clinical verification of vascular and superficial tissue integrity'
    ],
    whatToExpect: [
      'Targeted high-frequency probe application over specific regions',
      'Zero discomfort with high-definition real-time visualization',
      'Continuous guidance and comfort assurance during the scan'
    ],
    preparationNote: 'Usually requires no fasting, but please contact HJR Scans to confirm specific requirements for your test.',
    availabilityNote: 'Service availability subject to confirmation.',
    image: CLINICAL_IMAGES.adyarLounge,
    tags: ['Soft Tissue', 'Thyroid', 'Diagnostic', 'High Precision']
  }
];

export interface FAQItem {
  id: string;
  category: 'Appointments' | 'Services' | 'Preparation' | 'Location' | 'General';
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Appointments',
    question: 'How can I book an appointment?',
    answer: 'You can request an appointment through our online booking form, call our reception directly at 044 4552 5205, or message us on WhatsApp. Our staff will confirm available time slots and provide any required preparation guidelines.'
  },
  {
    id: 'faq-2',
    category: 'Location',
    question: 'Where is HJR Scans located?',
    answer: 'HJR Scans is located at 2nd Avenue, A2, Ground Floor, Chandra Flats, Mahatma Gandhi Road, Shastri Nagar, Adyar, Chennai, Tamil Nadu 600020. Convenient ground floor access makes it step-free and comfortable for all patients.'
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'How can I contact HJR Scans?',
    answer: 'You can call our reception at 044 4552 5205, send us an enquiry on WhatsApp, or visit our centre directly in Shastri Nagar, Adyar. Our team is available to assist you with appointment scheduling and scan information.'
  },
  {
    id: 'faq-4',
    category: 'Preparation',
    question: 'What should I bring for my visit?',
    answer: 'Please bring your doctor’s referral prescription or scan requisition letter, any previous ultrasound reports or relevant medical records, and a valid photo identification card.'
  },
  {
    id: 'faq-5',
    category: 'Preparation',
    question: 'Do I need preparation before a scan?',
    answer: 'Preparation requirements may vary depending on the scan. Please contact HJR Scans for accurate instructions based on your appointment (such as fasting or hydration requirements).'
  },
  {
    id: 'faq-6',
    category: 'Services',
    question: 'How can I confirm scan availability?',
    answer: 'To ensure privacy and dedicated unhurried consultations, appointments are scheduled with comfortable intervals. Please call 044 4552 5205 or message our team on WhatsApp to confirm slot availability.'
  },
  {
    id: 'faq-7',
    category: 'Services',
    question: 'Who performs the scans at HJR Scans?',
    answer: 'Scanning is conducted only for women by a trained, qualified and experienced Lady Doctor in a private, gentle, and respectful clinical setting.'
  },
  {
    id: 'faq-8',
    category: 'General',
    question: 'When will I receive my scan report?',
    answer: 'Diagnostic reports along with imaging films are prepared promptly following examination. Exact turnaround time will be communicated by our reception during your appointment.'
  }
];

export interface GoogleReviewItem {
  id: string;
  name: string;
  rating: number;
  quote: string;
  relativeTime: string;
}

export const GENUINE_GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Ramiya Rangaraj',
    rating: 5,
    quote: 'Staff were very kind and helpful too.',
    relativeTime: 'Google Review'
  },
  {
    id: 'rev-2',
    name: 'Edwin Reagan',
    rating: 5,
    quote: 'Very good doctor, she has taken good care of my wife.',
    relativeTime: 'Google Review'
  }
];

export const PATIENT_JOURNEY_STAGES = [
  {
    stage: '01',
    title: 'Before Your Visit',
    subtitle: 'Scheduling & Preparation',
    points: [
      'Contact HJR Scans via phone (044 4552 5205) or WhatsApp to request your preferred slot.',
      'Clarify any scan-specific preparation requirements (fasting, water intake, or medication guidelines).',
      'Organize your doctor’s prescription and any prior imaging records in advance.',
      'Plan to arrive 10–15 minutes ahead of your scheduled time for seamless registration.'
    ]
  },
  {
    stage: '02',
    title: 'During Your Visit',
    subtitle: 'Comfort & Clinical Procedure',
    points: [
      'Check in at our quiet ground-floor reception in Chandra Flats, Shastri Nagar, Adyar.',
      'Enter our private, dedicated scanning suite designed specifically for female comfort.',
      'Your scan is personally conducted by a trained, qualified, and experienced Lady Doctor.',
      'The physician explains the process clearly, ensuring you are relaxed and informed throughout.'
    ]
  },
  {
    stage: '03',
    title: 'After Your Visit',
    subtitle: 'Reports & Next Steps',
    points: [
      'Relax in our comfortable waiting lounge while your imaging documentation is compiled.',
      'Receive your structured diagnostic report to share with your referring physician.',
      'Our team is happy to answer administrative queries regarding your report copies.',
      'Electronic or physical collection details confirmed at reception.'
    ]
  }
];

export const HEALTH_RESOURCES_DATA = [
  {
    id: 'understanding-ultrasound',
    title: 'Understanding Ultrasound: Soundwave Technology in Modern Medicine',
    category: "Diagnostic Scanning",
    readTime: '4 min read',
    excerpt: 'How acoustic soundwaves generate real-time anatomical images without ionizing radiation, making ultrasound one of the safest medical diagnostics.',
    sections: [
      'Principles of acoustic impedance and transducer technology',
      'Why ultrasound carries zero radiation exposure',
      'The role of coupling gel in image clarity'
    ]
  },
  {
    id: 'pelvic-imaging-guide',
    title: 'A Patient Guide to Pelvic & Women’s Health Imaging',
    category: "Women's Health",
    readTime: '5 min read',
    excerpt: 'An overview of routine pelvic ultrasound examinations, what anatomical structures are assessed, and why privacy and clinical gentleness matter.',
    sections: [
      'Overview of uterine and ovarian diagnostic evaluation',
      'Common clinical indications for pelvic scanning',
      'The importance of dedicated female-focused healthcare spaces'
    ]
  },
  {
    id: 'preparing-for-scans',
    title: 'Preparing for Diagnostic Scans: What Patients Should Know',
    category: 'Patient Preparation',
    readTime: '3 min read',
    excerpt: 'Practical advice on fasting protocols, bladder preparation, and bringing appropriate clinical documentation for smooth visits.',
    sections: [
      'Why certain scans require fasting versus hydration',
      'Essential documents: prescriptions, ID, and previous reports',
      'Comfortable clothing recommendations for diagnostic appointments'
    ]
  },
  {
    id: 'antenatal-ultrasound-overview',
    title: 'Antenatal Ultrasound Overview: Supporting Maternal Wellbeing',
    category: 'Obstetric Care',
    readTime: '5 min read',
    excerpt: 'Educational insights into routine gestational scans recommended by obstetricians to track developmental progress safely.',
    sections: [
      'Key developmental monitoring across gestational stages',
      'Ensuring a calm, stress-free clinical environment for expectant mothers',
      'Collaborative reporting between sonologists and obstetricians'
    ]
  }
];

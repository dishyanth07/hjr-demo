/**
 * HJR SCANS - Premium Diagnostic & Women's Imaging Centre
 * Adyar, Chennai
 */

import React from 'react';
import { AppProvider, useApp } from '@/src/context/AppContext';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { AppointmentModal } from '@/src/components/AppointmentModal';
import { FloatingActions } from '@/src/components/FloatingActions';
import { ToastContainer } from '@/src/components/ToastContainer';

// Pages
import { HomePage } from '@/src/pages/HomePage';
import { AboutPage } from '@/src/pages/AboutPage';
import { ServicesPage } from '@/src/pages/ServicesPage';
import { UltrasoundDetailPage } from '@/src/pages/UltrasoundDetailPage';
import { WomensHealthPage } from '@/src/pages/WomensHealthPage';
import { AppointmentsPage } from '@/src/pages/AppointmentsPage';
import { PatientGuidePage } from '@/src/pages/PatientGuidePage';
import { PreparationPage } from '@/src/pages/PreparationPage';
import { WhyHjrPage } from '@/src/pages/WhyHjrPage';
import { ContactPage } from '@/src/pages/ContactPage';
import { FaqPage } from '@/src/pages/FaqPage';
import { HealthResourcesPage } from '@/src/pages/HealthResourcesPage';
import { PrivacyPolicyPage } from '@/src/pages/PrivacyPolicyPage';
import { TermsPage } from '@/src/pages/TermsPage';

const AppContent: React.FC = () => {
  const { currentPath } = useApp();

  const renderCurrentPage = () => {
    // Exact or prefix matching
    const cleanPath = currentPath.split('?')[0].replace(/\/+$/, '') || '/';

    switch (cleanPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/services/ultrasound':
        return <UltrasoundDetailPage />;
      case '/services/womens-health':
      case '/womens-health':
        return <WomensHealthPage />;
      case '/appointments':
        return <AppointmentsPage />;
      case '/patient-guide':
        return <PatientGuidePage />;
      case '/preparation':
        return <PreparationPage />;
      case '/why-hjr':
        return <WhyHjrPage />;
      case '/contact':
        return <ContactPage />;
      case '/faq':
        return <FaqPage />;
      case '/resources':
        return <HealthResourcesPage />;
      case '/privacy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      default:
        // Handle sub-service routes gracefully
        if (cleanPath.startsWith('/services/')) {
          return <ServicesPage />;
        }
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Primary Top Bar Contract */}
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Enterprise Global Footer */}
      <Footer />

      {/* Global Interactive Overlays */}
      <AppointmentModal />
      <FloatingActions />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

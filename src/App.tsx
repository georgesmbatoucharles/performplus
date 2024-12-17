import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { PageTransition } from './components/common/PageTransition';
import { HomePage } from './pages/HomePage';
import { ServicesSection } from './components/services/ServicesSection';
import { AboutSection } from './components/about/AboutSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { AppointmentForm } from './components/contact/AppointmentForm';
import { BusinessPlan } from './pages/services/BusinessPlan';
import { ManagementDiagnostic } from './pages/services/ManagementDiagnostic';
import { FinancialServices } from './pages/services/FinancialServices';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <ServicesSection />
                </PageTransition>
              }
            />
            <Route
              path="/services/business-plan"
              element={
                <PageTransition>
                  <BusinessPlan />
                </PageTransition>
              }
            />
            <Route
              path="/services/management-diagnostic"
              element={
                <PageTransition>
                  <ManagementDiagnostic />
                </PageTransition>
              }
            />
            <Route
              path="/services/financial-services"
              element={
                <PageTransition>
                  <FinancialServices />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutSection />
                </PageTransition>
              }
            />
            <Route
              path="/testimonials"
              element={
                <PageTransition>
                  <TestimonialsSection />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <AppointmentForm />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
};
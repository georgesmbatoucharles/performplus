import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { Hero } from '../components/home/HeroSection/Hero';
import { ServicesSection } from '../components/services/ServicesSection';
import { AboutSection } from '../components/about/AboutSection';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection';
import { AppointmentForm } from '../components/contact/AppointmentForm';

export const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <AppointmentForm />
      </div>
    </PageTransition>
  );
};
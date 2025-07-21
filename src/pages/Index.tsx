import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';
import FeedbackSection from '@/components/FeedbackSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ContactSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Index;
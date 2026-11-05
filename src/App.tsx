import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomizerModal } from './components/CustomizerModal';
import { SITE_METADATA } from './data/content';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState('Skool Community Setup');
  
  // Customization state for Patricia
  const [customPhoto, setCustomPhoto] = useState(SITE_METADATA.profilePhoto);
  const [businessEmail, setBusinessEmail] = useState(SITE_METADATA.email);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Intersection observer to track active section for navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    scrollToContact();
  };

  const handleResetDefaults = () => {
    setCustomPhoto(SITE_METADATA.profilePhoto);
    setBusinessEmail(SITE_METADATA.email);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans selection:bg-[#D4AF37]/25 selection:text-[#0A192F]">
      {/* Top Navigation */}
      <Navbar
        onOpenCustomize={() => setIsCustomizerOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onWorkWithMe={scrollToContact}
          onExploreServices={scrollToServices}
        />

        {/* 2. About Me Section */}
        <About
          customPhotoUrl={customPhoto}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
          onWorkWithMe={scrollToContact}
        />

        {/* 3. Services Section */}
        <Services
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
          onWorkWithMe={scrollToContact}
        />

        {/* 4. Why Choose Me Section */}
        <WhyChooseMe />

        {/* 5. Portfolio Section */}
        <Portfolio
          onInquireAboutProject={handleSelectServiceForInquiry}
          onWorkWithMe={scrollToContact}
        />

        {/* 6. My Working Process Section */}
        <Process
          onWorkWithMe={scrollToContact}
        />

        {/* 7. Call To Action Section */}
        <CtaSection
          onWorkWithMe={scrollToContact}
        />

        {/* 8. Contact Section */}
        <Contact
          selectedService={selectedServiceForInquiry}
          onSelectService={setSelectedServiceForInquiry}
          businessEmail={businessEmail}
        />
      </main>

      {/* Footer */}
      <Footer
        businessEmail={businessEmail}
      />

      {/* Personalizer Modal for Patricia */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        currentPhoto={customPhoto}
        onUpdatePhoto={setCustomPhoto}
        currentEmail={businessEmail}
        onUpdateEmail={setBusinessEmail}
        onResetToDefault={handleResetDefaults}
      />
    </div>
  );
}

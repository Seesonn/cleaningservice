import React, { useState, useEffect } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import WhyUs from './whyUs';
import Gallery from './gallery';
import BookingForm from './BookingFrom';
import FloatingButton from './FloatingButton';
import Footer from './Footer';



const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatingButton(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isFormOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFormOpen, isMobileMenuOpen]);

  const handleBookNow = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
      />
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
      />
      <Hero handleBookNow={handleBookNow} />
      <About />
      <Services/>
      
      <WhyUs />
      <Gallery />

      <BookingForm isOpen={isFormOpen} onClose={handleCloseForm} />
      <FloatingButton show={showFloatingButton} onClick={handleBookNow} />
      <Footer/>
    </div>
  );
}

export default App;


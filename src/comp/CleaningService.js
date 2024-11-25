import React, { useState, useEffect } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import MainContent from './MainContent';
import BookingForm from './BookingForm';

const CleaningService = () => {
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

  const handlePhoneClick = () => {
    window.location.href = 'tel:+971502331784';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+971502331784', '_blank');
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
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
        handlePhoneClick={handlePhoneClick}
        handleWhatsAppClick={handleWhatsAppClick}
        scrollToSection={scrollToSection}
      />
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToSection={scrollToSection}
      />
      <MainContent handleBookNow={handleBookNow} />
      <BookingForm isOpen={isFormOpen} onClose={handleCloseForm} />
      {showFloatingButton && (
        <button
          onClick={handleBookNow}
          className="fixed bottom-4 right-4 px-4 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-500 transition-colors z-50"
        >
          Book Now
        </button>
      )}
    </div>
  );
}

export default CleaningService;


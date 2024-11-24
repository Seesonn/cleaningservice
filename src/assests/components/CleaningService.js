/*import React, { useState, useEffect } from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { CloseIcon } from './icons/CloseIcon';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { ImageSlider } from './ImageSlider';

const CleaningService = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const time = formData.get('time');
    const message = formData.get('message');
    const whatsappMessage = `Name: ${name}, Date: ${date}, Time: ${time}, Message: ${message}`;
    window.open(`https://wa.me/+971566156317?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setIsFormOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+971502331784';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+971566156317', '_blank');
  };

  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <span className="font-bold text-lg">Try It</span>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handlePhoneClick}>
              <PhoneIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm sm:text-base">+971 502 331 784</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleWhatsAppClick}>
              <WhatsappIcon className="w-5 h-5" />
              <span className="text-sm sm:text-base">+971 566 156 317</span>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">About us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Services</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Why us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Gallery</a>
        </nav>
        <button className="md:hidden text-gray-700 absolute top-4 right-4" onClick={toggleMobileMenu}>
          <HamburgerIcon className="w-6 h-6" />
        </button>
      </header>

      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu}>
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">About us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Services</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Why us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Gallery</a>
        </nav>
      </div>

      <main id="home" className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <ImageSlider />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex flex-col items-center text-center">
          <p className="text-lg sm:text-xl font-semibold text-gray-700 leading-relaxed mb-6">
            Our company specializes in providing top-notch cleaning and a variety of other professional services tailored to meet the unique needs of our clients. We are committed to delivering quality, reliability, and customer satisfaction in every service we offer.
          </p>
          <div className="mt-6 px-4 sm:px-6 py-3 bg-green-600 rounded-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Excellence in Every<br />Service, Every Time
            </h1>
          </div>
          <button
            onClick={handleBookNow}
            className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition-colors"
          >
            BOOK NOW
          </button>
        </div>
      </main>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-xs mx-auto z-10 sm:max-w-sm">
            <div className="flex justify-between items-center p-2 sm:p-4 border-b">
              <h3 className="text-sm sm:text-lg font-medium">Book Now</h3>
              <button onClick={handleCloseForm} className="text-gray-400 hover:text-gray-500">
                <CloseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-2 sm:p-4 space-y-2 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-2xs sm:text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-2xs sm:text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-2xs sm:text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-2xs sm:text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 sm:px-4 py-1 sm:py-2 bg-green-600 text-2xs sm:text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CleaningService;

*/
/*
import React, { useState, useEffect } from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { CloseIcon } from './icons/CloseIcon';
import { HamburgerIcon } from './icons/HamburgerIcon';
import { ImageSlider } from './ImageSlider';
import logo from '../assets/clogo.png'
const CleaningService = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const address = formData.get('address');
    const message = formData.get('message');
    const whatsappMessage = `Name: ${name}, Phone: ${phone}, Address: ${address}, Message: ${message}`;
    window.open(`https://wa.me/+971502331784?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
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

  const scrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-auto">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <img src={logo} alt="Try It Logo" className="w-12 h-12 object-contain" />
            <span className="font-bold text-sm">ALNAJOOM ALSHAMS FACILITIES</span>
            <span>  </span>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handlePhoneClick}>
              <PhoneIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm sm:text-base">+971 502 331 784</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleWhatsAppClick}>
              <WhatsappIcon className="w-5 h-5 text-green-500" />
              <span className="text-sm sm:text-base">+971 566 156 317</span>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">About us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Services</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Why us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200">Gallery</a>
        </nav>
        <button className="md:hidden text-gray-700 absolute top-4 right-4 z-20" onClick={toggleMobileMenu}>
          <HamburgerIcon className="w-6 h-6" />
        </button>
      </header>

      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu}>
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">About us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Services</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Why us</a>
          <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg">Gallery</a>
        </nav>
      </div>

      <main id="home" className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <ImageSlider />
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex flex-col items-center text-center">

        <div className="mt-6 px-4 sm:px-6 py-3 bg-green-600 rounded-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
                Take a Cleaning Break <br />with Alnajoom Alshams
            </h1>
          </div>
          <p className="text-lg sm:text-xl font-semibold text-gray-700 leading-relaxed mb-6 mt-6">
            Our company specializes in providing top-notch cleaning and a variety of other professional services tailored to meet the unique needs of our clients. We are committed to delivering quality, reliability, and customer satisfaction in every service we offer.
          </p>
          <div className="mt-6 px-4 sm:px-6 py-3 bg-green-600 rounded-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Excellence in Every<br />Service, Every Time
            </h1>
          </div>
          <button
            onClick={handleBookNow}
            className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition-colors"
          >
            BOOK NOW
          </button>
        </div>
      </main>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-xs mx-auto z-10 sm:max-w-sm">
            <div className="flex justify-between items-center p-2 sm:p-4 border-b">
              <h3 className="text-sm sm:text-lg font-medium">Book Now</h3>
              <button onClick={handleCloseForm} className="text-gray-400 hover:text-gray-500">
                <CloseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-2 sm:p-4 space-y-2 sm:space-y-4">
              <div>
                <label htmlFor="name" className="block text-2xs sm:text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1
block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-2xs sm:text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-2xs sm:text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-2xs sm:text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 sm:px-4 py-1 sm:py-2 bg-green-600 text-2xs sm:text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CleaningService;


*/

import React, { useState, useEffect } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Hero from './Hero';
import BookingForm from './BookingForm';

const CleaningService = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const address = formData.get('address');
    const message = formData.get('message');
    const whatsappMessage = `
*New Booking Request*
------------------
*Name:* ${name}
*Phone:* ${phone}
*Address:* ${address}
*Message:* ${message}
------------------
`;
    window.open(`https://wa.me/+971502331784?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
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

  const scrollToHome = (e) => {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        handlePhoneClick={handlePhoneClick}
        handleWhatsAppClick={handleWhatsAppClick}
        toggleMobileMenu={toggleMobileMenu}
        scrollToHome={scrollToHome}
      />
      <MobileMenu 
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToHome={scrollToHome}
      />
      <Hero handleBookNow={handleBookNow} />
      <BookingForm 
        isFormOpen={isFormOpen}
        handleCloseForm={handleCloseForm}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default CleaningService;


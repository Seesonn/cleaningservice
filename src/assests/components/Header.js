import React from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { HamburgerIcon } from './icons/HamburgerIcon';
import logo from '../assets/clogo.png';

const Header = ({ handlePhoneClick, handleWhatsAppClick, toggleMobileMenu, scrollToHome }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-auto">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <img src={logo} alt="Try It Logo" className="w-12 h-12 object-contain" />
          <span className="font-bold text-sm">ALNAJOOM ALSHAMS SERVICES</span>
          <span> </span>
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
        <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200">About us</a>
        <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200">Services</a>
        <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200">Why us</a>
        <a href="#" onClick={scrollToHome} className="text-gray-700 hover:text-green-600 transition-colors duration-200">Gallery</a>
      </nav>
      <button className="md:hidden text-gray-700 absolute top-4 right-4 z-20" onClick={toggleMobileMenu}>
        <HamburgerIcon className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;


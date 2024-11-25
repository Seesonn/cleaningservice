



import React from 'react';
import Navigation from './Navigation';
import ContactInfo from './ContactInfo';
import { HamburgerIcon } from './icons/HamburgerIcon';
import logo from '../assets/clogo.png';

const Header = ({ toggleMobileMenu, scrollToSection }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-auto">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <img src={logo} alt="Try It Logo" className="w-12 h-12 object-contain" />
          <span className="font-bold text-sm">ALNAJOOM ALSHAMS FACILITIES</span>
          <span> </span>
        </div>
         
        <ContactInfo />
      </div>
      <Navigation scrollToSection={scrollToSection} />
      <button className="md:hidden text-gray-700 absolute top-4 right-4 z-20" onClick={toggleMobileMenu}>
        <HamburgerIcon className="w-6 h-6" />
      </button>
    </header>
  );
};

export default Header;


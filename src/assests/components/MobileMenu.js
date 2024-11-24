import React from 'react';
import { CloseIcon } from './icons/CloseIcon';

const MobileMenu = ({ isMobileMenuOpen, toggleMobileMenu, scrollToHome }) => {
  return (
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
  );
};

export default MobileMenu;


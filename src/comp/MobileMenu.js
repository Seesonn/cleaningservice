import React from 'react';
import { CloseIcon } from './icons/CloseIcon';

const MobileMenu = ({ isOpen, toggleMobileMenu, scrollToSection }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleMobileMenu}>
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-4">
        {['home', 'about', 'services', 'whyus', 'gallery'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(section);
              toggleMobileMenu();
            }}
            className="text-gray-700 hover:text-green-600 transition-colors duration-200 text-lg"
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;


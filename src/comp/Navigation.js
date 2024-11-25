import React from 'react';

const Navigation = ({ scrollToSection }) => {
  return (
    <nav className="hidden md:flex space-x-6">
      {['home', 'about', 'services', 'whyus', 'gallery'].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(section);
          }}
          className="text-gray-700 hover:text-green-600 transition-colors duration-200"
        >
          {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;


import React from 'react';
import { PhoneIcon } from './icons/PhoneIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';

const ContactInfo = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+971502331784';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+971502331784', '_blank');
  };

  return (
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
  );
};

export default ContactInfo;


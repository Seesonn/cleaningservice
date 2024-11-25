import React, { useState } from 'react';

import g1 from '../assets/tara.jpg';
import g2 from '../assets/babu.png';
import g3 from '../assets/sandessh.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/saroj.jpg';
import cert from '../assets/cert.jpg';
import { CloseIcon } from './icons/CloseIcon';
import { PhoneIcon } from './icons/PhoneIcon';

const About = () => {
  const [modalImage, setModalImage] = useState(null);

  const team = [
    {
      name: "TARA RUMBA",
      position: "Owner",
      phone: "054 439 1425",
      image: g1,
      isOwner: true
    },
    {
      name: "Babu Ram Tamang",
      position: "Director",
      phone: "+971 566 156 317",
      image: g2
    },
    {
      name: "Sandesh Pokharel",
      position: "Managing Director",
      phone: "+971 502 331 784",
      image: g3
    },
    {
      name: "Raju Ghimire",
      position: "Marketing",
      phone: "+971 568 934 047",
      image: g4
    },
    {
      name: "Saroj Rumba",
      position: "Marketing",
      phone: "+971 568 156 402",
      image: g5
    }
  ];

  const showModal = (member) => {
    if (member.isOwner) {
      setModalImage(cert);
    }
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section id="about" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">About Us</h2>
      
      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
        {team.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#1b5e20] mb-2 overflow-hidden">
              <img
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              onClick={() => showModal(member)}
              className={`text-sm font-semibold mb-1 ${member.isOwner ? 'hover:text-green-700 cursor-pointer' : 'cursor-default'}`}
            >
              {member.name}
            </button>
            <p className="text-xs text-green-600 font-semibold mb-1">{member.position}</p>
            <div className="flex items-center text-xs text-gray-600">
              <PhoneIcon className="w-5 h-5 text-green-500 mr-1" />
              <span>{member.phone}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center text-lg leading-relaxed text-gray-600 mb-8">
        <p className="mb-4">
          Welcome to Ahsajoom Ahshems, your trusted partner in professional cleaning services. We are committed to creating spotless, healthy, and welcoming environments for all.
        </p>
        <p className="mb-4">
          At Ahsajoom Ahshems, we combine experienced professionals, advanced techniques, and eco-friendly products to ensure your spaces shine like the stars. Whether it's a one-time deep clean or regular maintenance, we strive to exceed your expectations with every service.
        </p>
        <p>
          Your satisfaction is our priority, and we're here to make your life easier, cleaner, and brighter. Choose Ahsajoom Ahshems—where excellence meets cleanliness.
        </p>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-auto my-auto" onClick={(e) => e.stopPropagation()}>
            <div className="absolute inset-0">
              <img
                src={modalImage} 
                alt="Certificate" 
                className="w-full h-full object-contain"
              />
            </div>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close"
            >
              <CloseIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;


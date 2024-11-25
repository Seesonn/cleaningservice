// import React from 'react';

// const reasons = [
//   'Experienced Team',
//   'Quality Service',
//   'Customer Satisfaction',
//   'Eco-Friendly Products'
// ];

// const WhyUs = () => {
//   return (
//     <section id="why-us" className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Why Choose Us</h2>
//         <div className="mt-10">
//           <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//             {reasons.map((reason) => (
//               <li key={reason} className="mt-10 md:mt-0">
//                 <div className="flex">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
//                       {/* You can add icons here */}
//                     </div>
//                   </div>
//                   <div className="ml-4">
//                     <h4 className="text-lg leading-6 font-medium text-gray-900">{reason}</h4>
//                     <p className="mt-2 text-base text-gray-500">
//                       We pride ourselves on our {reason.toLowerCase()}, ensuring the best results for our clients.
//                     </p>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUs;

import React, { useState } from 'react';

const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f8f8f8] mb-4 w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center"
      >
        <span className=" text-lg leading-6 font-medium ">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6">
          {isOpen && (
            <p className="text-gray-600">
              {question === "What makes Ainajoom Alshams different from other cleaning companies?" && (
                "We stand out with our commitment to quality, use of eco-friendly products, highly trained staff, and tailored cleaning solutions designed to meet your specific needs."
              )}
              {question === "What types of cleaning services do you offer?" && (
                "We provide a wide range of services, including residential cleaning, office cleaning, deep cleaning, move-in/move-out cleaning, and customized solutions for commercial spaces."
              )}
              {question === "Do you offer one-time or regular cleaning services?" && (
                "We offer both! Whether you need a one-time deep clean or regular maintenance, we can customize a plan that suits your schedule and preferences."
              )}
              {question === "How do you ensure the quality of your services?" && (
                "Our team is trained to follow strict quality control standards, and we regularly seek client feedback to ensure every service exceeds expectations."
              )}
              {question === "Are your cleaners insured and professionally trained?" && (
                "Absolutely. Our team is fully insured, background-checked, and trained to deliver professional and efficient cleaning services."
              )}
              {question === "How do I book your services?" && (
                "Booking is simple! You can contact us through our website, call our customer service team, message us at whatsapp, or email us to schedule a service."
              )}
              {question === "Do I need to be home during the cleaning?" && (
                "It's entirely up to you. We can clean while you're home or away, as long as we have access to the property."
              )}
              {question === "What areas do you serve?" && (
                "We proudly serve in dubai, providing top-quality cleaning services to homes and businesses in the area."
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default function WhyUs() {
  return (
    <div id="whyus"className="w-full max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Why Choose Us</h2>
        <h4 className="text-xl leading-6 font-medium text-gray-900 mb-4">
        We know you might have some questions, well here are the answers...
        </h4>
      
      <div className="space-y-2">
        <FAQItem 
          question="What makes Ainajoom Alshams different from other cleaning companies?"
        />
        <FAQItem 
          question="What types of cleaning services do you offer?"
        />
         <FAQItem 
          question="Do you offer one-time or regular cleaning services?"
        />
        <FAQItem 
          question="How do you ensure the quality of your services?"
        />
        <FAQItem 
          question="Are your cleaners insured and professionally trained?"
        />
        <FAQItem 
          question="How do I book your services?"
        />
        <FAQItem 
          question="Do I need to be home during the cleaning?"
        />
        <FAQItem 
          question="What areas do you serve?"
        />
      </div>
    </div>
  );
}


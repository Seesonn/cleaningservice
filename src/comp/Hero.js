import React from 'react';
import { ImageSlider } from './ImageSlider';

const Hero = ({ handleBookNow }) => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 max-w-7xl mx-auto">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Excellence in Every<br />Service, Every Time
          </h2>
        </div>
        <button
          onClick={handleBookNow}
          className="mt-8 px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition-colors"
        >
          BOOK NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;


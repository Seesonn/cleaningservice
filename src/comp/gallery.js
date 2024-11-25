import { useState } from 'react';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.jpg';
import g6 from '../assets/g6.jpg';
import g7 from '../assets/g7.jpg';
import g8 from '../assets/g8.jpg';
import g9 from '../assets/g9.jpg';
import g10 from '../assets/g10.jpg';
import c5 from "../assets/cc1.png";
import c6 from "../assets/ccl2.png";

export default function Gallery() {
  const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,c5,c6];
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <section id="gallery" className="py-16">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.slice(0, showAll ? images.length : 4).map((image, index) => (
          <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        {!showAll ? (
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-400"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
    </section>
  );
}

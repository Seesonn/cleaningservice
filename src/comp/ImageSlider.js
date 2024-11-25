import React, { useState, useEffect } from 'react';
import c1 from "../assets/cl1.jpg";
import c2 from "../assets/cl2.jpg";
import c3 from "../assets/cl3.jpg";
import c4 from "../assets/cl4.jpg";
import c5 from "../assets/cl5.png";

export const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [c1, c2, c3, c4,c5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-md">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Cleaning Service ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};


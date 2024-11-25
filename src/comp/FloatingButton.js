import React from 'react';

const FloatingButton = ({ show, onClick }) => {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 px-4 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-500 transition-colors z-50"
    >
      Book Now
    </button>
  );
};

export default FloatingButton;


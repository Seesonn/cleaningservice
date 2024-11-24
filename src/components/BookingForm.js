import React from 'react';
import { CloseIcon } from './icons/CloseIcon';

const BookingForm = ({ isFormOpen, handleCloseForm, handleSubmit }) => {
  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-xs mx-auto z-10 sm:max-w-sm">
        <div className="flex justify-between items-center p-2 sm:p-4 border-b">
          <h3 className="text-sm sm:text-lg font-medium">Book Now</h3>
          <button onClick={handleCloseForm} className="text-gray-400 hover:text-gray-500">
            <CloseIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-2 sm:p-4 space-y-2 sm:space-y-4">
          <div>
            <label htmlFor="name" className="block text-2xs sm:text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-2xs sm:text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-2xs sm:text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-2xs sm:text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 sm:py-2 px-2 sm:px-3 text-2xs sm:text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 sm:px-4 py-1 sm:py-2 bg-green-600 text-2xs sm:text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;


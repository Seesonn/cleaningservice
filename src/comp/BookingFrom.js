


import React from 'react';

import { CloseIcon } from './icons/CloseIcon';

const BookingForm = ({ isOpen, onClose }) => {            
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const address = formData.get('address');
    const message = formData.get('message');
    
    const whatsappMessage = `
*New Booking Request*
---------------------
*Name:* ${name}
*Phone:* ${phone}
*Address:* ${address}
*Message:* ${message}
---------------------
    `.trim();

    window.open(`https://wa.me/+971502331784?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-md mx-auto z-10">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">Book Now</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your address"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;


/*
const GOOGLE_MAPS_API_KEY = '2ds ' ; 

const BookingForm = ({ isOpen, onClose }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const autocompleteRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      if (inputRef.current) {
        autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
          fields: ['formatted_address', 'geometry', 'name', 'url'],
          types: ['geocode']
        });

        autocompleteRef.current.addListener('place_changed', () => {
          const place = autocompleteRef.current.getPlace();
          if (place) {
            setSelectedPlace(place);
            inputRef.current.value = place.formatted_address;
          }
        });
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const address = selectedPlace ? selectedPlace.formatted_address : formData.get('address');
    const message = formData.get('message');
    
    const whatsappMessage = `
*New Booking Request*
---------------------
*Name:* ${name}
*Phone:* ${phone}
*Address:* ${address}
*Message:* ${message}
---------------------
    `.trim();

    window.open(`https://wa.me/+971502331784?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    onClose();
  };

  const handleAddressClick = () => {
    if (selectedPlace && selectedPlace.url) {
      window.open(selectedPlace.url, '_blank');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-md mx-auto z-10">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">Book Now</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              ref={inputRef}
              required
              onClick={handleAddressClick}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 cursor-pointer"
              placeholder="Enter your address or click to select on map"
            />
          </div>
          {selectedPlace && (
            <div className="text-sm text-gray-600">
              Selected: {selectedPlace.name || selectedPlace.formatted_address}
            </div>
          )}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Send to WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

*/
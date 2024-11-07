// Home.js
import React, { useState } from 'react';
import Map from '../home/map.jsx';
import BookingForm from './bookingForm.jsx';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleBookNow = () => setShowForm(true);

  const handleFormSubmit = (formData) => {
    console.log('Booking Data:', formData);
    setShowForm(false);
    // Add code here to send `formData` to your backend API
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Book a Ride</h2>
      <Map />
      <div className="mt-4">
        <button
          onClick={handleBookNow}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-500"
        >
          Book Here
        </button>
      </div>
      {showForm && <BookingForm onSubmit={handleFormSubmit} />}
    </div>
  );
};

export default Home;

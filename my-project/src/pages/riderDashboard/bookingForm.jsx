// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
  const [pickupLocation, setPickupLocation] = useState({ longitude: '', latitude: '' });
  const [dropoffLocation, setDropoffLocation] = useState({ longitude: '', latitude: '' });
  const [distance, setDistance] = useState('');
  const [status, setStatus] = useState('requested');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      pickupLocation: {
        type: 'Point',
        coordinates: [parseFloat(pickupLocation.longitude), parseFloat(pickupLocation.latitude)]
      },
      dropoffLocation: {
        type: 'Point',
        coordinates: [parseFloat(dropoffLocation.longitude), parseFloat(dropoffLocation.latitude)]
      },
      distance: parseFloat(distance),
      status,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
      <div>
        <label>Pickup Location (Longitude, Latitude)</label>
        <input
          type="number"
          placeholder="Longitude"
          value={pickupLocation.longitude}
          onChange={(e) => setPickupLocation({ ...pickupLocation, longitude: e.target.value })}
          required
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="number"
          placeholder="Latitude"
          value={pickupLocation.latitude}
          onChange={(e) => setPickupLocation({ ...pickupLocation, latitude: e.target.value })}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Dropoff Location (Longitude, Latitude)</label>
        <input
          type="number"
          placeholder="Longitude"
          value={dropoffLocation.longitude}
          onChange={(e) => setDropoffLocation({ ...dropoffLocation, longitude: e.target.value })}
          required
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="number"
          placeholder="Latitude"
          value={dropoffLocation.latitude}
          onChange={(e) => setDropoffLocation({ ...dropoffLocation, latitude: e.target.value })}
          required
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Distance (optional)</label>
        <input
          type="number"
          placeholder="Distance in km"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="requested">Requested</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
        Submit Booking
      </button>
    </form>
  );
};

export default BookingForm;

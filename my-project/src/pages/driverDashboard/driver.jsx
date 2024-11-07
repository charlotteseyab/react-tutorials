import React, { useState, useEffect } from 'react';

const DriverDashboard = () => {
  const [activeTab, setActiveTab] = useState('requested');
  const [rides, setRides] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch requested rides and history from backend based on driver ID
    // fetch('/api/driver/rides').then(response => response.json()).then(data => setRides(data.requestedRides));
    // fetch('/api/driver/history').then(response => response.json()).then(data => setHistory(data.history));
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Driver Dashboard</h2>
      
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveTab('requested')}
          className={`px-4 py-2 rounded ${activeTab === 'requested' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}
        >
          Requested Rides
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 rounded ${activeTab === 'history' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}
        >
          Ride History
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded ${activeTab === 'settings' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'}`}
        >
          Settings
        </button>
      </div>

      {activeTab === 'requested' && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Requested Rides</h3>
          {/* Dummy data for requested rides */}
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded shadow-sm">
              <p><strong>Pickup Location:</strong> Accra Central</p>
              <p><strong>Dropoff Location:</strong> East Legon</p>
              <p><strong>Status:</strong> Pending</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-sm">
              <p><strong>Pickup Location:</strong> Osu</p>
              <p><strong>Dropoff Location:</strong> Madina</p>
              <p><strong>Status:</strong> Requested</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Ride History</h3>
          {/* Dummy data for ride history */}
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded shadow-sm">
              <p><strong>Pickup Location:</strong> Adabraka</p>
              <p><strong>Dropoff Location:</strong> Teshie</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>Date:</strong> Oct 20, 2024</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-sm">
              <p><strong>Pickup Location:</strong> Spintex</p>
              <p><strong>Dropoff Location:</strong> Tema</p>
              <p><strong>Status:</strong> Canceled</p>
              <p><strong>Date:</strong> Oct 19, 2024</p>
            </div>
            <div className="p-4 bg-gray-100 rounded shadow-sm">
              <p><strong>Pickup Location:</strong> Kasoa</p>
              <p><strong>Dropoff Location:</strong> West Hills Mall</p>
              <p><strong>Status:</strong> Ended</p>
              <p><strong>Date:</strong> Oct 23, 2024</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Settings</h3>
          <p className="text-gray-600">Update your profile, preferences, and settings here.</p>
          <form className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="text" className="w-full px-4 py-2 border rounded" placeholder="+233 123 456 789" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500">
              Save Settings
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DriverDashboard;

import React, { useState } from 'react';
import Home from './home.jsx';
import RideHistory from './rideHistory.jsx';
import AccountSettings from './accountSettings.jsx';

const RiderDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'history':
        return <RideHistory />;
      case 'account':
        return <AccountSettings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-6">Rider Dashboard</h2>
        <button
          onClick={() => setActiveSection('home')}
          className={`py-3 px-4 text-left mb-4 hover:bg-gray-700 rounded ${
            activeSection === 'home' ? 'bg-blue-600' : ''
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveSection('history')}
          className={`py-3 px-4 text-left mb-4 hover:bg-gray-700 rounded ${
            activeSection === 'history' ? 'bg-blue-600' : ''
          }`}
        >
          Ride History
        </button>
        <button
          onClick={() => setActiveSection('account')}
          className={`py-3 px-4 text-left mb-4 hover:bg-gray-700 rounded ${
            activeSection === 'account' ? 'bg-blue-600' : ''
          }`}
        >
          Account Settings
        </button>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">{renderSection()}</div>
    </div>
  );
};

export default RiderDashboard;

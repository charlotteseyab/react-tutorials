import React from 'react';

const RideHistory = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Ride History</h2>
    {/* Sample ride history data */}
    <ul className="space-y-4">
      <li className="p-4 bg-gray-100 rounded shadow">Ride 1 - Accra to Kumasi</li>
      <li className="p-4 bg-gray-100 rounded shadow">Ride 2 - Tamale to Bolgatanga</li>
    </ul>
  </div>
);

export default RideHistory;

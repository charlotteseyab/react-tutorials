import React from 'react';
import { FaHandshake, FaCarSide, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-blue-50 py-16">
      
      {/* Steps Section */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '20px' }}>
        {[
          { title: "Book Seamlessly", icon: <FaHandshake size={35} />, description: "Quick and easy booking process." },
          { title: "Get a Driver", icon: <FaCarSide size={35} />, description: "Reliable drivers at your service." },
          { title: "Track your Driver", icon: <FaMapMarkerAlt size={35} />, description: "Real-time tracking for convenience." },
          { title: "Arrive Safely", icon: <FaShieldAlt size={35} />, description: "Your safety is our priority." },
        ].map((step, index) => (
          <div key={index} style={{ textAlign: 'center', width: '200px' }}>
            <div style={{ width: '80px', height: '80px', backgroundColor: '#2563EB', borderRadius: '50%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              {step.icon}
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bolder', marginTop: '15px', fontStyle: 'italic' }}>{step.title}</h3>
            <p style={{ color: '#555' }}>{step.description}</p>
          </div>
        ))}
      </div>
   

        {/* Why Choose Us Section */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">Why Choose Us?</h2>
        <p className="mt-4 text-gray-700">
          Discover a seamless experience with reliable rides, transparent pricing, and safety.
          Manage your bookings and profile with ease, and stay connected for the latest updates.
        </p>
        {/* <button
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Learn More
        </button> */}
      </div>
      </div>
  );
};

export default About;

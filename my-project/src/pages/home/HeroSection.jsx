import React from 'react'
import { Link } from 'react-router-dom';
import backgroundVideo from '../../assets/videos/vid.mp4';

const HeroSection = () => {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={backgroundVideo} />
        </video>
  
        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold mb-4">Welcome to UrbanTaxi</h1>
          <p className="text-xl mb-8">Your ride is just a click away!</p>
          <div className="flex space-x-4">
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
            </Link>
            <Link to="/register">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
            </Link>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default HeroSection;
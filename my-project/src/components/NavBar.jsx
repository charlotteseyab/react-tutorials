import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-100 p-4 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          UrbanTaxi
        </div>
        
        {/* Nav Items */}
        <div className="space-x-6 text-blue-800">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#blog" className="hover:text-blue-500">Blog</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

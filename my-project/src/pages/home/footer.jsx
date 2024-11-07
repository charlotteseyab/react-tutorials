// Footer.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              Our Company is committed to providing excellent service and innovative solutions. We aim to make your riding experience memorable and hassle-free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#" className="text-sm hover:text-blue-400">Home</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">Services</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-sm mb-4">Get the latest updates and news delivered to your inbox.</p>
            <form action="#" method="POST" className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button type="submit" className="bg-blue-500 p-2 rounded-r-md text-white hover:bg-blue-400 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Horizontal Rule */}
        <hr className="border-t-2 border-gray-600 my-6 w-4/5 mx-auto" />


        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} UrbanTaxi. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-6">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <a href="#" className="hover:text-blue-400">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

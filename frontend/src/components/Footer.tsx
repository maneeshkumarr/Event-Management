import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react"; // Using Lucide icons (or use your preferred icons)

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left side - Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h2 className="text-2xl font-extrabold text-white">Eventify</h2>
          <p className="text-sm text-gray-400">Making Events Memorable © 2025</p>
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex space-x-8 text-sm font-medium">
          <a href="/about" className="hover:text-white transition duration-300">
            About
          </a>
          <a href="/events" className="hover:text-white transition duration-300">
            Events
          </a>
          <a href="/contact" className="hover:text-white transition duration-300">
            Contact
          </a>
        </div>

        {/* Right side - Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:eventify@example.com"
            className="text-gray-400 hover:text-green-400 transition duration-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        &copy; 2025 Eventify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

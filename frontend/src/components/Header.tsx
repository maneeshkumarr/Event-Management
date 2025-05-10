'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white/60 backdrop-blur-md shadow-lg py-4 px-6 fixed w-full z-50 transition-all duration-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo Section with SVG */}
        <Link href="/" className="flex items-center gap-3 text-pink-600">
          {/* SVG Icon inside a circle */}
          <div className="w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* You can change this path to your preferred icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          {/* Brand Name */}
          <span className="font-extrabold text-2xl text-gray-800 tracking-wide">DreamWed</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {['Services', 'How It Works', 'Review', 'Pricing'].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="transition-transform"
              >
                <a
                  className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-300"
                  href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                >
                  {item}
                </a>
              </motion.li>
            ))}

            {/* Book Now Button */}
            <motion.li whileHover={{ scale: 1.1 }}>
              
              <Link 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                href="/signup" 
              >
                Book Now
        
              </Link>
            </motion.li>

            {/* Register Event Button */}
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="/event">
                <button className="bg-white/80 backdrop-blur-md border border-pink-400 text-pink-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-pink-100 transition-all duration-300">
                  Register for the Event
                </button>
              </a>
            </motion.li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none relative z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/80 backdrop-blur-md mt-4 rounded-lg shadow-xl absolute left-4 right-4 p-4"
          >
            <ul className="flex flex-col gap-4">
              {['Services', 'How It Works', 'Review', 'Pricing'].map((item, index) => (
                <li key={index}>
                  <a
                    className="block text-gray-800 font-medium hover:text-pink-600 transition-all"
                    href={`#${item.toLowerCase().replace(/\s/g, '')}`}
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}

              <li>
                <a
                  className="block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-2 rounded-full font-medium shadow hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                  href="#cta"
                  onClick={toggleMenu}
                >
                  Book Now
                </a>
              </li>
              <li>
                <a href="/event" onClick={toggleMenu}>
                  <button className="w-full bg-white/90 backdrop-blur-md border border-pink-400 text-pink-600 py-2 rounded-lg font-semibold shadow-md hover:bg-pink-100 transition-all duration-300">
                    Register for the Event
                  </button>
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

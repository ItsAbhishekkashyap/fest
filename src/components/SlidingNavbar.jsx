'use client';
import Link from 'next/link';

import React, { useState, useEffect } from 'react';

// Additional navbar can be used any time from layout.js just uncomment it.

const SlidingNavbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility state

  // Function to handle scrolling
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling Down: Hide Navbar
      setIsVisible(false);
    } else {
      // Scrolling Up: Show Navbar
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed inset-x-0 max-w-xl z-50 top-0 rounded-full mx-auto items-center  bg-blue-950/60 text-white p-4 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="#" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SlidingNavbar;

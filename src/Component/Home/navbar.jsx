"use client"; // Ensure React's client-side behavior

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black fixed w-full shadow-md z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Ayaan Raje</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-gray-500"><a href="/">Home</a></li>
          <li className="hover:text-gray-500"><a href="/About">About Me</a></li>
          <li className="hover:text-gray-500"><a href="/Contact">Contact Me</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white text-black text-center shadow-lg">
          <ul className="space-y-4 py-4">
            <li className="hover:text-gray-500"><a href="/">Home</a></li>
            <li className="hover:text-gray-500"><a href="/About">About Me</a></li>
            <li className="hover:text-gray-500"><a href="/Contact">Contact Me</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

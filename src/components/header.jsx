import React from 'react';
import logo from "../assets/Y_logo_PNG (2).png"


function Header() {
  return (
    <header className="bg-white-100 p-4 shadow-custom rounded-lg border-2 border-black flex justify-between items-center">
      {/* Left side - Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-28 h-28" />
      </div>

      {/* Middle - Search Bar */}
      <div className="w-96 h-20 flex items-center mx-4">
        <input
          type="text"
          placeholder="Search anything.."
          className="w-full p-2 rounded-full border-2 border-black focus:outline-none"
        />
      </div>

      {/* Right side - User Stories */}
      <div className="flex space-x-2">
        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
        <div className="w-8 h-8 rounded-full bg-green-500"></div>
        <div className="w-8 h-8 rounded-full bg-red-500"></div>
      </div>
    </header>
  );
}

export default Header;
import React from "react";
import logo from "../../assets/Y_logo.png";
import user from "../../assets/basic-user.svg";

function Header() {
  return (
    <header className="bg-white p-4 shadow-custom rounded-3xl border-2 border-black flex justify-between items-center mb-6">
      {/* Left side - Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-20 h-20" />
      </div>

      {/* Middle - Search Bar (hidden on mobile) */}
      <div className="hidden md:flex w-96 h-20 items-center mx-4">
        <input
          type="text"
          placeholder="Search anything.."
          className="w-full p-2 rounded-full border-2 border-black focus:outline-none"
        />
      </div>

      {/* Right side - User Stories */}
      <div className="flex space-x-2">
        <div className="w-14 h-14 rounded-full border-2 border-green-400">
          <img
            src={user}
            alt="Blue Circle"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="w-14 h-14 rounded-full border-2 border-green-400">
          <img
            src={user}
            alt="Green Circle"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="w-14 h-14 rounded-full border-2 border-green-400">
          <img
            src={user}
            alt="Red Circle"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import logo from "../../assets/Y_logo_PNG (2).png";
import gosling from "../../assets/Gosling.jpg";
import margot from "../../assets/Margot.webp";
import justin from "../../assets/Justin.jpeg";

function Header() {
  return (
    <header className="bg-white-100 p-4 shadow-custom rounded-3xl border-2 border-black flex justify-between items-center">
      {/* Left side - Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-20 h-20" />
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
        <div className="w-16 h-16 rounded-full border-2 border-green-400">
          <img
            src={gosling}
            alt="Blue Circle"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="w-16 h-16 rounded-full border-2 border-green-400">
          <img
            src={margot}
            alt="Green Circle"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="w-16 h-16 rounded-full border-2 border-green-400">
          <img
            src={justin}
            alt="Red Circle"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

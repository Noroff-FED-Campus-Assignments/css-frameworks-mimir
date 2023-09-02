import React from "react";
import UserIcon from "../../assets/icons/user.svg";
import logo from "../../assets/Y_logo.png";

function MobileHomePage() {
  return (
    <div>
      <div className="bg-white p-2 flex rounded-3xl border-2 border-black shadow-custom w-screen">
        {/* Logo on the left */}
        <div className="w-20 h-20">
          <img src={logo} alt="Logo" className="w-full h-full ms-4" />
        </div>

        {/* User circles on the right */}
        <div className="flex items-center flex-grow justify-end me-4">
          <div className="text-center">
            <img src={UserIcon} alt="User" className="w-8 h-8 mx-auto me-4" />{" "}
            {/* Smaller user icon */}
          </div>

          <div className="text-center">
            <img src={UserIcon} alt="User" className="w-8 h-8 mx-auto me-4" />{" "}
            {/* Smaller user icon */}
          </div>

          <div className="text-center">
            <img src={UserIcon} alt="User" className="w-8 h-8 mx-auto me-4" />{" "}
            {/* Smaller user icon */}
          </div>
        </div>
      </div>

      <div className="bg-white p-4 flex rounded-3xl border-2 border-black shadow-custom w-screen">
        {/* Left side with text */}
        <div className="w-2/3 flex items-center justify-start">
          <p className="text-lg font-bold">
            <span className="text-black">Yells:</span>{" "}
            <span className="text-gray-400 text-sm">
              shout out something...
            </span>
          </p>
        </div>

        {/* Right side with the submit button */}
        <div className="w-1/3 flex justify-end items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
            Post
          </button>
        </div>
      </div>

      <div className="bg-white p-2 flex rounded-3xl border-2 border-black shadow-custom w-screen">
        {/* Container for the sections (arranged vertically) */}
        <div className="flex flex-col w-full">
          {/* First section */}
          <div className="w-full flex items-center justify-start border-2 border-gray-200 p-2 rounded-2xl">
            {/* Profile icon on the left */}
            <div className="w-12 h-12 rounded-full flex justify-center items-center">
              {/* Replace this with your profile icon */}
              <img src={UserIcon} alt="Profile" className="w-8 h-8" />
            </div>

            {/* Username */}
            <p className="text-lg ml-4">
              <span className="text-black font-bold">Bob</span>{" "}
              <span className="text-gray-400 text-sm">Yells:...</span>
            </p>
          </div>

          {/* Second section */}
          <div className="w-full flex items-center justify-start border-2 border-gray-200 p-2 rounded-2xl">
            {/* Profile icon on the left */}
            <div className="w-12 h-12 rounded-full flex justify-center items-center">
              {/* Replace this with your profile icon */}
              <img src={UserIcon} alt="Profile" className="w-8 h-8" />
            </div>

            {/* Username */}
            <p className="text-lg ml-4">
              <span className="text-black font-bold">Alice</span>{" "}
              <span className="text-gray-400 text-sm">Whispers:...</span>
            </p>
          </div>

          {/* Third section */}
          <div className="w-full flex items-center justify-start border-2 border-gray-200 p-2 rounded-2xl">
            {/* Profile icon on the left */}
            <div className="w-12 h-12 rounded-full flex justify-center items-center">
              {/* Replace this with your profile icon */}
              <img src={UserIcon} alt="Profile" className="w-8 h-8" />
            </div>

            {/* Username */}
            <p className="text-lg ml-4">
              <span className="text-black font-bold">Charlie</span>{" "}
              <span className="text-gray-400 text-sm">Chats:...</span>
            </p>
          </div>

          <div className="w-full flex items-center justify-start border-2 border-gray-200 p-2 rounded-2xl">
            {/* Profile icon on the left */}
            <div className="w-12 h-12 rounded-full flex justify-center items-center">
              {/* Replace this with your profile icon */}
              <img src={UserIcon} alt="Profile" className="w-8 h-8" />
            </div>

            {/* Username */}
            <p className="text-lg ml-4">
              <span className="text-black font-bold">Eve</span>{" "}
              <span className="text-gray-400 text-sm">Exclaims:...</span>
            </p>
          </div>

          <div className="w-full flex items-center justify-start border-2 border-gray-200 p-2 rounded-2xl">
            {/* Profile icon on the left */}
            <div className="w-12 h-12 rounded-full flex justify-center items-center">
              {/* Replace this with your profile icon */}
              <img src={UserIcon} alt="Profile" className="w-8 h-8" />
            </div>

            {/* Username */}
            <p className="text-lg ml-4">
              <span className="text-black font-bold">Eve</span>{" "}
              <span className="text-gray-400 text-sm">Exclaims:...</span>
            </p>
          </div>

          <div className="w-full flex items-center justify-start border-2 border-gray-200 p-2 rounded-2xl">
            {/* Profile icon on the left */}
            <div className="w-12 h-12 rounded-full flex justify-center items-center">
              {/* Replace this with your profile icon */}
              <img src={UserIcon} alt="Profile" className="w-8 h-8" />
            </div>

            {/* Username */}
            <p className="text-lg ml-4">
              <span className="text-black font-bold">Eve</span>{" "}
              <span className="text-gray-400 text-sm">Exclaims:...</span>
            </p>
          </div>


        </div>  
      </div>
    </div>
  );
}

export default MobileHomePage;

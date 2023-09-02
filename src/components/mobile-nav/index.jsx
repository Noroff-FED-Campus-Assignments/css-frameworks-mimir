import React from "react";
import { Outlet, Link } from "@tanstack/react-router";

import UserIcon from "../../assets/basic-user.svg";
import CogIcon from "../../assets/icons/cog.svg";
import HomeIcon from "../../assets/icons/home.svg";

function MobileNav() {
  // Style for the circles with border
  const circleStyle =
    "w-10 h-10 bg-orange-100 rounded-full border-2 border-black flex justify-center items-center";

  // Style for the Home icon and its circle with border
  const homeCircleStyle =
    "w-14 h-14 bg-orange-100 rounded-full border-2 border-black flex justify-center items-center";

  // Style for the user icon circle without border
  const userCircleStyle =
    "w-10 h-10 bg-orange-100 rounded-full flex justify-center items-center";

  const containerStyle = {
    lineHeight: "3rem", // Adjust the line-height to set the height
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 bg-orange-200 border-t-2 border-b-4 border-black p-4 flex items-center justify-center rounded-md">
      {/* Settings */}
      <Link to="/profile" style={{ color: "black" }}>
        <div className={`${circleStyle} mx-2 py-2`} style={containerStyle}>
          <img src={CogIcon} alt="Settings" className="w-6 h-6" />
        </div>
      </Link>

      {/* Home Button */}
      <Link to="/" style={{ color: "black" }}>
        <div className={`${homeCircleStyle} mx-10 my-4`} style={containerStyle}>
          <img src={HomeIcon} alt="Home" className="w-8 h-8" />
        </div>
      </Link>

      {/* User Icon */}
      <Link to="/Login" style={{ color: "black" }}>
        <div className={`${userCircleStyle} mx-2 py-2`} style={containerStyle}>
          <img src={UserIcon} alt="User" className="w-10 h-10" />
        </div>
      </Link>
    </div>
  );
}

export default MobileNav;

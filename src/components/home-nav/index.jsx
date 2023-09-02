import React from "react";
import { Outlet, Link } from "@tanstack/react-router";
import HomeIcon from "../../assets/icons/home.svg";
import UserIcon from "../../assets/icons/user.svg";
import MailIcon from "../../assets/icons/mail.svg";
import BookmarkIcon from "../../assets/icons/bookmark.svg";
import CommunityIcon from "../../assets/icons/community.svg";
import CogIcon from "../../assets/icons/cog.svg";

function NavBar() {
  return (
    <nav className="bg-white rounded-3xl p-5 w-64 border-2 border-black shadow-custom flex flex-col text-xl">
      <ul className="space-y-6">
        <li className="flex items-center p-2 bg-yellow-200 rounded-3xl border border-black hover:bg-yellow-400">
          <img src={HomeIcon} alt="Home Icon" className="w-6 h-6 mr-2" />
          <Link to="/" style={{ color: "black" }}>
            Home
          </Link>
        </li>
        <li className="flex items-center p-2">
          <img src={UserIcon} alt="User Icon" className="w-6 h-6 mr-2" />
          <Link to="/profile" style={{ color: "black" }}>
            Profile
          </Link>
        </li>
        <li className="flex items-center p-2">
          <img src={MailIcon} alt="Mail Icon" className="w-6 h-6 mr-2" />
          <a href="#" style={{ color: "black" }}>
            Messages
          </a>
        </li>
        <li className="flex items-center p-2">
          <img
            src={BookmarkIcon}
            alt="Bookmark Icon"
            className="w-6 h-6 mr-2"
          />
          <a href="#" style={{ color: "black" }}>
            Bookmarks
          </a>
        </li>
        <li className="flex items-center p-2">
          <img
            src={CommunityIcon}
            alt="Community Icon"
            className="w-6 h-6 mr-2"
          />
          <a href="#" style={{ color: "black" }}>
            Communities
          </a>
        </li>
        <li className="flex items-center p-2">
          <img src={CogIcon} alt="Settings Icon" className="w-6 h-6 mr-2" />
          <a href="#" style={{ color: "black" }}>
            Settings
          </a>
        </li>
      </ul>

      <div className="pb-16"></div>
      <div className="pb-16"></div>
      <div className="pb-16"></div>

      <button className="bg-yellow-200 rounded-3xl border border-black p-2 w-full mt-auto hover:bg-yellow-400">
        <Link to="/Login" style={{ color: "black" }}>
          Login
        </Link>
      </button>
    </nav>
  );
}

export default NavBar;

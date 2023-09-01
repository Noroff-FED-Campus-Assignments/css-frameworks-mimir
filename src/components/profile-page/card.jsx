import React from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa"; // Import Font Awesome icons

function ProfileCard({ user }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-center">
        <img
          src={user.avatarUrl} // Assuming you have the user's avatar URL
          alt={`Profile picture of ${user.name}`}
          className="w-16 h-16 rounded-full"
        />
      </div>
      <div className="text-center mt-4">
        <h1 className="text-2xl font-semibold text-gray-800">{user.name}</h1>
        <p className="text-sm text-gray-600">{user.bio}</p>
      </div>
    </div>
  );
}

function Post({ post }) {
  return (
    <div className="bg-white p-4 my-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
      <p className="text-gray-600 mt-2">{post.content}</p>
      <div className="flex justify-between mt-4">
        <div className="flex items-center text-gray-500 space-x-2">
          <button className="flex items-center space-x-1">
            <FaHeart /> <span>Like</span>
          </button>
          <button className="flex items-center space-x-1">
            <FaComment /> <span>Comment</span>
          </button>
          <button className="flex items-center space-x-1">
            <FaShare /> <span>Share</span>
          </button>
        </div>
        <div className="text-gray-500">Posted 2 hours ago</div>
      </div>
    </div>
  );
}

export { ProfileCard, Post };

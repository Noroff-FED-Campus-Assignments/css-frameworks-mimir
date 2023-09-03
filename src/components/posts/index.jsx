import React from "react";
import UserIcon from "../../assets/icons/user.svg";

function OtherPosts() {
  return (
    <div className="bg-orange-200 p-4 rounded-3xl border-2 border-orange-100 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-left">Posts</h1>
      <div className="bg-neutral-100 p-4 rounded-3xl border-2 border-white dark:bg-gray-700 dark:border-gray-600">
        {/* Post Content */}
        <div className="flex items-start">
          {/* Content Text */}
          <p className="text-gray-600 mb-16">Some interesting post content.</p>
        </div>

        {/* Divider Line */}
        <hr className="border-t-2 border-gray-300 my-4" />

        {/* User Section */}
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            {/* User Icon */}
            <img
              src={UserIcon}
              alt="User Icon"
              className="w-10 h-10 rounded-full"
            />

            {/* User Name */}
            <p className="ml-2 text-black">John Doe</p>

            {/* Username */}
            <p className="text-gray-600 text-sm ml-2">@JohnDoe</p>
          </div>

          {/* Like and Comment Buttons */}
          <div className="flex items-center">
            <button className="text-gray-600 hover:text-blue-500 mr-4 ms-16">
              Like
            </button>
            <button className="text-gray-600 hover:text-blue-500">
              Comment
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 mt-6 shadow-custom rounded-3xl border-2 border-black">
        {/* Post Content */}
        <div className="flex items-start">
          {/* Content Text */}
          <p className="text-gray-600 mb-16">Some interesting post content.</p>
        </div>

        {/* Divider Line */}
        <hr className="border-t-2 border-gray-300 my-4" />

        {/* User Section */}
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            {/* User Icon */}
            <img
              src={UserIcon}
              alt="User Icon"
              className="w-10 h-10 rounded-full"
            />

            {/* User Name */}
            <p className="ml-2 text-black">John Doe</p>

            {/* Username */}
            <p className="text-gray-600 text-sm ml-2">@JohnDoe</p>
          </div>

          {/* Like and Comment Buttons */}
          <div className="flex items-center">
            <button className="text-gray-600 hover:text-blue-500 mr-4 ms-16">
              Like
            </button>
            <button className="text-gray-600 hover:text-blue-500">
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherPosts;

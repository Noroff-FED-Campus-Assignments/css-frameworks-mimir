import React from "react";
import UserIcon from "../../assets/basic-user.svg";
import MediaIcon from "../../assets/icons/media.svg";
import GifIcon from "../../assets/icons/gif.svg";
import EmojiIcon from "../../assets/icons/emoji.svg";

function PostSubmission() {
  return (
    <div className="bg-neutral-100 text-gray-900 w-full text-xl p-4 mb-1 rounded-3xl border-2 border-white dark:bg-gray-700 dark:border-gray-600">
      <div className="flex items-start space-x-4">
        {/* User Profile */}
        <img src={UserIcon} alt="User Icon" className="w-10 h-10 rounded-full" />

        {/* Post Input */}
        <div className="flex-grow">
          <textarea
            placeholder="What's happening?"
            className="w-full h-20 resize-none border border-gray-300 p-2 rounded-md focus:outline-none"
          ></textarea>
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 ms-14">
        {/* Icons */}
        <div className="flex space-x-4">
          <img src={MediaIcon} alt="Camera Icon" className="w-6 h-6" />
          <img src={GifIcon} alt="GIF Icon" className="w-6 h-6" />
          <img src={EmojiIcon} alt="Emoji Icon" className="w-6 h-6" />
        </div>

        {/* Post Button */}
        <button className="bg-orange-200 dark:bg-blue-500 dark:text-white dark:border-blue-500 dark:hover:border-blue-400  text-gray-900 px-12 py-2 rounded-3xl ms-12 border-2 border-orange-200 hover:border-orange-100 shadow-custom leading-tight tracking-tight">
          Post
        </button>
      </div>
    </div>
  );
}

export default PostSubmission;

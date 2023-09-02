import React from "react";
import { useUser, useUsersPosts } from "../../lib/my-api"; // Import your custom API hooks

function ProfilePage() {
  const userId = 4;
  const {
    status: userStatus,
    error: userError,
    data: userData,
  } = useUser(userId);
  const {
    status: postsStatus,
    error: postsError,
    data: postsData,
  } = useUsersPosts(userId);

  const isLoading = userStatus === "loading" || postsStatus === "loading";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (userError || postsError) {
    return (
      <span>Error: {userError ? userError.message : postsError.message}</span>
    );
  }

  const accentColor = "#F4D196";

  return (
    <div>
      {/* Profile Section */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Profile Banner */}
        <div
          className={`relative bg-indigo-600 h-40`}
          style={{ backgroundColor: accentColor }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-400 opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={userData.image}
              alt="Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
        {/* Profile Details */}
        <div className="px-6 py-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            {userData.firstName} {userData.lastName}
          </h1>
          <p className="text-gray-600">Eye color: {userData.eyeColor}</p>
        </div>
        {/* Bio */}
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">Bio</h2>
          <p className="text-gray-600">{userData.bio}</p>
        </div>
      </div>

      {/* Posts Section */}
      <div className="mt-6">
        <h1 className="text-2xl font-semibold text-white-800 ">POSTS</h1>
        {postsData.posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4 mt-4 transition-transform hover:scale-105"
          >
            {/* User Avatar */}
            <div className="flex items-center">
              <img
                src={userData.image}
                alt="Avatar"
                className="w-11 h-11 object-cover border-2 border-indigo-600"
              />
              <div className="ml-2">
                <h3 className="text-lg font-semibold text-indigo-600">
                  {userData.firstName} {userData.lastName}
                </h3>
                <p className="text-gray-600">@{userData.username}</p>
              </div>
            </div>
            {/* Post Content */}
            <div className="mt-2">
              <p className="text-gray-800">{post.body}</p>
            </div>
            {/* Like, Comment, and Share Buttons */}
            <div className="flex justify-between mt-4">
              <button
                className="text-indigo-600 hover:text-indigo-800"
                style={{ backgroundColor: accentColor, color: "white" }}
              >
                Like
              </button>
              <button
                className="text-indigo-600 hover:text-indigo-800"
                style={{ backgroundColor: accentColor, color: "white" }}
              >
                Comment
              </button>
              <button
                className="text-indigo-600 hover:text-indigo-800"
                style={{ backgroundColor: accentColor, color: "white" }}
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;

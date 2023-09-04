import { useUser, useUsersPosts } from "../../lib/my-api";

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
    <div className="w-full">
      {/* Profile Section */}
      <div className="bg-neutral-100 text-gray-900 dark:text-white border-2 border-white dark:bg-gray-800 dark:border-gray-700 rounded-3xl overflow-hidden ">
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
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-800 dark:text-white">
            {userData.firstName} {userData.lastName}
          </h1>
          <p className="text-gray-600 dark:text-white">
            Eye color: {userData.eyeColor}
          </p>
        </div>
        {/* Bio */}
        <div className="px-6 py-4">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
            Bio
          </h2>
          <p className="text-sm sm:text-sm md:text-sm text-gray-600 dark:text-white">
            {userData.bio}I DANCE FOR MONEY
          </p>
        </div>
      </div>
      <div className="bg-white w-full mt-2 text-xl p-4 mb-8 shadow-custom rounded-3xl border-2 border-black">
        <div className="flex items-start space-x-4">
          <img className="w-10 h-10 rounded-full" />

          <div className="flex-grow">
            <textarea
              placeholder="What's happening?"
              className="w-full h-20 resize-none border border-gray-300 p-2 rounded-md focus:outline-none"
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 ms-14">
          <button
            className="bg-neutral-100 text-gray-900 leading-tight tracking-tight px-3 py-2 rounded-lg w-24 my-2 border-2 border-[#F5F5F5] hover:border-white dark:hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-200 shadow-custom"
            style={{
              backgroundColor: accentColor,
              color: "white",
              fontSize: "14px",
            }}
          >
            Post
          </button>
        </div>
      </div>
      {/* Posts Section */}
      <div className="mt-1 w-full bg-orange-200 p-6 rounded-3xl border-2 border-orange-100 dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 ml-2">
          POSTS
        </h1>
        {postsData.posts.map((post) => (
          <div
            key={post.id}
            className=" bg-neutral-100 p-4 rounded-3xl border-2 border-white dark:bg-gray-700 dark:border-gray-600 mt-1 transition-transform"
          >
            {/* Post Content */}
            <div className="mt-2">
              <p className="text-sm text-gray-600 dark:text-white mb-2">
                {post.body}
              </p>
            </div>

            {/* Divider Line */}
            <hr className="border-t-2 border-gray-300 my-4" />
            {/* User Section */}
            <div className="flex items-start justify-between flex-wrap">
              {/* User Avatar */}
              <div className="flex items-center flex-wrap">
                <img
                  src={userData.image}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600 hover:scale-105"
                />
                <div className="ml-2">
                  <h3 className="text-sm text-gray-600 dark:text-white hover:scale-105 hidden xxs:inline-block">
                    {userData.firstName} {userData.lastName}
                  </h3>
                  <p className="text-sm text-black dark:text-white">
                    @{userData.username}
                  </p>
                </div>
              </div>
              {/* Like and Comment Buttons */}
              <div className="flex items-center">
                <button className="text-sm text-gray-600 dark:text-white border-gray-300 dark:bg-gray-700 dark:border-gray-600 hover:text-blue-500 sm:mr-4 sm:ms-16">
                  Like
                </button>
                <button className="text-sm text-gray-600 dark:text-white border-gray-300 dark:bg-gray-700 dark:border-gray-600 hover:text-blue-500">
                  Comment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;

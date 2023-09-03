import React, { useState } from "react";
import { useUser, useUsersPosts } from "../../lib/my-api";

function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const userId = 4;
  const { status: userStatus, error: userError, data: userData } = useUser(userId);
  const { status: postsStatus, error: postsError, data: postsData } = useUsersPosts(userId);

  if (userStatus === "loading" || postsStatus === "loading") {
    return <span>Loading...</span>;
  }

  if (userError || postsError) {
    return <span>Error: {userError ? userError.message : postsError.message}</span>;
  }

  return (
    <div className="bg-gray-100">
      <div className="w-full text-white bg-main-color">
        {/* ... Navbar Here ... */}
      </div>
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400"></div>
            <div className="bg-white p-3 hover:shadow"></div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500"></span>
                    <span className="tracking-wide">Experience</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500"></span>
                    <span className="tracking-wide">Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

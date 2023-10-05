import Profile from "../components/profile-page";
import Header from "../components/header/index.jsx";
import NavBar from "../components/home-nav/index.jsx";
import useMetaTags from "../hooks/useMetaTags";
import TrendingSection from "../components/trending/index.jsx";

function ProfilePage() {
  useMetaTags("Profile", "Your user profile details.");
  return (
    <>
      <div className="mt-2 mx-2 w-full">
        {/* Header*/}
        <Header />
        {/* Main Content */}
        <div className="flex">
          {/* Left Side */}
          <div className="min-w-80 sm:w-2/12 md:w-3/12">
            <NavBar />
          </div>
          {/* Middle */}
          <div className="w-full sm:w-10/12 md:w-7/12 mx-1">
            <Profile />
          </div>
          {/* Right Side */}
          <div className="w-0 sm:w-0 md:w-2/12">
            <TrendingSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

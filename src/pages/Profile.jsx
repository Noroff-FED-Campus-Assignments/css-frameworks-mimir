import Profile from "../components/profile-page";
import Header from "../components/header/index.jsx";
import NavBar from "../components/home-nav/index.jsx";
import useMetaTags from "../hooks/useMetaTags";
import TrendingSection from "../components/trending/index.jsx";

function ProfilePage() {
  useMetaTags("Profile", "Your user profile details.");
  return (
    <>
      <div className="mt-4">
        {/* Header with margin-bottom */}
        <Header />
        {/* Main Content */}
        <div className="flex">
          {/* Left Side */}
          <div>
            <NavBar />
          </div>
          {/* Middle */}
          <div className="mx-1" style={{ overflowY: "auto", flexGrow: 1 }}>
            <Profile />
          </div>
          {/* Right Side */}
          <div>
            <TrendingSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

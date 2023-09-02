// import ExampleUsersPosts from "../components/example-users-posts"; //
import { Outlet, Link } from "@tanstack/react-router";
import Header from "../components/header/index.jsx";
import NavBar from "../components/home-nav/index.jsx";
import PostSubmission from "../components/users-post/index.jsx";
import OtherPosts from "../components/posts/index.jsx";
import TrendingSection from "../components/trending/index.jsx";
import useMetaTags from "../hooks/useMetaTags";
import MobileHomePage from "../components/mobile-home/index.jsx";
import MobileNav from "../components/mobile-nav/index.jsx";

function HomePage() {
  useMetaTags("Home", "Welcome to our homepage.");
  return (
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
        <div className="mx-6" style={{ overflowY: "auto", flexGrow: 1 }}>
          <PostSubmission />
          <OtherPosts />
        </div>

        {/* Right Side */}
        <div>
          <TrendingSection />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

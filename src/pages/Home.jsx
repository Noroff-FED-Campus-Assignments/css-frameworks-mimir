// import ExampleUsersPosts from "../components/example-users-posts"; //
import { Outlet, Link } from "@tanstack/react-router";
import Header from "../components/header/index.jsx";
import NavBar from "../components/home-nav/index.jsx";
import PostSubmission from "../components/users-post/index.jsx";
import OtherPosts from "../components/posts/index.jsx";
import TrendingSection from "../components/trending/index.jsx";
import useMetaTags from "../hooks/useMetaTags";

function HomePage() {
  useMetaTags("Home", "Welcome to our homepage.");
  return (
    <div className="m-4">
      {/* Header with margin-bottom */}
      <Header />

      {/* Main Content */}
      <div className="flex">
        {/* Left Side */}
        <div>
          <NavBar />
        </div>

        {/* Middle */}
        <div className="mx-6">
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

// import ExampleUsersPosts from "../components/example-users-posts"; //
import { Outlet, Link } from "@tanstack/react-router"
import Header from "../components/header/header.jsx";
import NavBar from "../components/home-nav/nav.jsx";
import PostSubmission from "../components/users-post/index.jsx";
import OtherPosts from "../components/posts/index.jsx";
import TrendingSection from "../components/trending/index.jsx";

function HomePage() {
  return (
    <div>
      {/* Header with margin-bottom */}
      <Header />

      {/* Main Content */}
      <div className="flex">
        {/* Left Side */}
        <div className="flex-1">
          <NavBar />
        </div>

        {/* Middle */}
        <div className="flex-1">
          <PostSubmission />
          <OtherPosts />
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <TrendingSection />
        </div>
      </div>
    </div>
  );
}

export default HomePage;



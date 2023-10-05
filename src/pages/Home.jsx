// import ExampleUsersPosts from "../components/example-users-posts"; //
import Header from "../components/header/index.jsx";
import NavBar from "../components/home-nav/index.jsx";
import PostSubmission from "../components/users-post/index.jsx";
import OtherPosts from "../components/posts/index.jsx";
import TrendingSection from "../components/trending/index.jsx";
import useMetaTags from "../hooks/useMetaTags";

function HomePage() {
  useMetaTags("Home", "Welcome to our homepage.");
  return (
    <div className="container mt-2 mx-2 w-full">
      {/* Header*/}
      <Header />

      {/* Main Content */}
      <div className="flex">
        {/* Left Side */}
        <div className="min-w-80 sm:w-2/12 md:w-3/12">
          <NavBar />
        </div>

        {/* Middle */}
        <div className="w-10/12 sm:w-10/12 md:w-7/12 mx-1">
          <PostSubmission />
          <OtherPosts />
        </div>

        {/* Right Side */}
        <div className="w-0 sm:w-0 md:w-2/12">
          <TrendingSection />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

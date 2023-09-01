// import ExampleUsersPosts from "../components/example-users-posts"; //
import { Outlet, Link } from "@tanstack/react-router";
import OtherPosts from "../components/posts/index.jsx";
import TrendingSection from "../components/trending/index.jsx";

function HomePage() {
  return (
    <>
      <OtherPosts />
      <TrendingSection />
    </>
  );
}

export default HomePage;
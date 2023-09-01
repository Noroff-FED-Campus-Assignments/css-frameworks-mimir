// import ExampleUsersPosts from "../components/example-users-posts"; //
import { Outlet, Link } from "@tanstack/react-router";
import TrendingSection from "../components/trending/index.jsx"

function HomePage() {
  return (
    <>
      <TrendingSection />
    </>
  );
}

export default HomePage;

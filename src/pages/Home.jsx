// import ExampleUsersPosts from "../components/example-users-posts"; //
import { Outlet, Link } from "@tanstack/react-router";
import OtherPosts from "../components/posts/index.jsx"

function HomePage() {
  return (
    <>
      <OtherPosts />
    </>
  );
}

export default HomePage;

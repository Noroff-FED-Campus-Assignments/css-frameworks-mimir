import React from "react";
import { useUsersPosts, useUser } from "../../lib/my-api";
import { ProfileCard, Post } from "../profile-card/card"; // Import your updated ProfileCard and Post components

function ExampleUsersPosts() {
  const userId = 2; // Replace with the user's ID
  const { status: postsStatus, error: postsError, data: postsData } = useUsersPosts(userId);
  const { status: userStatus, error: userError, data: userData } = useUser(userId);

  const isLoading = postsStatus === "loading" || userStatus === "loading";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (postsError || userError) {
    return <span>Error: {postsError ? postsError.message : userError.message}</span>;
  }

  const user = userData; // Assuming you have a user object in your API response
  const posts = postsData.posts; // Assuming your API response structure

  return (
    <div className="container mx-auto p-4">
      <ProfileCard user={user} />

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Wall Posts</h2>

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}

export default ExampleUsersPosts;

import Profile from "../components/profile-page";
import useMetaTags from "../hooks/useMetaTags";

function ProfilePage() {
  useMetaTags("Profile", "Your user profile details.");
  return (
    <>
      <Profile />
    </>
  );
}

export default ProfilePage;

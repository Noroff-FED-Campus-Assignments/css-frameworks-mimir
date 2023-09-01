import React from 'react';
import LoginForm from "../components/login-form";
import useMetaTags from "../hooks/useMetaTags";

function LoginPage() {
  useMetaTags("Login", "Login to your account.");
  return (
    <>
      <LoginForm />
    </>
  );
}

export default LoginPage;

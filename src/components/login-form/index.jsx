import { login } from "../../lib/my-api";
import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import logo from "../../assets/Y_logo_PNG (2).png";
import SignUpForm from "../sign-up_form";

// Reusable Input and Button Components
const Input = ({ type, placeholder, value, onChange }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-neutral-100 border-2 border-[#1E1E1E] text-gray-900 sm:text-sm rounded-3xl focus:ring-sky-300 focus:border-sky-300 block w-full p-2.5"
        aria-label={placeholder}
    />
);
const CustomButton = ({ label, onClick }) => (
    <button onClick={onClick} className="bg-neutral-100 text-gray-900 px-4 py-2 rounded-3xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">
        {label}
    </button>
);

// Loading, Error, and Success Messages
const Loading = () => <div>Verifying...</div>;
const ErrorMessage = ({ message }) => <div>An error occurred: {message}</div>;
const SuccessMessage = () => <div>Login Successful</div>;

// Loginform App
function LoginForm() {
    const [activeForm, setActiveForm] = useState('login');
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginMutation = useMutation(async ({ username, password }) => {
        const data = await login({ username, password });
        navigate({ to: "/", params: { id: data.id } });
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate({ username: email, password })
    };

    return (
        <div className="red-100 dark:bg-gray-900 p-4 md:p-10 rounded-lg">
            <div className="flex justify-center items-center">
                <img className="h-20 sm:h-22 md:h-24 lg:h-26" src={logo}></img>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Better than X!</h1>
            {loginMutation.isLoading ? <Loading /> : null}
            {loginMutation.isError ? <ErrorMessage message={loginMutation.error.message} /> : null}
            {loginMutation.isSuccess ? <SuccessMessage /> : null}

            {activeForm === 'login' ? (!showLogin ? (
                <>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Sign up now</h2>
                    <CustomButton label="Sign up with Google" onClick={() => loginMutation.mutate({ username: "testuser", password: "tester" })} />
                    <CustomButton label="Sign up with Apple" onClick={() => loginMutation.mutate({ username: "testuser", password: "tester" })} />
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl  text-center font-bold">or</p>
                    <button onClick={() => setActiveForm('signup')} className="bg-orange-200 text-gray-900 px-4 py-2 rounded-3xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">Create an Account</button>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">Already have an account?</h3>
                    <button onClick={() => setShowLogin(true)} className="orange-200 text-gray-900 px-4 py-2 rounded-3xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">
                        Sign In
                    </button>
                </>
            ) : (
                <section>
                    <div className="w-full bg-orange-200 rounded-3xl sm:w-full md:w-1/2shadow-custom border-2 border-[#1E1E1E] md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-4 space-y-2 sm:space-y-4 md:space-y-6 sm:p-8">
                            <h2 className="text-l sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                                Sign in to your account
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-3xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">Login</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" onClick={() => setShowLogin(false)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            )
            ) : (
                <SignUpForm setShowLogin={setShowLogin} setActiveForm={setActiveForm} />
            )}
        </div >
    )
};

export default LoginForm;
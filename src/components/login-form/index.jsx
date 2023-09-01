import { login } from "../../lib/my-api";
import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import logo from "../../assets/Y_logo_PNG (2).png";
import SignUpForm from "../sign-up_form";

// Reusable Input and Button Components
const Input = ({ type, placeholder, value, onChange, required, minLength }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={true}
        minLength={4}
        className="bg-neutral-100 border-2 border-[#1E1E1E] text-gray-900 sm:text-sm rounded-3xl focus:ring-sky-100 focus:border-sky-100 block w-full p-2.5"
        aria-label={placeholder}
    />
);
const CustomButton = ({ label, onClick }) => (
    <button onClick={onClick} className="bg-neutral-100 text-gray-900 px-4 py-2 rounded-3xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">
        {label}
    </button>
);

// Loading, Error, and Success Messages
const Loading = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="text-white bg-transparent">
            Verifying...
        </div>
    </div>
);
const ErrorMessage = ({ message }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="text-white bg-transparent">
            An error occurred: {message}
        </div>
    </div>
);
const SuccessMessage = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="text-white bg-transparent">
            Login Successful
        </div>
    </div>
);

// Login form App
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
                <img className="h-22 sm:h-24 md:h-26 lg:h-28 xl:h-30 my-5" src={logo}></img>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-5">Better than X!</h1>
            {loginMutation.isLoading ? <Loading /> : null}
            {loginMutation.isError ? <ErrorMessage message={loginMutation.error.message} /> : null}
            {loginMutation.isSuccess ? <SuccessMessage /> : null}

            {activeForm === 'login' ? (!showLogin ? (
                <>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-2">Sign up now</h2>
                    <CustomButton label="Sign up with Google" onClick={() => loginMutation.mutate({ username: "kminchelle", password: "0lelplR" })} />
                    <CustomButton label="Sign up with Apple" onClick={() => loginMutation.mutate({ username: "kminchelle", password: "0lelplR" })} />
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl  text-center font-bold">or</p>
                    <button onClick={() => setActiveForm('signup')} className="bg-orange-200 text-gray-900 px-4 py-2 rounded-3xl w-full mt-2 mb-5 border-2 border-[#1E1E1E] shadow-custom">Create an Account</button>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold my-2">Already have an account?</h3>
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
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="/profile">
                                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
                                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true} minLength={4} />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-3xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">Login</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
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
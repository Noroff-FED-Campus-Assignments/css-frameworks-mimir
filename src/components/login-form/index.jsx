import { login } from "../../lib/my-api";
import React, { useState, useEffect } from 'react';
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import logo from "../../assets/Y_logo.png";
import SignUpForm from "../sign-up_form";
import google from "../../assets/icons/google-logo-48.svg";
import apple from "../../assets/icons/apple-logo-48.svg";

// Reusable Input and Button Components
const Input = ({ type, placeholder, value, onChange, required, minLength }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={true}
        minLength={4}
        className="bg-neutral-100 border-2 border-orange-100 text-gray-900 leading-tight tracking-tight sm:text-sm rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full min-w-[220px] sm:min-w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        aria-label={placeholder}
    />
);
const CustomButton = ({ label, onClick, icon }) => (
    <button onClick={onClick} className="bg-neutral-100 text-gray-900 leading-tight tracking-tight px-4 py-2 rounded-3xl w-full my-2 border-2 border-[#F5F5F5] hover:border-white dark:hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-200 shadow-custom">
        {icon && <img src={icon} alt={label} className="inline-block mr-2 w-7 h-7" />}
        {label}
    </button>
);

// Loading, Error, and Success Messages
const Loading = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
        <div className="text-white text-2xl font-bold bg-transparent">
            Verifying...
        </div>
    </div>
);
const ErrorMessage = ({ message }) => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
        <div className="text-white text-2xl font-bold bg-transparent">
            An error occurred: {message}
        </div>
    </div>
);
const SuccessMessage = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
        <div className="text-white text-2xl font-bold bg-transparent">
            Login Successful...
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
    const [spin, setSpin] = useState(false);

    const loginMutation = useMutation(async ({ username, password }) => {
        const data = await login({ username, password });
        navigate({ to: "/", params: { id: data.id } });
    });

    useEffect(() => {
        setSpin(loginMutation.isLoading);
    }, [loginMutation.isLoading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate({ username: email, password })
    };

    return (
        <div className="red-100 dark:bg-gray-900 p-4 md:p-10 rounded-lg">
            <div className="flex justify-center items-center">
                <img className={`h-22 sm:h-24 md:h-26 lg:h-28 xl:h-30 my-5 logo dark:invert ${spin ? 'spin' : ''}`} src={logo}></img>
            </div>
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-5"><p className="text-sm text-white dark:text-gray-700">is</p>Better than X!</h1>
            {loginMutation.isLoading ? <Loading /> : null}
            {loginMutation.isError ? <ErrorMessage message={loginMutation.error.message} /> : null}
            {loginMutation.isSuccess ? <SuccessMessage /> : null}

            {activeForm === 'login' ? (!showLogin ? (
                <>
                    <div className="w-full dark:rounded-3xl dark:border-2 md:mt-0 sm:max-w-md p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold my-2 dark:text-white">Sign up now</h2>
                        <CustomButton label="Sign up with Google" icon={google} onClick={() => loginMutation.mutate({ username: "kminchelle", password: "0lelplR" })} />
                        <CustomButton label="Sign up with Apple" icon={apple} onClick={() => loginMutation.mutate({ username: "kminchelle", password: "0lelplR" })} />
                        <p className="text-center font-bold">or</p>
                        <button onClick={() => setActiveForm('signup')} className="bg-orange-200 dark:bg-blue-500 dark:text-white dark:border-blue-500 dark:hover:border-blue-400  text-gray-900 px-4 py-2 rounded-3xl w-full mt-2 mb-5 border-2 border-orange-200 hover:border-orange-100 shadow-custom leading-tight tracking-tight">Create an Account</button>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold my-2">Already have an account?</h3>
                        <CustomButton label="Sign In" onClick={() => setShowLogin(true)} />
                    </div>
                </>
            ) : (
                <section>
                    <div className="w-full bg-orange-200 rounded-3xl border-2 border-orange-100 mt-1 md:mt-2 sm:max-w-md xl:p-1 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 sm:space-y-5 md:space-y-7 sm:p-8">
                            <h2 className="text-l sm:text-xl md:text-2xl lg:text-2xl font-bold leading-tight tracking-tight text-gray-800 dark:text-white">
                                Sign in to your account
                            </h2>
                            <form onSubmit={handleSubmit} className="p-1 space-y-4 md:space-y-6" action="/profile">
                                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} autocomplete="email" />
                                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true} minLength={4} autocomplete="current-password" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 ml-2 border border-gray-100 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-1 text-sm">
                                            <label htmlFor="remember" className="text-gray-600 dark:text-gray-300 text-xs sm:text-xs md:text-xs lg:text-sm font-light">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm md:text-sm lg:text-sm font-medium text-primary-600 hover:underline ml-1">Forgot password?</a>
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-3xl w-full my-2 border-2 border-blue-500 hover:border-blue-400 shadow-custom leading-tight tracking-tight">Login</button>
                                <p className="text-xs sm:text-sm font-light text-gray-700 dark:text-gray-400">
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
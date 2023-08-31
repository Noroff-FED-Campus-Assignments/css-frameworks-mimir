import { login } from "../../lib/my-api";
import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import logo from "../../assets/Y_logo_PNG (2).png";

// Reusable Input and Button Components
const Input = ({ type, placeholder, value, onChange }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-neutral-100 border-2 border-[#1E1E1E] text-gray-900 sm:text-sm rounded-lg focus:ring-sky-300 focus:border-sky-300 block w-full p-2.5"
        aria-label={placeholder}
    />
);
const CustomButton = ({ label, onClick }) => (
    <button onClick={onClick} className="bg-neutral-100 text-gray-900 px-4 py-2 rounded-xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">
        {label}
    </button>
);

// Loading, Error, and Success Messages
const Loading = () => <div>Verifying...</div>;
const ErrorMessage = ({ message }) => <div>An error occurred: {message}</div>;
const SuccessMessage = () => <div>Login Successful</div>;

// Loginform App
function LoginForm() {
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
        <div className="red-100 dark:bg-gray-900 p-10 rounded-lg">
            <div className="flex justify-center items-center">
                <img className="w-[85.17px] h-20" src={logo}></img>
            </div>
            <h1 className="text-4xl font-bold">Better than X!</h1>
            {loginMutation.isLoading ? <Loading /> : null}
            {loginMutation.isError ? <ErrorMessage message={loginMutation.error.message} /> : null}
            {loginMutation.isSuccess ? <SuccessMessage /> : null}

            {!showLogin ? (
                <>
                    <h2 className="text-2xl font-bold">Sign up now</h2>
                    <CustomButton label="Sign up with Google" onClick={() => loginMutation.mutate({ username: "kminchelle", password: "0lelplR" })} />
                    <CustomButton label="Sign up with Apple" onClick={() => loginMutation.mutate({ username: "kminchelle", password: "0lelplR" })} />
                    <p className="text-xl text-center font-bold">or</p>
                    <button className="bg-orange-200 text-gray-900 px-4 py-2 rounded-xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">Create an Account</button>
                    <h3 className="text-xl font-bold">Already have an account?</h3>
                    <button onClick={() => setShowLogin(true)} className="orange-200 text-gray-900 px-4 py-2 rounded-xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">
                        Sign In
                    </button>
                </>
            ) : (
                <section>
                    <div className="w-full bg-orange-200 rounded-xl shadow-custom border-2 border-[#1E1E1E] md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
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
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">Login</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" onClick={() => setShowLogin(false)} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            )
            }
        </div >
    )
};

export default LoginForm;

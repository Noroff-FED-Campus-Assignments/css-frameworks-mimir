import { login } from "../../lib/my-api";
import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

const Input = ({ type, placeholder, value, onChange }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        aria-label={placeholder}
    />
);

function LoginForm() {
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginMutation = useMutation(login, {
        onSuccess: (data) => {
            navigate({ to: "/", params: { id: data.id } });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation.mutate({ username: email, password })
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 p-10 rounded-lg">
            <h1 className="text-4xl font-bold">Better than X!</h1>

            {loginMutation.isLoading ? (
                <div>Verifing...</div>
            ) : (
                <>
                    {loginMutation.isError ? <div>An error occurred: {loginMutation.error.message}</div> : null}
                    {loginMutation.isSuccess ? <div>Login Successful</div> : null}
                </>
            )}
            {!showLogin ? (
                <>
                    <h2 className="text-2xl">Sign up now</h2>
                    <button onClick={() => {
                        loginMutation.mutate({
                            username: "kminchelle",
                            password: "0lelplR",
                        });
                    }} className="bg-red-500 text-white px-4 py-2 rounded-xl w-full my-2 shadow-custom">Sign up with Google</button>
                    <button onClick={() => {
                        loginMutation.mutate({
                            username: "kminchelle",
                            password: "0lelplR",
                        });
                    }} className="bg-black text-white px-4 py-2 rounded-xl w-full my-2 shadow-custom">Sign up with Apple</button>
                    <p className="text-center">or</p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-xl w-full my-2 shadow-custom">Create an Account</button>
                    <h3 className="text-xl">Already have an account?</h3>
                    <button onClick={() => setShowLogin(true)} className="bg-blue-500 text-white px-4 py-2 rounded-xl w-full my-2 shadow-custom">
                        Sign In
                    </button>
                </>
            ) : (
                <section class="bg-gray-50 dark:bg-gray-900">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom">Login</button>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" onClick={() => setShowLogin(false)} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
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

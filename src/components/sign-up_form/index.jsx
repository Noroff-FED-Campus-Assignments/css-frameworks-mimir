import React, { useState } from 'react';
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";



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

const SignUpForm = ({ setShowLogin, setActiveForm }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signUpMutation = useMutation(async ({ email, password }) => {
        const data = await signUp({ email, password });
        navigate({ to: "/", params: { id: data.id } });
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            signUpMutation.mutate({ email, password });
        }
    };

    return (
        <div className="red-100 dark:bg-gray-900 p-4 md:p-10 rounded-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Create an Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className="bg-neutral-100 text-gray-900 px-4 py-2 rounded-3xl w-full my-2 border-2 border-[#1E1E1E] shadow-custom" onClick={handleSubmit}>Sign Up</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Allready have an account? <a href="#" onClick={() => { setShowLogin(true); setActiveForm('login'); }} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</a>
                </p>
            </form>
        </div>
    );
};

export default SignUpForm;
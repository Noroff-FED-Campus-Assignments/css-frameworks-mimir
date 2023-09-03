import React, { useEffect, useState } from 'react';
import HomePage from './Home';
import LoginPage from './Login';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../lib/my-api';
import useMetaTags from "../hooks/useMetaTags";



const InitialPage = () => {
    useMetaTags();
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState(4); // Initialize as null


    useEffect(() => {
        // Simulate a 3-second loading time before showing LoginPage
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);


    // Fetch User
    const { data: user, isLoading: userLoading, isError } = useQuery(
        ['user', userId],
        () => fetchUser(userId),
        {
            enabled: !!userId,
            onSuccess: () => setIsLoading(false),
            onError: () => setIsLoading(false)
        }
    );

    if (isLoading || userLoading) {
        return <span>Loading...</span>;
    }

    if (isError || !userId) {
        return <LoginPage />;
    }

    return <HomePage />;
};

export default InitialPage;
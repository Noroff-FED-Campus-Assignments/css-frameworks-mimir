import React, { useEffect, useState } from 'react';
import HomePage from './Home';
import LoginPage from './Login';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../lib/my-api';

const InitialPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const userId = 4;

    const { data: user, isLoading: userLoading, isError } = useQuery(['user', userId], () => fetchUser(userId), {
        enabled: !!userId,
        onSuccess: () => setIsLoading(false),
    });

    if (isLoading || userLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <LoginPage />;
    }

    return user ? <HomePage /> : <LoginPage />;
};

export default InitialPage;
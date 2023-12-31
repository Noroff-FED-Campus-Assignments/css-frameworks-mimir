import React, { useEffect, useState } from 'react';
import HomePage from './Home';
import LoginPage from './Login';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../lib/my-api';
import useMetaTags from "../hooks/useMetaTags";

/** InitialPage - Option to start site at loading if user not logged in. Change use state "4" line 13 
 * @author Cnbergh
*/

const InitialPage = () => {
    useMetaTags();
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState(4); // Initialize as null


    useEffect(() => {
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
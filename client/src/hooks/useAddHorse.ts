import { useState } from 'react';
import axios from 'axios';

const useAddHorse = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;

    const addHorse = async (horse: any) => {
        setIsLoading(true);
        setError(null);

        try {
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.post(`${serverAddress}/horses`, horse)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.error('Error adding horse:', error);
                })
        } catch (error) {
            setError('An error occurred while adding the horse.');
        } finally {
            setIsLoading(false);
        }
    };

    return { addHorse, isLoading, error };
};

export default useAddHorse;
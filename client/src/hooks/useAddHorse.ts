import { useState } from 'react';
import axios from 'axios';
import { AxiosResponse } from 'axios';

interface ApiResponse {
    data: {
        link: string;
    }[];
}

const useAddHorse = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;

    const addHorse = async (horse: any) => {
        setIsLoading(true);
        setError(null);

        try {

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('User not authenticated');
            }

            const photoURLs: string[] = [];

            for (const photo of horse.photos) {
                const formData = new FormData();
                formData.append('image', photo.file);

                const imageResponse = await axios.post(`${serverAddress}/uploads`, formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const imgUrl = imageResponse?.data?.urlObject?.data?.link;

                if (!imgUrl) {
                    throw new Error('Image upload failed');
                }

                photoURLs.push(imgUrl);
            }
            const newHorse = {
                name: horse.name,
                breed: horse.breed,
                height: horse.height,
                description: horse.description,
                gender: horse.gender,
                registration: horse.registration,
                dob: horse.dob,
                price: horse.price,
                photos: photoURLs,
            };

            await axios.post(`${serverAddress}/horses`, newHorse, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

        } catch (error) {
            setError('An error occurred while adding the horse.');
            console.error('Error adding horse:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return { addHorse, isLoading, error };
};

export default useAddHorse;
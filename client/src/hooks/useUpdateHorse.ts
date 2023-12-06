import { useState } from 'react';
import axios from 'axios';
import { AxiosResponse } from 'axios';

interface ApiResponse {
    data: {
        link: string;
    }[];
}

const useUpdateHorse = () => {
    const [loading, setloading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;

    const updateHorse = async (horse: any, id:string|undefined, imageUrls: string[]|undefined) => {
        setloading(true);
        setError(null);

        try {

            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('User not authenticated');
            }

            const photoURLs: string[] = [];
            if(imageUrls!==undefined){
                for(const url of imageUrls){
                    photoURLs.push(url);
                }
            }

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
            const updatedHorse = {
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

            await axios.put(`${serverAddress}/horses/${id}`, updatedHorse, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

        } catch (error) {
            setError('An error occurred while adding the horse.');
            console.error('Error adding horse:', error);
        } finally {
            setloading(false);
        }
    };

    return { updateHorse, loading, error };
};

export default useUpdateHorse;
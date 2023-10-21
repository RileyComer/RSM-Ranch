import { useState, useEffect } from 'react';
import Horse from '../types/Horse';
import axios from 'axios';

export const useHorseById = (id:string|undefined) => {
    const [horse, setHorse] = useState<Horse|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);
    const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;

  useEffect(() => {
    const fetchHorseById = async () => {
      if(id!=undefined){
      try {
        const response = await axios.get(`${serverAddress}/horses/${id}`); // Replace with your API endpoint
        setHorse(response.data);
      } catch (error) {
        setError('Error fetching horse');
      } finally {
        setLoading(false);
      }
    }
    };

    fetchHorseById();

    // Clean up function (if needed)
    return () => {
      // Cleanup logic (e.g., aborting ongoing requests)
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return { horse, loading, error };
};
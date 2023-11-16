import { useState, useEffect } from 'react';
import Horse from '../types/Horse';

export const useHorses = () => {
  const [horses, setHorses] = useState<Horse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const response = await fetch(`${serverAddress}/horses`);
        if (response.ok) {
          const data = await response.json();
          setHorses(data);
        } else {
          setError('Failed to fetch horses');
        }
      } catch (error) {
        setError('Error fetching horses');
      } finally {
        setLoading(false);
      }
    };

    fetchHorses();
  }, []);

  return { horses, loading, error };
};
import { useState, useEffect } from 'react';
import axios from 'axios';
import { error } from 'console';

function useAuth() {
  const [authLogin, setAuthLogin] = useState<boolean | undefined>(undefined);
  const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;
  useEffect(() => {
    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(`${serverAddress}/auth/check-auth`)
        .then(response =>{
          console.log(response);
          setAuthLogin(true);
        })
      .catch (error=> {
        console.error('Error checking authentication:', error);
        setAuthLogin(false);
      })
    };
    checkAuthToken();
  }, []);

  return authLogin;
}

export default useAuth;
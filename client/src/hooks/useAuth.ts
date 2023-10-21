import { useState, useEffect } from 'react';
import axios from 'axios';
import { error } from 'console';

function useAuth() {
  const [authLogin, setAuthLogin] = useState<boolean | undefined>(undefined);
  const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;
  useEffect(() => {
    // Function to check the validity of the JWT token on the server
    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await axios.get(`${serverAddress}/auth/check-auth`)
        .then(response =>{
          console.log(response);
          setAuthLogin(true);
        })
      .catch (error=> {
        // Handle error (e.g., network error)
        console.error('Error checking authentication:', error);
        setAuthLogin(false);
      })
    };

    // Call the function to check the JWT token when the component mounts
    checkAuthToken();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return authLogin;
}

export default useAuth;
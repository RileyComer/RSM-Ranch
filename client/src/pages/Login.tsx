import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const serverAddress = process.env.REACT_APP_SERVER_ADDRESS;

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${serverAddress}/auth/login`, {
        username,
        password,
      });
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        navigate('/admin/home');
      }else{
        console.error('Invalid Info');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <main>
      <div className='content-container'>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </main>
  );
}

export default Login;
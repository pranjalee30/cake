import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? 'http://localhost:3000/login' : 'http://localhost:3000/signup';
      const response = await axios.post(url, { username, password });
      setMessage(response.data.message);
      if (response.data.status === 'success' && isLogin) {
        onClose();
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-popup">
      <div className="login-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button"type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p onClick={toggleMode} className="toggle-link">
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default Login;

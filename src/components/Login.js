import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext.js'; // Import your useAuth hook
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login({ onClose }) {
  const { login } = useAuth(); // Access login function
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? 'http://localhost:5000/login' : 'http://localhost:5000/signup';
      const response = await axios.post(url, { username, password });
      setMessage(response.data.message);
      if (response.data.status === 'success' && isLogin) {
        login(username); // Pass the username to the context
        onClose(); // Close the login modal
      }
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message); // Log detailed error
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
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <button className="login-button" type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
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

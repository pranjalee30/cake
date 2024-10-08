import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FaGoogle,FaFacebook, FaTwitter } from 'react-icons/fa';

import './Login.css';

const Login = ({theme}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulated authentication logic
    if (email === 'user@example.com' && password === 'password123') {
      setError('');
      // If Remember Me is checked, save the email to local storage
      if (rememberMe) {
        localStorage.setItem('rememberMe', email);
      }
      // Redirect to another page after successful login
      window.location.href = '/dashboard';  // Redirect to a dashboard page (or any other page)
    } else {
      setError('Invalid email or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={theme ?"dark-login-container" :"login-container"}>
      <div className="login-form">
        <button className="close-button">×</button>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group ">
            <label>Password</label>
            <div className="password-eye">
            <input 
              type={showPassword ? 'text' : 'password'} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
            </div>
          </div>
          <div className="input-group remember-me">
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <label>Remember Me</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="oauth-buttons">
          <button className="oauth-button google"><FaGoogle/></button>
          <button className="oauth-button facebook"><FaFacebook/></button>
          <button className="oauth-button twitter"><FaTwitter/></button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="forgot-password">
          <a href="/reset-password">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

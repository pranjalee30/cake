import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import Login from './Login.js';
import { useAuth } from './AuthContext.js'; // Import useAuth hook

function Header({ theme, toggleTheme }) {
  const { username, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileDropdownRef = useRef(null); // Create a ref for the profile dropdown

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleClickOutside = (event) => {
    if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
      setShowProfileDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <nav className="navigation">
        <a href="/cake">
          <h1 className="company-name">
            <span role="img" aria-label="cake">👨‍🍳</span>Cake Creations
          </h1>
        </a>
        <ul className="list">
          <li><a href="#home">Home</a></li>
          <li><a href="#cart"><FontAwesomeIcon icon={faOpencart} />Cart</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#login" onClick={toggleLogin}>Login</a></li>
          <li className="profile-menu" onClick={toggleProfileDropdown}>
            <a href="#profile">Profile</a>
            {showProfileDropdown && (
              <div ref={profileDropdownRef} className="profile-dropdown">
                {username ? (
                  <>
                    <p>Username: {username}</p>
                    <a href="#profile">View Profile</a>
                    <a href="#logout" onClick={logout}>Logout</a>
                  </>
                ) : (
                  <p>Please log in to see profile details</p>
                )}
              </div>
            )}
          </li>
          <li>
            <div className="theme-toggle">
              <span role="img" aria-label="sun">🌞</span>
              <Switch
                onChange={toggleTheme}
                checked={theme === "dark"}
                offColor="#ADD8E6"
                onColor="#00000"
                uncheckedIcon={false}
                checkedIcon={false}
              />
              <span role="img" aria-label="moon">🌜</span>
            </div>
          </li>
        </ul>
      </nav>
      {showLogin && <Login onClose={toggleLogin} />}
    </header>
  );
}

export default Header;

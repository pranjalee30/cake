import React, { useState } from "react";
import "./Header.css";
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import Login from './Login.js';

function Header({ theme, toggleTheme }) {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

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
          <li><a href="#cart"> <FontAwesomeIcon icon={faOpencart} />Cart</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login" onClick={toggleLogin}>Login</a></li>
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

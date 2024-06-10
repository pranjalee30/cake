import React from "react";

function Header() {
  return (
    /* Header Section */
    <header className="header">
      <div className="scrolling-text">
        <div>Welcome to Cake Creations!</div>
      </div>
      {/* Navigation Menu */}
      <nav className="navigation">
        <a href="/">
          <h1 className="CompanyName">Cake Creations</h1>
        </a>
        <ul className="list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#cakes">Cakes</a>
          </li>
          <li>
            <a href="#aboutus">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;

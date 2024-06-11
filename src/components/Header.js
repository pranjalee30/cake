import React from "react";

function Header({ toggleTheme, darkTheme }) {
  return (
    /* Header Section */
    <section className="header">
      {/* Navigation Menu */}
      <nav className="navigation">
        <a href="/cake">
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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <a onClick={toggleTheme}>{darkTheme ? "🌞" : "🌚"}</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;

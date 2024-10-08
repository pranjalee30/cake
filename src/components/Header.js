import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';

function Header({Theme}) {
  const {theme,setTheme} =Theme ;
  return (
    <header className={theme ? "header darkHeader" : "header lightHeader"}>
      <nav className="navigation">
        <Link to="/">
          <h1 className="company-name">
          Cake Creations
          </h1>
        </Link>
        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart"><FontAwesomeIcon icon={faOpencart} /> Cart</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li>
            <div className="theme-toggle">
              <span role="img" aria-label="sun">🌞</span>
              <Switch
                onChange={()=>{return setTheme(!theme)}}
                checked ={theme===true}
                offColor="#ADD8E6"
                onColor="#000000"
                uncheckedIcon={false}
                checkedIcon={false}
              />
              <span role="img" aria-label="moon">🌜</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

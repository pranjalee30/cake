import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="icons first">
        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
      </div>
      <p className="copyright">&copy; 2024 Cake Creations. All rights reserved.</p>
      <p className="copyright">Made with ❤️ Love</p>
    </footer>
  );
}

export default Footer;

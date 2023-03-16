import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="footer">
      <a className="m-2" href="https://github.com/sieraford">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className="m-2" href="https://www.linkedin.com/in/siera-ford">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </footer>
  );
};

export default Footer;
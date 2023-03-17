import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer className="footer">
      <a className="m-2" href="https://github.com/sieraford" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a className="m-2" href="https://www.linkedin.com/in/siera-ford" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a className="m-2" href="https://twitter.com/siera_ford" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </footer>
  );
};

export default Footer;
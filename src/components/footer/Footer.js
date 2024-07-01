import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; // Add your CSS styling here

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <a href="mailto:eshwaran.krishnan1@gmail.com" className="footer-link">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.linkedin.com/in/eshwaran-krishnan" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/lol882192" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

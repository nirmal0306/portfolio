// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <p>© {new Date().getFullYear()} Nirmal Barot. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

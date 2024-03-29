import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">My Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import './css/Nav.css'
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

interface NavTopProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavTop: React.FC<NavTopProps> = ({ isMenuOpen, toggleMenu }) => {

  return (
    <nav className='nav-top'>
        <div className='logo-container'>
        <Link className='link' to="/login">
          <h3 className='text highlight light-container'>RSM Ranch</h3>
        </Link>
        </div>
        <div className='menu'>
          <button className={`menu-toggle ${isMenuOpen ? 'on' : 'off'}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <div className='link-container'>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/horse-sales">Horse Sales</Link>
          <Link className='link' to="/our-horses">Our Horses</Link>
          <Link className='link' to="/sold">Sold</Link>
          <Link className='link' to="/blog">Blog</Link>
          <Link className='link' to="/photos">Photos</Link>
          <ThemeSwitcher />
        </div>
      </nav>
  );
};

export default NavTop;
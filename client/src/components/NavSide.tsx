import React from 'react';
import './css/Nav.css'
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

interface NavSideProps {
  isMenuOpen: boolean;
}

const NavSide: React.FC<NavSideProps> = ({isMenuOpen}) => {

  return (
    <nav className={`nav-side ${isMenuOpen ? 'open' : ''}`}>
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
export default NavSide;
import React from 'react';
import './css/Nav.css'
import './css/ThemeSwitcher.css'
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

interface NavTopStaticProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavTopStatic: React.FC<NavTopStaticProps> = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();

  return (
    <div className='nav-static'>
      <nav className='nav-top'>

        <div className='logo-container'>
          <Link className='link' to="/">
            <h2 className='logo'>RSM Ranch</h2>
          </Link>
        </div>
        <div className='logo-border'>
          <div className='diagonal-line' />
        </div>
        <div className='menu'>
          <button className={`menu-toggle ${isMenuOpen ? 'on' : 'off'}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <div className='link-container'>
          <Link className={`action link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
          <Link className={`action link ${location.pathname === '/horse-sales' ? 'active' : ''}`} to="/horse-sales">Horse Sales</Link>
          <Link className={`action link ${location.pathname === '/our-horses' ? 'active' : ''}`} to="/our-horses">Our Horses</Link>
          <Link className={`action link ${location.pathname === '/sold' ? 'active' : ''}`} to="/sold">Sold</Link>
          <Link className={`action link ${location.pathname === '/blog' ? 'active' : ''}`} to="/blog">Blog</Link>
          <Link className={`action link ${location.pathname === '/photos' ? 'active' : ''}`} to="/photos">Photos</Link>
          <ThemeSwitcher />
        </div>
      </nav>
      <div className='contact action'>
        Contact us
      </div>
    </div>
  );
};

export default NavTopStatic;
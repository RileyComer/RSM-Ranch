import React from 'react';
import './css/Hero.css';
import image from '../assets/image1.jpeg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero-container' style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay crow">
        <div className='c'>
          <div>
            <h1>RSM Ranch</h1>
          </div>
          <div>
            <h2>Best horses in the peace region</h2>
          </div>
        </div>
        <div className='c'>
          <Link to="/horse-sales">
            <button className='button action'>Browse Horses</button>
          </Link>
        </div>
        <div className='c'>

        </div>
      </div>
    </div>
  );
};

export default Hero;
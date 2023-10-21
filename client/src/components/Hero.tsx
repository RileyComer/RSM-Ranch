import React, { ReactNode } from 'react';
import './css/Hero.css'

interface HeroProps {
  imgSrc: string;
  header: string;
  subHeader: string;
  children?: ReactNode;
}

const Hero: React.FC<HeroProps> = ({ imgSrc, header, subHeader, children }) => {

  return (
    <div className='hero-container' style={{backgroundImage: "url(" + `${imgSrc}` + ")"}}>
      <div className="hero-overlay">
        <h1>{header}</h1>
        <h2>{subHeader}</h2>
        {children && <div className='hero-children'>{children}</div>}
      </div>
    </div>
  );
};
export default Hero;
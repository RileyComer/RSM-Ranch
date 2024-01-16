import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import About from '../pages/About';
import OurHorses from '../pages/OurHorses';
import Sold from '../pages/Sold';
import Photos from '../pages/Photos';
import HorseSales from '../pages/HorseSales';
import Blog from '../pages/Blog';
import NavTop from '../components/NavTopStatic';
import NavSide from '../components/NavSide';
import HorseDetails from '../pages/HorseDetails';

function ClientRoutes() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <NavTop isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className='mid-container'>
        <NavSide isMenuOpen={isMenuOpen} />
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="horse-sales" element={<HorseSales />} />
          <Route path="our-horses" element={<OurHorses />} />
          <Route path="sold" element={<Sold />} />
          <Route path="/horse/:id" element={<HorseDetails/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="photos" element={<Photos />} />
        </Routes>
      </div>
    </div>
  );
}

export default ClientRoutes;
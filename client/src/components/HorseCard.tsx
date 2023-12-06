import React, { useEffect } from 'react';
import Horse from '../types/Horse';
import { Link } from 'react-router-dom';

interface HorseCardProps {
  horse: Horse;
  link: string;
}

const HorseCard: React.FC<HorseCardProps> = ({horse, link}) => {

  return (
    <Link to={`${link}/${horse._id}`} className="horse-card">
      <h2>{horse.name}</h2>
      <p>{horse._id}</p>
      <p>Breed: {horse.breed}</p>
    </Link>
  );
};
export default HorseCard;
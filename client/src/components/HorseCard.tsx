import React, { useEffect } from 'react';
import Horse from '../types/Horse';
import { Link } from 'react-router-dom';

interface HorseCardProps {
  horse: Horse;
}

const HorseCard: React.FC<HorseCardProps> = ({horse}) => {

  useEffect(() => {
    console.log(horse);
  }, []);

  return (
    <Link to={`/horse/${horse._id}`} className="horse-card">
      <h2>{horse.name}</h2>
      <p>{horse._id}</p>
      <p>Breed: {horse.breed}</p>
    </Link>
  );
};
export default HorseCard;
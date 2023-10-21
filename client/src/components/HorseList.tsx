import React from 'react';
import Horse from '../types/Horse';
import HorseCard from './HorseCard';

interface HorseListProps {
  horses: Horse[];
}

const HorseList: React.FC<HorseListProps> = ({horses}) => {

  return (
    <div className="horse-list">
      {horses.map((horse) => (
        <HorseCard key={horse._id} horse={horse} />
      ))}
    </div>
  );
};
export default HorseList;
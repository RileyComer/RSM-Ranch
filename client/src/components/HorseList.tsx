import React from 'react';
import Horse from '../types/Horse';
import HorseCard from './HorseCard';

interface HorseListProps {
  horses: Horse[];
  link: string;
}

const HorseList: React.FC<HorseListProps> = ({horses, link}) => {

  return (
    <div className="horse-list">
      {horses.map((horse) => (
        <HorseCard key={horse._id} horse={horse} link={link} />
      ))}
    </div>
  );
};
export default HorseList;
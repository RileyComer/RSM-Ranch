import React from 'react';
import { useTheme } from '../ThemeContext';
import lightIcon from '../assets/DarkModeIcon.png';
import darkIcon from '../assets/LightModeIcon.png';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      <img className='icon' src={theme === 'dark' ? lightIcon : darkIcon}/>
    </button>
  );
};

export default ThemeSwitcher;
import { useState, useEffect, SetStateAction } from 'react';
import './output.css';
import AppRouter from './AppRouter';
import { useTheme } from './ThemeContext';

function App() {

  const { theme } = useTheme();

  useEffect(() => {
    document.title = 'RSM Ranch';
  }, []);

  return (
    <div className={`App ${theme}`}>
      <AppRouter />
    </div>
  );
}

export default App;

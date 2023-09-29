import React from 'react';
import { useDarkMode } from '../context/DarkModeContext'; 

const DarkModeButton: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className='darkmode-button-container'>
      <button onClick={toggleDarkMode} className='dark-buton'>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default DarkModeButton;
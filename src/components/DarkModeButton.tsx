import React from "react";
import { useState } from 'react';

const DarkModeButton: React.FC = () => {

    const [darkMode, setDarkMode] = useState(false);
    
    return (
        <div className="">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    )
}

export default DarkModeButton
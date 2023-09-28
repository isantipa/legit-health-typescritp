import React from 'react';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';

const SocialIcons: React.FC = () => {
    return (
        <div className="rrss-container">
            <a href="https://www.facebook.com/Legit.Health/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={facebook} alt="Facebook Icon" />
            </a>
            <a href="https://twitter.com/LegitHealth_" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={twitter} alt="Twitter Icon" />
            </a>
            <a href="https://www.instagram.com/legit.health/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={instagram} alt="Instagram Icon" />
            </a>
        </div>
    )
}

export default SocialIcons
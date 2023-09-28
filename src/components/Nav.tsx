import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const Nav: React.FC = () => {
  return (
    <div className='nav-container'>
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/create-user">Create User</Link>
            </li>
            {/*Here, the social media icons will be loaded.*/}
            <SocialIcons />
        </ul>
        </nav>
    </div>
  );
}

export default Nav;
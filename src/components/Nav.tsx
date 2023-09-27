import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <div>
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/create-user">Create User</Link>
            </li>
        </ul>
        </nav>
    </div>
  );
}

export default Nav;
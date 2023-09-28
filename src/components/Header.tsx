import React from "react";
import Nav from './Nav';
import logo from "../assets/images/logo.png";

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <div className="title-container">
                {/*<h1>Users App</h1>*/}
                <Nav />
            </div>
            <img src={logo} alt="Legit Health Logo" />
        </div>
    )
}

export default Header;
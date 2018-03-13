import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container-fluid home-header">
                <div className="container">
                    <div className="header-container">
                        <h2 className="text-uppercase">
                            let's be creative
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container menu-container">
                <div className="row">
                    <Link to = "/" className="col nav-link">
                        <span className="logoname">RMR</span>   
                    </Link>
                    <nav className="col">
                        <ul className="nav nav-pills nav-justified">
                            <li className="nav-item">
                                <NavLink exact activeClassname="is-active" to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassname="is-active" to="/portoflio" className="nav-link">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassname="is-active" to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    );
};

export default Header;
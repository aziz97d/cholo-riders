import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="brand-logo">
                <h2>Cholo Riders</h2>
            </div>
            <div className="navigation">
                    
                    <Link to="/" className="navigation-item">Home</Link>
                    <Link to="/destination/01" className="navigation-item">Destination</Link>
                    <Link className="navigation-item">Blog</Link>
                    <Link className="navigation-item">Contact</Link>
                    <Link to="/login" className="navigation-item">Login</Link>
                
            </div>
        </div>
    );
};

export default Header;
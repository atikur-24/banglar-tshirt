import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h2>Banglar <span id='brand-title'>T-Shirt</span></h2>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/review'>Order Review</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </div>
    );
};

export default Header;
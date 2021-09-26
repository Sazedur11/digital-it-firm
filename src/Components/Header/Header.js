import React from 'react';
import logo from '../../image/logo.png';
import Content from '../Content/Content';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <img src={logo} alt="" />
                <nav>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact Us</a>
                </nav>
            </div>
            <div>
                <Content></Content>
            </div>
        </>
    );
};

export default Header;
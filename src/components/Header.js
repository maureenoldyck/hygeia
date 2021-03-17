import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        
        <div className="absolute h-auto z-50">
            <div className="flex flex-row pl-4 pt-6 transform scale-50" id="logo">
                <a href="/" className="flex flex-row">
                    <img src={logo} alt="Logo"/>
                    <h1 className="flex items-end text-5xl py-4">ygeia</h1>
                </a>
            </div>
        </div>
    );
}

export default Header;
import React from 'react';
import logo from './assets/logo.svg';

const Header = () => {
    return (
        
        <div className="h-6 bg-yellow-600 flex flex-row">
            <img src={logo} alt="Logo"/>
        </div>
    );
}

export default Header;
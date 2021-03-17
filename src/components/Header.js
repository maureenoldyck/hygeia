import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        
        <div className="absolute h-auto z-50 flex flex-row w-full">
            <div className="flex flex-row pl-4 pt-6 transform scale-50" id="logo">
                <a href="/" className="flex flex-row">
                    <img src={logo} alt="Logo"/>
                    <h1 className="flex items-end text-5xl py-4">ygeia</h1>
                </a>
            </div>
            <div className="flex flex-row w-full justify-between">
                <nav className="w-full">
                    <ul className="flex flex-row justify-around">
                        <li><a href="/profile">Searchbar</a></li>
                        <li><a href="/profile">Feed</a></li>
                        <li><a href="/profile">Forums</a></li>
                        <li><a href="/profile">Chatrooms</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/profile">Nots</a></li>
                        <li><a href="/profile">Mess</a></li>
                    </ul>
                </nav>

                <div id="logout">
                    <a href="/">Logout</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
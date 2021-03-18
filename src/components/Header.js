import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        
        <div className="absolute h-auto bg-green-100 z-50 flex flex-row p-4 w-full">
            <div className="flex flex-row" id="logo">
                <a href="/" className="flex flex-row h-10">
                    <img src={logo} alt="Logo"/>
                    <h1 className="flex py-1 text-2xl">ygeia</h1>
                </a>
            </div>

            <div className="flex flex-row w-full justify-between">

                <nav className="flex flex-row w-full">

                    <div className="flex flex-row" id="search">
                        <input type="search" placeholder="Search.." />
                        <button>Go!</button>
                    </div>

                    <ul className="flex flex-row w-full pl-60 justify-around mx-34">
                        <li><a href="/profile">Feed</a></li>
                        <li><a href="/profile">Forums</a></li>
                        <li><a href="/profile">Chatrooms</a></li>
                    </ul>

                    <ul className="flex flex-row w-full justify-around mx-36">
                        <li><a href="/profile">Nots</a></li>
                        <li><a href="/profile">Mess</a></li>
                    </ul>

                </nav>

                <div id="logout">
                    <a href="/profile">Profile</a>
                    <a href="/">Logout</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
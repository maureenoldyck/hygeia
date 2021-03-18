import React from 'react';
import logo from '../assets/logo.svg';
import feed from '../assets/feed.svg';
import chatroom from '../assets/chatroom.svg';
import forums from '../assets/forums.svg';

import notifications from '../assets/notifications-none.svg';
import messages from '../assets/messages-none.svg';

import search from '../assets/search.svg'


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
                        <img src={search} alt="search" className="h-8 w-8"/>
                    </div>

                    <ul className="flex flex-row w-full pl-60 justify-around mx-34 z-50">
                        <li><a href="/profile"><img src={feed} alt="Feed" className="h-8 w-8"/></a></li>
                        <li><a href="/profile"><img src={forums} alt="forums" className="h-8 w-8"/></a></li>
                        <li><a href="/profile"><img src={chatroom} alt="chatroom" className="h-8 w-8"/></a></li>
                    </ul>

                    <ul className="flex flex-row w-full justify-around mx-36">
                        <li><a href="/profile"><img src={notifications} alt="notifications" className="h-8 w-8"/></a></li>
                        <li><a href="/profile"><img src={messages} alt="messages" className="h-8 w-8"/></a></li>
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
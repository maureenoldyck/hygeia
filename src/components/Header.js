import React from 'react';
import logo from '../assets/images/logo.svg';
import feed from '../assets/images/feed.svg';
import chatroom from '../assets/images/chatroom.svg';
import forums from '../assets/images/forums.svg';

import notifications from '../assets/images/notifications-none.svg';
import messages from '../assets/images/messages-none.svg';

import search from '../assets/images/search.svg';
import finger from '../assets/images/finger.svg';
//TODO: Add dropdown menu to the profile div

const Header = () => {
    return (
        
        <div className="absolute top-0 left-0 h-20 bg-green-100 z-50 flex flex-row p-4 w-full">
            <div className="flex flex-row" id="logo">
                <a href="/" className="flex flex-row h-10">
                    <img src={logo} alt="Logo"/>
                    <h1 className="flex py-1 text-2xl">ygeia</h1>
                </a>
            </div>

            <div className="flex flex-row w-full justify-between">

                <nav className="flex flex-row w-full">

                    <div className="flex flex-row" id="search">
                        <input type="search" placeholder="Search.." className="rounded-xl pl-4"/>
                        <img src={search} alt="search" className="h-8 w-8 ml-2"/>
                    </div>

                    <ul className="flex flex-row w-full justify-center mr-24">
                        <li><a href="/profile"><img src={feed} alt="Feed" className="h-8 w-8 mx-16"/></a></li>
                        <li><a href="/profile"><img src={forums} alt="forums" className="h-8 w-8 mx-16"/></a></li>
                        <li><a href="/profile"><img src={chatroom} alt="chatroom" className="h-8 w-8 mx-16"/></a></li>
                    </ul>

                    <ul className="flex flex-row mr-6 justify-end">
                        <li><a href="/profile"><img src={notifications} alt="notifications" className="h-8 w-8 ml-6"/></a></li>
                        <li><a href="/profile"><img src={messages} alt="messages" className="h-8 w-8 ml-6"/></a></li>
                    </ul>

                </nav>

                <div id="logout">
                    <img src={finger} alt="finger" className="h-8 w-8 mx-16"/>
                    
                    {/* <a href="/profile">Profile</a>
                    <a href="/">Logout</a> */}
                </div>
            </div>
        </div>
    );
}

export default Header;
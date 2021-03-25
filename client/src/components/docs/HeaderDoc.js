import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

import search from '../../assets/images/search.svg';
//TODO: Add dropdown menu to the profile div

const HeaderDoc = () => {
    return (
        
        <div className="absolute top-0 left-0 h-20 bg-green-100 z-50 flex flex-row p-4 w-full">
            <div className="flex flex-row" id="logo">
                <Link to="/" className="flex flex-row h-10">
                    <img src={logo} alt="Logo"/>
                    <h1 className="flex py-1 text-2xl">ygeia</h1>
                </Link>
            </div>

            <div className="flex flex-row w-full justify-between">

                <nav className="flex flex-row w-full">

                    <div className="flex flex-row" id="search">
                        <input type="search" placeholder="Search.." className="rounded-xl pl-4"/>
                        <img src={search} alt="search" className="h-8 w-8 ml-2"/>
                    </div>

                </nav>
            </div>
        </div>
    );
}

export default HeaderDoc;
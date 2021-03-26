import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/search.svg';
import menuToggle from '../../assets/images/menuToggle.svg';


const HeaderHome = () => {

    return (
        
    <div className="absolute top-0 left-0 h-20 bg-brown-clay flex flex-row p-4 w-full text-white">
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
                    <img src={search} alt="search" className="h-8 w-8 ml-2 mt-2"/>
                </div>
                <div className="w-full flex justify-end mt-3 topNav" id="topNav">
                    <ul className="justify-between flex flex-row 2xl:w-1/2 2xl:text-lg w-nine md:w-3/4">
                        <li><Link className="hover:underline" to="/about-us">about us</Link></li>
                        <li><Link className="hover:underline" to="/contact-us">contact us</Link></li>
                        <li><Link className="hover:underline" to="/documentation">mental health documentation</Link></li>
                        <li><Link className="hover:underline border rounded-lg px-3 py-2" to="/profile"> sign up </Link></li>
                        <li><Link className="hover:underline border rounded-lg px-3 py-2 bg-brown-yellow" to="/profile"> sign in </Link></li>
                        <li> 
                            <label for="menu-toggle" className="cursor-pointer lg:hidden block">
                                <img src={menuToggle} alt=""/>
                            </label>
                            <input type="checkbox" className="hidden" id="menu-toggle"/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    );
}

export default HeaderHome;
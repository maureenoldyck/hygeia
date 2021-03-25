import React from 'react';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/search.svg';
import { Link } from 'react-router-dom';


const HeaderHome = () => {

    const seeMenu = () => {
        const x = document.getElementById("mobile-menu");
        if (x.className === "hidden") {
            x.className += "block";
        } else {
            x.className = "hidden";
        }
    }

    return (


        <div>
            <nav className="bg-brown-clay text-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <div className="flex flex-row" id="logo">
                                    <Link to="/" className="flex flex-row h-10">
                                        <img src={logo} alt="Logo"/>
                                        <h1 className="flex py-1 text-2xl">ygeia</h1>
                                    </Link>
                                    <div className="flex flex-row" id="search">
                                        <input type="search" placeholder="Search.." className="rounded-xl pl-4"/>
                                        <img src={search} alt="search" className="h-8 w-8 ml-2 mt-2"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden lg:block">
                            <div className="flex space-x-4">
                                <Link className="hover:underline mt-1" to="/about-us">about us</Link>
                                <Link className="hover:underline mt-1" to="/contact-us">contact us</Link>
                                <Link className="hover:underline mt-1" to="/documentation">mental health documentation</Link>
                                <Link className="hover:underline border rounded-lg px-3 py-1" to="/profile"> sign up </Link>
                                <Link className="hover:underline border rounded-lg px-3 py-1 bg-brown-yellow" to="/profile"> sign in </Link>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                            <button onClick={seeMenu}  type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 flex justify-evenly items-center">
                        <Link className="hover:underline" to="/about-us">about us</Link>
                        <Link className="hover:underline" to="/contact-us">contact us</Link>
                        <Link className="hover:underline" to="/documentation">mental health documentation</Link>
                        <Link className="hover:underline border rounded-lg px-3 py-2" to="/profile"> sign up </Link>
                        <Link className="hover:underline border rounded-lg px-3 py-2 bg-brown-yellow" to="/profile"> sign in </Link>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default HeaderHome;

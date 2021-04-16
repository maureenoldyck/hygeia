import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/search.svg';
import Modal from '../Modal';
import Login from '../Login';

const HeaderHome = () => {

    const [keyword, setKeyword] = useState('');

    // useEffect(() => {
    //     fetch(`https://hygeia-test.herokuapp.com/api/login`, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": 'application/json,  charset=UTF-8', 
    //             'Accept': 'application/json, text/html',
    //         },
    //         credentials: 'include', 
    //         referrerPolicy: 'origin',
    //         mode: 'cors',
    //         referrer: document.location.origin 
    //     })
    //     .then(res => res.json())
    //     .then((res) => { 
    //     });
    // }, []);


    const showModal = () => {
        const modal = document.getElementById("loginModal");

        if (modal.className === "hidden") {
            modal.className += "block";
        } else {
            modal.className = "hidden";
        }
    }

    const closeModal = () => {
        const modal = document.getElementById("loginModal");

        if (modal.className === "hidden") {
            modal.className += "block";
        } else {
            modal.className = "hidden";
        }
    }
    

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
            <div id="loginModal" className="hidden">
                <Modal>
                    <span onClick={closeModal} className="close text-2xl ml-3 text-red-400  hover:text-red-500 cursor-pointer">&times;</span>
                    <Login state={"loginStatus"} />
                </Modal>
            </div>

            <nav className="bg-brown-clay text-white">
                <div className="mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="md:flex-1 flex items-center justify-center sm:justify-start">
                            <div className="flex items-center">
                                <div className="flex flex-row" id="logo">
                                    <Link to="/" className="flex flex-row h-10">
                                        <img src={logo} alt="Logo"/>
                                        <h1 className="flex py-1 text-2xl">ygeia</h1>
                                    </Link>
                                    <div className="flex flex-row md:w-full" id="search">
                                        <input type="search" placeholder="Search.." className="rounded-xl pl-4 w-2/5 md:w-full text-black" onChange={(e) => {setKeyword(e.target.value)}}/>
                                        <Link to={`/search/${keyword}`}> <button><img src={search} alt="search" className="h-6 sm:h-8 sm:w-8 ml-2 mt-2"/></button></Link>     
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden lg:block">
                            <div className="flex space-x-4">
                                <Link className="hover:underline mt-2" to="/about-us">about us</Link>
                                <Link className="hover:underline mt-2" to="/contact-us">contact us</Link>
                                <Link className="hover:underline mt-2" to="/documentation">mental health documentation</Link>
                                <a className="hover:underline border rounded-lg px-3 py-2" href="#community"> sign up </a>
                                <button id='loginButton' className='hover:underline border rounded-lg px-3 py-2 bg-brown-yellow' onClick={showModal}> log in </button>                    
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                            <button onClick={seeMenu}  type="button" className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 flex justify-evenly items-center flex-col md:flex-row">
                        <Link className="hover:underline h-full px-3 py-2 w-full text-center border rounded-lg md:border-none" to="/about-us">about us</Link>
                        <Link className="hover:underline h-full px-3 py-2 w-full text-center border rounded-lg md:border-none" to="/contact-us">contact us</Link>
                        <Link className="hover:underline h-full px-3 py-2 w-full text-center border rounded-lg md:border-none" to="/documentation">mental health documentation</Link>
                        <Link to="#community" className="hover:underline border rounded-lg px-3 py-2 h-full w-full text-center mr-1" > sign up </Link>
                        <button id='loginButton' className='hover:underline border rounded-lg px-3 py-2 bg-brown-yellow' onClick={showModal}> log in </button>                    
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default HeaderHome;
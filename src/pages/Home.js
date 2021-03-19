import React from 'react';
import logo from '../assets/images/logo.svg';

const Home = () => {
    return (
        
        <div className="h-screen flex flex-col">

            <div className="flex flex-row h-screen z-0">
                <section className="bg-blue-200 w-2/3" id="left-up">
                    <div className="pt-4" id="documention-nav">
                        <nav>
                            <ul className="flex flex-row justify-around">
                                <li><a href="/">What is mental Health?</a></li>
                                <li><a href="/help">How can I (get) help?</a></li>
                                <li><a href="/">Can I recover?</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div id="carrousel">
                        <p>ne carrousel da we nog moeten make euh of vinden ofzo dink.</p>
                    </div>
                </section>

                <section className="bg-green-200 w-1/3" id="right-up">
                    <div className="flex flex-row pl-16 pt-12 mb-16" id="logo">
                        <a href="/profile" className="flex flex-row">
                            <img src={logo} alt="Logo"/>
                            <h1 className="flex items-end text-5xl py-4">ygeia</h1>
                        </a>
                    </div>

                    <div className="flex w-full mb-5">
                        <form className="flex flex-col w-full ml-16 mr-32 text-2xl">
                            <label className="mb-1">Name/email</label>
                            <input placeholder="Your Name ..." className="bg-red-100 pl-2 py-2 mb-6 rounded-lg"/>

                            <label className="mb-1">Password</label>
                            <input type="password" placeholder="Your password ..." className="bg-red-100 pl-2 py-2 rounded-lg"/>

                            <a href="/" className="flex justify-end text-base mb-4"><span>Forgot password?</span></a>

                            <div className="flex flex-row items-center">
                                <input type="checkbox" className="w-5 h-5 mr-2" />
                                <label>Remember me next time too!</label>
                            </div>

                            <div className="flex flex-row my-6 justify-around">
                                <button className="bg-green-vrt hover:bg-green-vrtdark text-white w-32 py-2 px-4 rounded-full">Login</button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 py-2 px-4 rounded-full">Register</button>
                            </div>
                        </form>
                    </div>

                    <div className="transform rotate-contact" id="about-us">
                        <ul className="flex flex-row justify-around">
                            <li><a href="/">About us!</a></li>
                            <li><a href="/">Contact us!</a></li>
                        </ul>
                    </div>
                </section>
            </div>

            <footer className="bg-cover w-full h-1/4 absolute bottom-0 left-0" id="footer">
                <div className="flex flex-row w-full relative transform rotate-contact translate-y-20 justify-around " id="sponsors">
                    <img src="" alt="img1"/>
                    <img src="" alt="img2"/>
                    <img src="" alt="img3"/>
                    <img src="" alt="img4"/>
                    <img src="" alt="img5"/>
                </div>
                <div className="absolute w-full text-center bottom-0 " id="copyright">
                    <p>©Hygeia - 2021 | <a href="#">Terms of service</a></p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoodTracker from '../components/MoodTracker.js';


const Chatroom = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="flex justify-around bg-brown-white flex-col min-h-full z-0">

                <div className="flex justify-around flex-row h-screen z-0 mb-32 lg:mt-20 mt-14 px-12" >

                    <section className="bg-brown-sand bg-opacity-25 justify-around w-full h-screen flex flex-row" id="search-filter">

                    </section>

                    <MoodTracker />
                </div>

            </div>
            
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Room;
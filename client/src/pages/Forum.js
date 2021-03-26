import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import Unavailable from '../components/Unavailable.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoodTracker from '../components/MoodTracker.js';


const Forum = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="flex justify-around bg-brown-white flex-col min-h-screen h-auto">

                <div className="flex items-center justify-center flex-row z-0 m-auto px-12" >

                    <div id="unfinished">
                        <Unavailable />
                    </div>

                </div>

            </div>
            
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Forum;
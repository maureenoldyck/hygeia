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

            <div className="flex justify-around bg-yellow-banana flex-col min-h-full ">

                <div className="flex justify-around flex-row h-screen z-0 mb-32 mt-28 px-12" >

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
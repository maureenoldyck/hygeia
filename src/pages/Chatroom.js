import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Chatroom = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="flex justify-around bg-yellow-banana flex-col min-h-full ">

                <div className="flex justify-around flex-row h-screen z-0 mb-32 mt-28 px-12" >

                </div>

            </div>
            
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Chatroom;
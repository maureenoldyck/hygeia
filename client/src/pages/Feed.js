import React, {useEffect, useState} from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import Unavailable from '../components/Unavailable.js';


const Feed = () => {
    const [LandingNav, setLandingNav] = useState('');
    const loggedIn = localStorage.getItem('loggedIn')

    useEffect(() => {
        if ( loggedIn === "true") {
            setLandingNav(<Header user={localStorage.getItem('userID')} />)
        }  else {
            window.location = "/";
        }
    }, [loggedIn]);
    
    return (
        <>
            <div>
                {LandingNav}
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

export default Feed;
import React, {useEffect, useState} from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import Unavailable from '../components/Unavailable.js';


const Feed = () => {
    const [LandingNav, setLandingNav] = useState('');
  

    useEffect(() => {
        fetch("http://localhost:5000/api/login", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include', 
            referrerPolicy: 'origin',
            mode: 'cors',
referrer: document.location.origin 
        })
        .then(res => res.json())
        .then((res) => { 
            if (res.user) {
                setLandingNav(<Header user={50} />)
            } else {
                window.location.href = "/";
            }
        });
    }, []);
    
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
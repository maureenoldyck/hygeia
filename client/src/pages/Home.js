import React, { useState , useEffect } from 'react';
import HeaderHome from '../components/home/HeaderHome';
import Intro from '../components/home/Intro';
import Header from '../components/Header';
import About from '../components/home/About';
import Community from '../components/home/Community';
import FooterHome from '../components/home/FooterHome';
import HomeFooterLoggedIn from '../components/home/HomeFooterLoggedIn'


const Home = () => {

    const [LandingNav, setLandingNav] = useState('');
    const [hideregister, setHideRegister] = useState();
    const [footer, setFooter] = useState();

    useEffect(() => {
        fetch("http://localhost:5000/api/login", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include', 
        })
        .then(res => res.json())
        .then((res) => { 
            if (res.user) {
                setLandingNav(<Header />)
                setHideRegister()
                setFooter(<HomeFooterLoggedIn/>)
            } else {
                setLandingNav(<HeaderHome />)
                setHideRegister(<Community />)
                setFooter(<FooterHome />)
            }
        });
    }, []);

    return (
        <div className="min-h-screen bg-brown-sand">
            
            {LandingNav}
            <Intro/>
            <About/>
            {hideregister}
            {footer}

        </div>

    );
}

export default Home;
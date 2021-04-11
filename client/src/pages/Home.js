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
    const [activeState, setActiveState] = useState(false);
    const [userId, setUserId] = useState();

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
            console.log(res)
            if (res.loggedIn === true) {
                setActiveState(true)
                setUserId(res.user[0].id)
            } else {
                setActiveState(false)
            }
        });

         switch(activeState){
             case true:
                setLandingNav(<Header user={userId} />)
                setHideRegister()
                setFooter(<HomeFooterLoggedIn/>)
                break;
             case false: 
                setLandingNav(<HeaderHome />)
                setHideRegister(<Community />)
                setFooter(<FooterHome />)
                break;
             default:
                setLandingNav(<HeaderHome />)
                setHideRegister(<Community />)
                setFooter(<FooterHome />)
                break;
         }
    }, [activeState, userId]);

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
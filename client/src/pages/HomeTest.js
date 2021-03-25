import React from 'react';
import HeaderHome from '../components/home/HeaderHome'
import Intro from '../components/home/Intro'
import About from '../components/home/About'
import Community from '../components/home/Community';
import FooterHome from '../components/home/FooterHome';



const HomeTest = () => {
    return (
        <div className="min-h-screen bg-brown-sand">
    
            <HeaderHome/>
            <Intro/>
            <About/>
            <Community/>
            <FooterHome/>

        </div>

    );
}

export default HomeTest;
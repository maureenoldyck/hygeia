import React,{useState, useEffect}  from 'react';

import Header from '../components/Header.js';
import HeaderHome from '../components/home/HeaderHome.js';
import Footer from '../components/Footer.js';

import chatting from '../assets/images/chatting.svg'
import road from '../assets/images/road.svg'
import team from '../assets/images/team.svg'

const AboutUs = () => {

    const [LandingNav, setLandingNav] = useState('');

    useEffect(() => {
        fetch("https://hygeia-app.herokuapp.com/api/login", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include', 
            referrerPolicy: 'origin',
            mode: 'no-cors' 
        })
        .then(res => res.json())
        .then((res) => { 
            if (res.user) {
                setLandingNav(<Header user={res.user[0].id} />)
            } else {
                setLandingNav(<HeaderHome />)
            }
        });
    }, []);

    return (
        <>
            <div>
                {LandingNav}
            </div>

            <div className="flex justify-between bg-brown-white flex-col min-h-screen text-blue-naval">
            
                <div className="flex md:flex-row flex-col justify-center items-center">
                    <div className="md:w-1/2 p-12 hidden md:block">
                        <img src={chatting} alt="About us"/>
                    </div>
                    <div className="md:w-1/2 p-12">
                        <h1 className="text-center bg-blue-naval rounded-br-lg rounded-tl-lg py-3 2xl:text-lg 2xl:p-4 mb-8 text-white lg:w-1/5 w-1/2 self-center"> About Us </h1>
                        <p> Hygeia is a social mental health platform where you can talk openly about how you are feeling. This platform is designed with anonimity as first priority as we know that it is for most of us not easy to talk about your own mental health. We want Hygeia to be the place that people feel comfortable talking about their struggles, read about people experiences, help others and have a great community feeling. </p>
                        <br/>
                        <p> Hygeia is the Greek goddess of good health. </p>
                    </div>
                    <div className="md:w-1/2 p-12 md:hidden block">
                        <img src={chatting} alt="About us"/>
                    </div>
                    </div>
                
                <div className="flex md:flex-row flex-col justify-center items-center bg-brown-sand">
                    <div className="md:w-1/2 p-12">
                        <h1 className="text-center bg-blue-naval rounded-br-lg rounded-tl-lg py-3 2xl:text-lg 2xl:p-4 mb-8 text-white lg:w-1/5 w-1/2 self-center"> Our Mission </h1>
                        <p> Mental health should talked more openly about. Even as we seen a postive grow towards talking about mental health, it is still too many times seen as a taboo. We want to create a safe space for people who are struggling to find someone in their lives to talk about the things they are feeling day to day. </p>
                    </div>
                    <div className="md:w-1/2 p-12">
                        <img src={team} alt=""/>
                    </div>
            </div>

            <div className="flex md:flex-row flex-col justify-center items-center">
                    <div className="md:w-1/2 p-12 hidden md:block">
                        <img src={road} alt=""/>
                    </div>
                    <div className="md:w-1/2 p-12">
                        <h1 className="text-center bg-blue-naval rounded-br-lg rounded-tl-lg py-3 2xl:text-lg 2xl:p-4 mb-8 text-white lg:w-1/5 w-1/2 self-center"> Our Story </h1>
                        <p> This website is made possible through our junior web development training at BeCode Ghent. For our summer pastures (the last two months of our training), we could work on a project of our liking, showing the skills we attained and learning even more. We choose this project because we all feel close to the subject and want to help others that need a platform like this.</p>
                    </div>
                    <div className="md:w-1/2 p-12 block md:hidden">
                        <img src={road} alt=""/>
                    </div>
                </div>

            </div>
            
            <div className="mt-24">
                <Footer />
            </div>
        </>
    );
}

export default AboutUs;
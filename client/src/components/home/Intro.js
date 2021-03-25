import React from 'react';
import homeImage from '../../assets/images/home.svg'; 


const Intro = () => {
    return (
        
    <div className="flex flex-row mt-20 mb-24 mx-16 pt-32 min-h-full text-white 2xl:min-h-nine 2xl:pt-36 lg:mx-20">

        <div className="w-1/2">
            <h1 className="text-6xl mb-4 2xl:text-7xl md:text-4xl"> Sometimes you just need someone to talk to...</h1>
            <h5 className="text-2xl 2xl:text-3xl 2xl:mt-10 md:text-xl"> Hygeia is a mental health social platform where you can ask for help, offer help or just connect with people that will understand you.</h5>
            <div className="mt-10 2xl:mt-14 flex flex-col md:flex-row"> 
                <a href="#community" className="hover:underline bg-blue-naval rounded-br-lg rounded-tl-lg p-3 mr-5 2xl:text-lg 2xl:p-4"> Discover our community!</a>
                <a href="/documentation" className="hover:underline bg-brown-yellow rounded-br-lg rounded-tl-lg p-3 2xl:text-lg 2xl:p-4"> What is Mental Health?</a>
            </div>
        </div>

        <div className="w-1/2 lg:pt-0 pt-20">
            <img src={homeImage} alt="Chat"/>
        </div>

    </div>
    );
}

export default Intro;
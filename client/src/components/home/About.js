import React from 'react';
import {Link} from 'react-router-dom';
import ChatSVG from '../../assets/images/chat.svg';
import PrivacySVG from '../../assets/images/privacy.svg';
import DocumentationSVG from '../../assets/images/documentation.svg';


const About = () => {
    return (
        
    <div className="bg-brown-white text-blue-naval pb-20 2xl:py-32">

        <h1 className="text-3xl text-center py-14"> about Hygeia </h1>

        <div className="flex lg:flex-row flex-col lg:justify-evenly lg:items-stretch items-center">
            <Link to="/profile" className="bg-white rounded-xl shadow-md lg:w-1/4 w-nine mb-5">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <img className="h-48 object-fill w-48 " src={ChatSVG} alt="Chat"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> Chat Rooms and Forums </h2> </div>
                        <p className="mt-2 text-gray-500">Are you struggling with something and you don't have anyone to talk to in real life? That is where our chatrooms and forums come in. On Hygeia you will definitely find someone who will understand what you are feeling right now.</p>
                    </div>
                </div>
            </Link>
            <Link to="/documentation" className="bg-white rounded-xl shadow-md lg:w-1/4 w-nine mb-5">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <img className="h-48 object-fill w-48" src={DocumentationSVG} alt="Documentation"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> Read up on mental health </h2></div>
                        <p className="mt-2 text-gray-500">Hyegia provides you documentation about everything mental health. Are you just wondering how to get help or how to help a friend in need? You can find it in our documentation! </p>
                    </div>
                </div>
            </Link>
            <Link to="/terms-and-conditions" className="bg-white rounded-xl shadow-md lg:w-1/4 w-nine mb-5">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <img className="h-48 object-fill w-48" src={PrivacySVG} alt="Privacy"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> Privacy Guaranteed! </h2></div>
                        <p className="mt-2 text-gray-500">We value the privacy of our users. Our platform is designed that you can decide everything about your profile settings.</p>
                    </div>
                </div>
            </Link>
        </div>

    </div>
    );
}

export default About;
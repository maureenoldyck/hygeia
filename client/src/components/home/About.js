import React from 'react';
import ChatSVG from '../../assets/images/chat.svg';
import PrivacySVG from '../../assets/images/privacy.svg';
import DocumentationSVG from '../../assets/images/documentation.svg';


const About = () => {
    return (
        
    <div className="bg-brown-white text-blue-naval pb-20 2xl:py-32">

        <h1 className="text-3xl text-center py-14"> About Hygeia </h1>

        <div className="flex lg:flex-row flex-col lg:justify-evenly items-center lg:items-start">
            <div className="bg-white rounded-xl shadow-md h-96 lg:w-1/4 w-nine mb-5">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <img className="h-48 object-fill w-48 " src={ChatSVG} alt="Chat"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase text-sm text-brown-yellow font-semibold"> <a href="/login" className="hover:underline"> Chat Rooms and Forums </a> </div>
                        <p className="mt-2 text-gray-500">Are you struggling with something and you don't have anyone to talk to in real life? That is where our chatrooms and forums come in. On Hygeia you will definitely find someone who will understand what you are feeling right now.</p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-md h-96 lg:w-1/4 w-nine mb-5">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <img className="h-48 object-fill w-48" src={DocumentationSVG} alt="Documentation"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase text-sm text-brown-yellow font-semibold"> <a href="/documentation" className="hover:underline"> Read up on mental health </a></div>
                        <p className="mt-2 text-gray-500">Hyegia provides you documentation about everything mental health. Are you just wondering how to get help or how to help a friend in need? You can find it in our documentation! </p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-md h-96 lg:w-1/4 w-nine mb-5">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <img className="h-48 object-fill w-48" src={PrivacySVG} alt="Privacy"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase text-sm text-brown-yellow font-semibold"> <a href="/terms-and-privacy" className="hover:underline"> Privacy Guaranteed! </a></div>
                        <p className="mt-2 text-gray-500">We value the privacy of our users. Our platform is designed that you can decide everything about your profile settings.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default About;
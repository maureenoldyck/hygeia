import React, {useState, useEffect} from 'react';

import Header from '../components/Header.js';
import HeaderHome from '../components/home/HeaderHome';
import Footer from '../components/Footer.js';

import ask from '../assets/images/ask.svg'


const ContactUs = () => {

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
            mode: 'no-cors',
referrer: document.location.origin 
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
        <div className="bg-brown-white">
        
            <div>
                {LandingNav}
            </div>
            <div className="flex md:flex-row flex-col mb-24 md:mt-12 min-h-screen mx-8 justify-end">
                <div className="flex flex-col md:w-1/3 justify-between md:mr-20">
                    <div className="mt-28 flex flex-col items-center justify-center">
                        <h1 className="text-4xl text-center text-blue-naval mb-3"> Contact us</h1>
                        <p>Hello, thank you for visiting Hygeia! We would love to hear from you. Do you have any comments about our site or a question? Please, don't hesitate to contact us and we will contact you back as soon as possible. </p>
                    </div>
                    <div>
                        <img src={ask} alt="Contact us"/>
                    </div>
                </div>
                <div className="flex bg-blue-naval rounded-lg shadow-lg flex-col md:w-1/2 mb-20 mt-12 md:p-20 p-12 text-white justify-center">

                    <div className="flex flex-col">
                        <label htmlFor="name">Name or alias *</label>
                        <input className="text-black p-4 md:m-5 rounded-lg" type="text" id="name" name="name" placeholder="Your name or alias.."/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email * </label>
                        <input className="text-black p-4 md:m-5 rounded-lg" type="text" id="email" name="email" placeholder="Your email.."/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="subject">Question or message *</label>
                        <textarea className="text-black p-4 md:m-5 rounded-lg" id="question" name="question" placeholder="Write your question or message.."></textarea>
                    </div>
                    <input className="text-center bg-brown-yellow rounded-br-lg rounded-tl-lg py-3 2xl:text-lg 2xl:p-4 mb-8 mt-2 text-white lg:w-1/5 w-1/2 self-center" type="submit" value="Send"></input>
                </div>
            </div>
            <div className="mt-28">
                <Footer />
            </div>
       
        </div>
    );
}

export default ContactUs;
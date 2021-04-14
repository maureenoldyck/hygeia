import React from 'react';
import CommunitySVG from '../../assets/images/community.svg';
import SignupForm from '../signup/SignupForm';


const Community = () => {
    return (
        
    <div id="community" className="bg-brown-sand min-h-nine text-white flex md:flex-row flex-col mt-10 mb-20 lg:mx-16 py-10 justify-between mx-12">
        <div className="md:w-3/5 flex lg:pr-14 lg:pt-10 py-20">
            <img className="flex-end" src={CommunitySVG} alt="community"/>
        </div>
        <div className="md:text-right 2xl:w-2/5 md:w-3/5">
            <div className="w-nine right-0">
                <h1 className="text-4xl sm:text-6xl mb-4 md:text-4xl">  Our Community </h1>
                <h5 className="text-2xl ml-3 md:text-xl"> Join many others on their mental health care journey, talk with professionals, give help yourself.</h5>
                <div className="mt-7"> 
                    <SignupForm/>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Community;
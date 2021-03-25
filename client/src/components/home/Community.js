import React from 'react';
import { Link } from 'react-router-dom';
import CommunitySVG from '../../assets/images/community.svg';


const Community = () => {
    return (
        
    <div id="community" className="bg-brown-sand min-h-nine text-white flex md:flex-row flex-col mt-10 mb-20 lg:mx-16 py-10 justify-between mx-12">
       <div className="md:w-3/5 flex lg:pr-14 lg:pt-10 py-20">
           <img className="flex-end" src={CommunitySVG} alt="community"/>
        </div>
        <div className="md:text-right 2xl:w-2/5 md:w-3/5">
            <div className="w-nine right-0">
                <h1 className="text-6xl mb-4 md:text-4xl">  Our Community </h1>
                <h5 className="text-2xl ml-3 md:text-xl"> Join many others on their mental health care journey, talk with professionals, give help yourself.</h5>
                <div className="mt-7"> 
                    <div className="flex flex-col md:ml-20 md:text-2xl w-full mb-5 md:transform md:scale-90">
                       
                        <label className="mb-1">Name/email</label>
                        <input placeholder="Your Name ..." className="pl-2 py-2 mb-6 rounded-lg"/>

                        <label className="mb-1">Password</label>
                        <input type="password" placeholder="Your password ..." className="pl-2 py-2 rounded-lg"/>

                        <Link to="/" className="flex justify-end text-base mb-4"><span>Forgot password?</span></Link>

                        <div className="flex flex-row items-center">
                            <input type="checkbox" className="w-5 h-5 mr-2" />
                            <label> Remember me next time too!</label>
                        </div>

                        <div className="flex flex-row my-6 justify-around">
                            <Link to="/login" className="bg-brown-yellow rounded-br-lg rounded-tl-lg p-3 hover:underline"> Sign In</Link> 
                            <Link to="/register" className="bg-blue-naval rounded-br-lg rounded-tl-lg p-3 mr-5 hover:underline"> Sign Up </Link>
                        </div>
         
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default Community;
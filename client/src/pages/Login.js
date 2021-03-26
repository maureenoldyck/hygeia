import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        
        <div className="h-screen flex flex-col text-blue-naval">

            <div className="flex flex-row h-screen z-0">

                    <div className="flex flex-col w-nine m-5 text-2xl">

                        <h1 className="text-4xl text-center mt-12 mb-16">Log In</h1>
                    
                        <label className="mb-1">Email</label>
                        <input placeholder="Your Email ..." className="pl-2 py-2 mb-6 rounded-lg"/>

                        <label className="mb-1">Password</label>
                        <input type="password" placeholder="Your password ..." className="pl-2 py-2 rounded-lg"/>

                        <Link to="/" className="flex justify-end text-base mb-4"><span>Forgot password?</span></Link>

                        <div className="flex flex-row items-center">
                            <input type="checkbox" className="w-5 h-5 mr-2" />
                            <label>Remember me next time too!</label>
                        </div>

                        <div className="flex flex-row my-6 justify-around">
                            <button className="hover:underline bg-brown-yellow rounded-br-lg rounded-tl-lg p-3 2xl:text-lg 2xl:p-4 mb-3">Login</button>
                        </div>
                       
                    </div>
                </div>
        </div>
    );
}

export default Register;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleLogIn = () => {
    
        //======================================================================================//
        //                         Fetch API location + POST body-properties                    //
        //======================================================================================//
    

        fetch("http://localhost:5000/api/login", {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
            },
            credentials: 'include', 
        })
        .then(res => res.json())
        .then((res) => {
            if (res.err) {
                setLoginStatus(res.err);
            } else {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("userID", res[0].id);
                window.location.href = '/profile';
            }
        }).catch(err => {
            console.log(err);
        });

    }

    


    return (
        
        <div className="flex flex-col text-blue-naval">

            <div className="flex flex-row h-auto z-0">

                    <div className="flex flex-col w-nine m-5 text-2xl">

                        <h1 className="text-4xl text-center mt-8 mb-16">Log In</h1>

                        <h2 className="text-red-500 mb-4"> {loginStatus}</h2>
                    
                        <label className="mb-1">Email</label>
                        <input placeholder="Your Email ..." className="pl-2 py-2 mb-6 rounded-lg" onChange={(e) => {setEmail(e.target.value)}}/>

                        <label className="mb-1">Password</label>
                        <input type="password" placeholder="Your password ..." className="pl-2 py-2 rounded-lg" onChange={(e) => {setPassword(e.target.value)}}/>

                        <Link to="/" className="flex justify-end text-base mb-4"><span>Forgot password?</span></Link>

                        <div className="flex flex-row items-center">
                            <input type="checkbox" className="w-5 h-5 mr-2" />
                            <label>Remember me next time too!</label>
                        </div>

                        <div className="flex flex-row my-6 justify-around">
                            <button className="text-brown-white hover:underline bg-brown-yellow rounded-br-lg rounded-tl-lg p-3 2xl:text-lg 2xl:p-4 mb-3" onClick={handleLogIn}>Log In</button>
                        </div>
                       
                    </div>
                </div>
        </div>
    );
}

export default Login;
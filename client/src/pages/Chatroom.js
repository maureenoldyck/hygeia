import React, {useState, useEffect} from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import RoomCard from '../components/chatroom/RoomCard'

import MoodTracker from '../components/MoodTracker.js';
import { ChatCard, ChatEngineWrapper, ChatList, Socket } from 'react-chat-engine'



const Chatroom = () => {
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
                window.location.href = "/";
            }
        });
    }, []);
    
    return (
        <>
            <div>
                {LandingNav}
            </div>

            <div className="flex justify-around bg-brown-white flex-col min-h-full z-0">

                <div className="flex justify-around flex-row h-screen z-0 mb-32 lg:mt-20 mt-14 px-12" >

                    <section className="bg-brown-sand bg-opacity-25 justify-around w-full h-screen flex flex-row" id="search-filter">

                        <div className="hidden lg:flex ml-8 flex-col w-1/4 ">

                            <div className="bg-brown-sand rounded-xl bg-opacity-25 w-full h- pb-4 my-6 top-10 sticky shadow-lg" id="filter">
                                <div className="flex flex-col w-full h-full text-xl" id="filter-card">
                                    <div>
                                        <form action="">
                                                <div className="pt-10 text-2xl text-center">
                                                    <h2>Search filter:</h2>
                                                </div>
                                                <div className="pt-12 pl-4">
                                                    <label><h3 className="text-xl font-bold">Tags</h3></label>
                                                    <input className="bg-brown-white bg-opacity-50 rounded-xl pl-2 border-black border" type="text" placeholder="Enter tags ..." size="15"/>
                                                
                                                    <p>tag, tag, tag, + ...</p>
                                                </div>

                                            <div className="pt-12 pl-4" id="filter-options">
                                                <h3 className="text-xl font-bold">Options:</h3>
                                                <ul>
                                                    <input type="checkbox" name="" id="" value=""/>
                                                    <label for="">Pofessionals</label><br/>
                                                    
                                                    <input type="checkbox" name="" id="" value=""/>
                                                    <label for="">Same gender</label><br/>
                                                    
                                                    <input type="checkbox" name="" id="" value=""/>
                                                    <label for="">Similar age group</label><br/>
                                                    
                                                    <input type="checkbox" name="" id="" value=""/>
                                                    <label for="">Moderated</label><br/>
                                                    
                                                    <input type="checkbox" name="" id="" value=""/>
                                                    <label for="">Prof. host</label><br/>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-around lg:ml-8 w-full my-6">

                            <div className="bg-transparent w-full h-full " id="rooms">

                                <div className="relative flex flex-col w-full h-full text-sm" id="chatrooms">
                                    <div className="absolute right-0 top-0">
                                        <button className="bg-green-vrt hover:bg-green-vrtdark text-white p-2 rounded-full shadow-lg">Create Room</button>
                                    </div>

                                    <div className="flex justify-around w-full">
                                        <h1 className="flex text-center text-4xl font-bold">Chatrooms</h1>
                                    </div>

                                    <div className="w-full h-auto my-4" id="modal-container">
                                        <RoomCard />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>

                    <MoodTracker />
                </div>

            </div>
            
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Chatroom;
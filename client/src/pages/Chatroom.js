import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoodTracker from '../components/MoodTracker.js';


const Chatroom = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="flex justify-around bg-brown-white flex-col min-h-full ">

                <div className="flex justify-around flex-row h-screen z-0 mb-32 mt-28 px-12" >

                    <section className="bg-brown-sand bg-opacity-25 justify-around w-full h-screen flex flex-row" id="search-filter">

                        <div className="flex ml-8 flex-col w-1/4">

                            <div className="bg-brown-sand rounded-xl bg-opacity-25 w-full h-full my-6" id="filter">
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

                        <div className="flex justify-around ml-8 w-full my-6">

                            <div className="bg-transparent w-full h-full " id="rooms">

                                <div className="relative flex flex-col w-full h-full text-sm" id="chatrooms">
                                    <div className="absolute right-0 top-0">
                                    <button className="bg-green-vrt hover:bg-green-vrtdark text-white p-2 rounded-full">Create Room</button>
                                    </div>

                                    <div className="flex justify-around w-full">
                                        <h1 className="flex text-center text-4xl font-bold">Chatrooms</h1>
                                        
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
import React from 'react';
import { Link } from 'react-router-dom';


const Settings = () => {

    return (
        <>
        <form action="/profile">
            <div className="flex flex-col w-full h-auto lg:text-xl" id="detailsCard">
            
                <div className="flex flex-row justify-between pt-2 mr-6 ml-4 mb-2">
                    <h2 className="lg:text-3xl text-xl">Settings</h2>
                    <button className="bg-green-vrt hover:bg-green-vrtdark text-white lg:w-18 lg:h-12 py-2 px-4 rounded-full"><Link to="/profile">Save</Link></button>
                </div>

                <div className="flex flex-col w-full m-auto"> 
                    <div className="flex flex-row justify-between pt-2 mx-6">
                        <div className="lg:p-4 p-1  w-2/5">
                            <ul>
                                <li>Anonymous: </li>
                                <li>Profile visibility:</li>
                                <li>Open to connect:</li>
                            </ul>
                        </div>

                        <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1">
                            <ul>
                                <li className="flex flex-row items-center">
                                    <p>No</p>
                                    <div className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 mx-2">
                                        <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                                    </div>
                                    <p>Yes</p>
                                </li>
                                <li>
                                    <input type="radio" value="visibility" name="1" id="everyone"/>
                                    <label For="everyone" className="mx-2">Everyone</label><br/>
                                    <input type="radio" value="visibility" name="2" id="friends"/>
                                    <label For="friends" className="mx-2">Connections</label><br/>
                                    <input type="radio" value="visibility" name="3" id="friendprof"/>
                                    <label For="friendprof" className="mx-2">Connections, professionals</label><br/>
                                </li>
                                <li className="flex flex-row items-center">
                                    <p>No</p>
                                    <div className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 mx-2">
                                        <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                                    </div>
                                    <p>Yes</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="flex flex-row justify-between pt-2 mx-6">
                        <div className="lg:p-4 p-1  w-2/5">
                            <ul>
                                <li>DM availability:</li>

                            </ul>
                        </div>

                        <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1">
                            <ul>
                                <li>
                                    <input type="radio" value="visibility" name="1" id="everyone"/>
                                        <label For="everyone" className="mx-2">Everyone</label><br/>
                                        <input type="radio" value="visibility" name="2" id="friends"/>
                                        <label For="friends" className="mx-2">Connections</label><br/>
                                        <input type="radio" value="visibility" name="3" id="friendprof"/>
                                    <label For="friendprof" className="mx-2">Connections, professionals</label><br/>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="flex flex-row justify-between pt-2 mx-6">
                        <div className="lg:p-4 p-1  w-2/5">
                            <ul>
                                <li>Notifications:</li>

                            </ul>
                        </div>

                        <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1">
                            <ul>
                                <li>
                                    <select className="bg-transparent mt-1 pl-1 block w-full rounded-md border border-black" name="" id="">
                                        <option value=""> ---</option>
                                        <option value="">All notifications</option>
                                        <option value="">Only when tagged</option>
                                        <option value="">Only when selected "Notify me"</option>
                                    </select>
                                </li>
                                <li>
                                    <input type="checkbox" name="" id=""/>
                                    <label className="mx-2">Sent notifications by mail</label><br/>
                                    <input type="checkbox" name="" id=""/>
                                    <label className="mx-2">Mobile notifications</label><br/>
                                    <input type="checkbox" name="" id=""/>
                                    <label className="mx-2">No extern notifications</label>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="flex flex-row justify-between pt-2 mx-6">
                        <div className="lg:p-4 p-1  w-2/5">
                            <ul>
                                <li>Moderation:</li>

                            </ul>
                        </div>

                        <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1">
                            <ul>
                                <h1>Blocked Users</h1>
                                <li>
                                    <p>Username <span className="text-sm align-text-top"><a className="text-blue-600 text" href="#">Remove</a></span></p>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="flex flex-row justify-between pt-2 mx-6">
                        <div className="lg:p-4 p-1 w-2/5">
                                <ul>
                                    <li>Your bio:</li>
                                </ul>
                        </div>
                        <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1 overflow-hidden">
                            <textarea className="bg-transparent w-full h-full" placeholder="My new bio ..."  maxlength="500" name="" id="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</textarea>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between pt-2 pb-4 mx-6">
                        <div className="flex flex-row justify-end w-full lg:p-4 p-1">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white lg:w-18 lg:h-12 py-2 mx-4 px-4 rounded-full">Hide account</button>
                                <button className="bg-red-400 hover:bg-red-600 text-white lg:w-18 lg:h-12 py-2 mx-4  px-4 rounded-full">Delete account</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default Settings;
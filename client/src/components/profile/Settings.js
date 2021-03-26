import React from 'react';
import { Link } from 'react-router-dom';
import tetris from '../../assets/images/tetris.jpg';
import settings from '../../assets/images/settings.svg';
import wave from '../../assets/images/wave.svg';

const Settings = () => {

    return (
        <div className="flex flex-col w-full h-full text-xl" id="detailsCard">
        
            <div className="flex flex-row justify-between pt-2 mr-6 ml-4 mb-2">
                <h2 className="text-3xl">Settings</h2>
                <Link to="/profile/edit/settings"><img src={settings} alt="Edit" className="h-6 w-6 mt-1"/></Link>
            </div>

            <div className="flex flex-col w-full m-auto"> 
                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="p-4  w-2/5">
                        <ul>
                            <li>Anonymous: </li>
                            <li>Profile visibility:</li>
                            <li>Open to connect:</li>
                        </ul>
                    </div>

                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 p-4">
                        <ul>
                            <li>YES</li>
                            <li>Visible</li>
                            <li>Available</li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="p-4  w-2/5">
                        <ul>
                            <li>DM availability:</li>

                        </ul>
                    </div>

                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 p-4">
                        <ul>
                            <li>Only contacts and professionals</li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="p-4  w-2/5">
                        <ul>
                            <li>Notifications:</li>

                        </ul>
                    </div>

                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 p-4">
                        <ul>
                            <li>All</li>
                            <li>Mail</li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="p-4  w-2/5">
                        <ul>
                            <li>Moderation:</li>

                        </ul>
                    </div>

                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 p-4">
                        <ul>
                            <li>List of Blocked users</li>

                        </ul>
                    </div>

                </div>

                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="p-4 w-2/5">
                            <ul>
                                <li>Your bio:</li>
                            </ul>
                    </div>
                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 p-4 overflow-hidden">
                        <textarea className="bg-transparent" readOnly name="" id="" cols="25" rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</textarea>
                    </div>
                </div>

                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="p-4  w-2/5">
                        <ul>
                            <li>Account:</li>

                        </ul>
                    </div>

                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 p-4">
                        <ul>
                            <li>Delete or Hide account</li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Settings;
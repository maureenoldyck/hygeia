import React from 'react';
import { Link } from 'react-router-dom';
import settings from '../../assets/images/settings.svg';

const Settings = () => {

    return (
        <div className="flex flex-col w-full h-auto lg:text-xl pb-4" id="detailsCard">
        
            <div className="flex flex-row justify-between pt-2 mr-6 ml-4 mb-2">
                <h2 className="lg:text-3xl text-xl">Settings</h2>
                <Link to="/profile/edit/settings"><img src={settings} alt="Edit" className="h-6 w-6 mt-1"/></Link>
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
                            <li>YES</li>
                            <li>Visible</li>
                            <li>Available</li>
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
                            <li>Only contacts and professionals</li>
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
                            <li>All</li>
                            <li>Mail</li>
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
                            <li>List of Blocked users</li>

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
                        <textarea className="bg-transparent w-full h-full" readOnly rows="5" cols="4" name="" id="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit</textarea>
                    </div>
                </div>

                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="lg:p-4 p-1  w-2/5">
                        <ul>
                            <li>Account:</li>

                        </ul>
                    </div>

                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1">
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
import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import settings from '../../assets/images/settings.svg';

const Settings = () => {

    const { id } = useParams();

    const [anonymous, setAnonymous] = useState('');
    const [profileVisibilty, setProfileVisibility] = useState('');
    const [openToConnect, setOpenToConnect] = useState('');
    const [dmAvailability, setDmAvailability] = useState('');
    const [notifictions, setNotifications] = useState('');
    const [bio, setBio] = useState('');


    useEffect(() => {
        fetch(`http://localhost:5000/api/profile/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include', 
            referrerPolicy: 'origin',
            mode: 'cors',
referrer: document.location.origin
        })
        .then(res => res.json())
        .then((res) => { 
            setAnonymous(Boolean(Number(res[0].anonymous)))
            setProfileVisibility(res[0].profile_visible)
            setOpenToConnect(Boolean(Number(res[0].open_to_connect)))
            setDmAvailability(res[0].dm_available)
            setNotifications(res[0].notifications)  
            setBio(res[0].bio);
        })

    })

    return (
        <div className="flex flex-col w-full h-auto lg:text-xl pb-4" id="detailsCard">
        
            <div className="flex flex-row justify-between pt-2 mr-6 ml-4 mb-2">
                <h2 className="lg:text-3xl text-xl">Settings</h2>
                <Link to={`/profile/${id}/edit/settings`}><img src={settings} alt="Edit" className="h-6 w-6 mt-1"/></Link>
            </div>

            <div className="flex flex-col w-full m-auto"> 
                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="lg:p-4 p-1  w-2/5">
                        <ul>
                            <li>Anonymous: </li>
                            <li>Profile visibility:</li>
                            
                        </ul>
                    </div>

                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1">
                        <ul>
                            <li>
                                { anonymous ? <svg height="30" viewBox="0 -107 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m362.667969 0h-213.335938c-82.324219 0-149.332031 66.988281-149.332031 149.332031 0 82.347657 67.007812 149.335938 149.332031 149.335938h213.335938c82.324219 0 149.332031-66.988281 149.332031-149.335938 0-82.34375-67.007812-149.332031-149.332031-149.332031zm0 0" fill="#3B82F6"/><path d="m234.667969 149.332031c0 47.128907-38.207031 85.335938-85.335938 85.335938-47.128906 0-85.332031-38.207031-85.332031-85.335938 0-47.128906 38.203125-85.332031 85.332031-85.332031 47.128907 0 85.335938 38.203125 85.335938 85.332031zm0 0" fill="#fafafa"/></svg>
                                : <svg className="fill-current text-gray-400" height="30" viewBox="0 -107 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m0 149.332031c0 82.347657 67.007812 149.335938 149.332031 149.335938h213.335938c82.324219 0 149.332031-66.988281 149.332031-149.335938 0-82.34375-67.007812-149.332031-149.332031-149.332031h-213.335938c-82.324219 0-149.332031 66.988281-149.332031 149.332031zm277.332031 0c0-47.058593 38.273438-85.332031 85.335938-85.332031 47.058593 0 85.332031 38.273438 85.332031 85.332031 0 47.0625-38.273438 85.335938-85.332031 85.335938-47.0625 0-85.335938-38.273438-85.335938-85.335938zm0 0"/></svg> }
                            </li>
                            <li>{profileVisibilty}</li>
                           
                        </ul>
                    </div>

                </div>

                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="lg:p-4 p-1  w-2/5">
                        <ul>
                            <li>Open to connect:</li>

                        </ul>
                    </div>

                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1">
                        <ul>
                            <li>
                                { !openToConnect ? <svg className="fill-current text-gray-400" height="30" viewBox="0 -107 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m0 149.332031c0 82.347657 67.007812 149.335938 149.332031 149.335938h213.335938c82.324219 0 149.332031-66.988281 149.332031-149.335938 0-82.34375-67.007812-149.332031-149.332031-149.332031h-213.335938c-82.324219 0-149.332031 66.988281-149.332031 149.332031zm277.332031 0c0-47.058593 38.273438-85.332031 85.335938-85.332031 47.058593 0 85.332031 38.273438 85.332031 85.332031 0 47.0625-38.273438 85.335938-85.332031 85.335938-47.0625 0-85.335938-38.273438-85.335938-85.335938zm0 0"/></svg>
                                : <svg height="30" viewBox="0 -107 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m362.667969 0h-213.335938c-82.324219 0-149.332031 66.988281-149.332031 149.332031 0 82.347657 67.007812 149.335938 149.332031 149.335938h213.335938c82.324219 0 149.332031-66.988281 149.332031-149.335938 0-82.34375-67.007812-149.332031-149.332031-149.332031zm0 0" fill="#3B82F6"/><path d="m234.667969 149.332031c0 47.128907-38.207031 85.335938-85.335938 85.335938-47.128906 0-85.332031-38.207031-85.332031-85.335938 0-47.128906 38.203125-85.332031 85.332031-85.332031 47.128907 0 85.335938 38.203125 85.335938 85.332031zm0 0" fill="#fafafa"/></svg>}
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
                                {dmAvailability}
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
                            <li>{notifictions}</li>
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
                        <textarea className="bg-transparent w-full h-full" readOnly rows="5" cols="4" value={bio}></textarea>
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
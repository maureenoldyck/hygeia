import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from '../Modal';
import DeleteAccount from './DeleteAccount';


const SettingsForm = () => {

    const [anonymous, setAnonymous] = useState('');
    const toggleAnonymous = () => setAnonymous((prevState) => (!prevState));
    const [profileVisibility, setProfileVisibilty] = useState('');
    const [openToConnect, setOpenToConnect] = useState('');
    const toggleOpenToConnect = () => setOpenToConnect((prevState) => (!prevState));
    const [dmAvailability, setDmAvailability] = useState('');
    const [notifications, setNotifications] = useState('');
    const [bio, setBio] = useState('');

    const { id } = useParams();

    //==========================================================================================//
    //                                 HandleSubmit: Button event                               //
    //==========================================================================================//

    useEffect(() => {
        fetch(`https://hygeia-app.herokuapp.com/api/profile/${id}`, {
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
            if (res[0].anonymous === "1") {
                setAnonymous(res[0].anonymous = true);
            }
            if (res[0].open_to_connect === "1") {
                setOpenToConnect(res[0].anonymous = true);
            }
            setProfileVisibilty(res[0].profile_visible)
            setDmAvailability(res[0].dm_available)
            setNotifications(res[0].notifications)
            setBio(res[0].bio)
        })
    }, [id]);

    const handleSettingsSubmit = () => {
        
        //======================================================================================//
        //                         Fetch API location + POST body-properties                    //
        //======================================================================================//
        

        fetch(`https://hygeia-app.herokuapp.com/api/settings/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                anonymous: anonymous,
                profileVisibility: profileVisibility,
                openToConnect: openToConnect,
                dmAvailability: dmAvailability,
                notifications: notifications,
                bio: bio,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
            },
            credentials: 'include', 
            referrerPolicy: 'origin',
            mode: 'cors',
referrer: document.location.origin

        })
        .then(res => res.json())
        .then(res => console.log())
        .catch((error) => {
            console.log(error)
        });
    };

    const showModal = () => {
        const modal = document.getElementById("deleteModal");

        if (modal.className === "hidden") {
            modal.className += "block";
        } else {
            modal.className = "hidden";
        }
    }

    const closeModal = () => {
        const modal = document.getElementById("deleteModal");

        if (modal.className === "hidden") {
            modal.className += "block";
        } else {
            modal.className = "hidden";
        }
    }

    return (
        <>
            <div id="deleteModal" className="hidden">
                <Modal>
                    <span onClick={closeModal} className="close text-2xl ml-3 text-red-400  hover:text-red-500 cursor-pointer">&times;</span>
                    <DeleteAccount />
                </Modal>
            </div>
            <div className="flex flex-col w-full h-auto lg:text-xl" id="detailsCard">
            
                <div className="flex flex-row justify-between pt-2 mr-6 ml-4 mb-2">
                    <h2 className="lg:text-3xl text-xl">Settings</h2>
                    <button className="bg-green-vrt hover:bg-green-vrtdark text-white lg:w-18 lg:h-12 py-2 px-4 rounded-full" onClick={handleSettingsSubmit}><Link to={`/profile/${id}`}>Save</Link></button>
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
                                <li className="flex flex-row items-center">
                                    <input id='anonymous' name="anonymous" type="checkbox" className="anonymous opacity-0 absolute w-8 "  onChange={toggleAnonymous} />
                                    <label htmlFor="anonymous">
                                    { anonymous ? <svg height="30" viewBox="0 -107 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m362.667969 0h-213.335938c-82.324219 0-149.332031 66.988281-149.332031 149.332031 0 82.347657 67.007812 149.335938 149.332031 149.335938h213.335938c82.324219 0 149.332031-66.988281 149.332031-149.335938 0-82.34375-67.007812-149.332031-149.332031-149.332031zm0 0" fill="#3B82F6"/><path d="m234.667969 149.332031c0 47.128907-38.207031 85.335938-85.335938 85.335938-47.128906 0-85.332031-38.207031-85.332031-85.335938 0-47.128906 38.203125-85.332031 85.332031-85.332031 47.128907 0 85.335938 38.203125 85.335938 85.332031zm0 0" fill="#fafafa"/></svg>
                                    : <svg className="fill-current text-gray-400" height="30" viewBox="0 -107 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m0 149.332031c0 82.347657 67.007812 149.335938 149.332031 149.335938h213.335938c82.324219 0 149.332031-66.988281 149.332031-149.335938 0-82.34375-67.007812-149.332031-149.332031-149.332031h-213.335938c-82.324219 0-149.332031 66.988281-149.332031 149.332031zm277.332031 0c0-47.058593 38.273438-85.332031 85.335938-85.332031 47.058593 0 85.332031 38.273438 85.332031 85.332031 0 47.0625-38.273438 85.335938-85.332031 85.335938-47.0625 0-85.335938-38.273438-85.335938-85.335938zm0 0"/></svg> }
                                    
                                    </label>
                                </li>
                                <li>
                                    <input type="radio" value="Visible for everyone" name="visibility" checked={profileVisibility === 'Visible for everyone'} onChange={(e) => {setProfileVisibilty(e.target.value)}}/>
                                    <label htmlFor="everyone" className="mx-2">Everyone</label><br/>
                                    <input type="radio" value="Visible for friends" name="visibility" checked={profileVisibility === 'Visible for friends'} onChange={(e) => {setProfileVisibilty(e.target.value)}}/>
                                    <label htmlFor="friends" className="mx-2">Connections</label><br/>
                                    <input type="radio" value="Visible for friends and proffessionals" name="visibility" checked={profileVisibility === 'Visible for friends and proffessionals'} onChange={(e) => {setProfileVisibilty(e.target.value)}}/>
                                    <label htmlFor="friendprof" className="mx-2">Connections, professionals</label><br/>
                                </li>
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
                                <li className="flex flex-row items-center">
                                    <input name="openToConnect" type="checkbox" className="anonymous opacity-0 absolute w-8" onClick={toggleOpenToConnect} />
                                    <label htmlFor="openToConnect">
                                    { !openToConnect ? <svg className="fill-current text-gray-400" height="30" viewBox="0 -107 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m0 149.332031c0 82.347657 67.007812 149.335938 149.332031 149.335938h213.335938c82.324219 0 149.332031-66.988281 149.332031-149.335938 0-82.34375-67.007812-149.332031-149.332031-149.332031h-213.335938c-82.324219 0-149.332031 66.988281-149.332031 149.332031zm277.332031 0c0-47.058593 38.273438-85.332031 85.335938-85.332031 47.058593 0 85.332031 38.273438 85.332031 85.332031 0 47.0625-38.273438 85.335938-85.332031 85.335938-47.0625 0-85.335938-38.273438-85.335938-85.335938zm0 0"/></svg>
                                    : <svg height="30" viewBox="0 -107 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m362.667969 0h-213.335938c-82.324219 0-149.332031 66.988281-149.332031 149.332031 0 82.347657 67.007812 149.335938 149.332031 149.335938h213.335938c82.324219 0 149.332031-66.988281 149.332031-149.335938 0-82.34375-67.007812-149.332031-149.332031-149.332031zm0 0" fill="#3B82F6"/><path d="m234.667969 149.332031c0 47.128907-38.207031 85.335938-85.335938 85.335938-47.128906 0-85.332031-38.207031-85.332031-85.335938 0-47.128906 38.203125-85.332031 85.332031-85.332031 47.128907 0 85.335938 38.203125 85.335938 85.332031zm0 0" fill="#fafafa"/></svg>}
                                    </label>
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
                                    <input type="radio" value="Everyone" name="dm_availibity" checked={dmAvailability === "Everyone"} onChange={(e) => {setDmAvailability(e.target.value)}}/>
                                    <label className="mx-2">Everyone</label><br/>
                                    <input type="radio" value="Friends" name="dm_availibity" checked={dmAvailability === "Friends"} onChange={(e) => {setDmAvailability(e.target.value)}}/>
                                    <label className="mx-2">Connections</label><br/>
                                    <input type="radio" value="Friends and proffessionals" name="dm_availibity" checked={dmAvailability === "Friends and proffessionals"} onChange={(e) => {setDmAvailability(e.target.value)}}/>
                                    <label className="mx-2">Connections, professionals</label><br/>
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
                                    <select className="bg-transparent mt-1 pl-1 block w-full rounded-md border border-black" checked={notifications} onChange={(e) => {setNotifications(e.target.value)}}>
                                        <option value="All">All notifications</option>
                                        <option value="When tagged">Only when tagged</option>
                                        <option value="When specificly selected">Only when selected "Notify me"</option>
                                    </select>
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
                                    <p>Username <span className="text-sm align-text-top"><a className="text-blue-600 text" href="?#">Remove</a></span></p>
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
                            <textarea className="bg-transparent w-full h-full"  maxlength="500" placeholder={bio} onChange={(e) => {setBio(e.target.value)}}></textarea>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between pt-2 pb-4 mx-6">
                        <div className="flex flex-row justify-end w-full lg:p-4 p-1">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white lg:w-18 lg:h-12 py-2 mx-4 px-4 rounded-full">Hide account</button>
                            <button className="bg-red-400 hover:bg-red-600 text-white lg:w-18 lg:h-12 py-2 mx-4  px-4 rounded-full" onClick={showModal}>Delete account</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default SettingsForm;
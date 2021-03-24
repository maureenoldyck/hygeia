import React, { useState, useEffect } from 'react';
import tetris from '../../assets/images/tetris.jpg';
import wave from '../../assets/images/wave.svg';

const ProfileForm = () => {

    const [name, setName] = useState('');
    const [role, setRole] = useState();
    const [quote, setQuote] = useState();

    const handleProfileSubmit = event => {
        event.preventDefault();
        // Lookingfor a redirect in a function
        fetch('http://localhost:3000/profile/edit/insert'), {
            name: name,
            role: role,
            quote: quote
        }
        .then(() => {
            
        })
        
    }

    return (

        <>
            <form action="/profile" method="">
                <div className="flex flex-row w-full h-full" id="profileCard">
                    <div className=" flex flex-col w-1/3 pt-2 items-center">
                        <h2 className="text-3xl pb-8">My profile</h2>
                        <div id="picture">
                            <img src={tetris} alt="Profile" className="h-28 w-28 rounded-full"/>
                        </div>
                        <p><span>Your points</span></p>
                    </div>

                    <div className="flex flex-col pt-10 w-1/3">
                        <label>Name:</label>
                        <input className="bg-transparent mt-1 pl-1 block w-full rounded-md border border-black" type="text" placeholder="Your name here" onChange={(e) => {setName(e.target.value);}}/>
                        <label> Select role:</label>
                        <select name="" id="" className="bg-transparent mt-1 pl-1 block w-full rounded-md border border-black" onChange={(e) => {setRole(e.target.value);}}>
                            <option value="">---</option>
                            <option value="visitor">No roles, thanks</option>
                            <option value="helper">I think I can help</option>
                            <option value="seeker">I would love some help</option>
                        </select>
                        <label>A quote:</label>
                        <textarea className="bg-transparent mt-1 pl-1 block w-full rounded-md border border-black" name="" id="" cols="10" rows="2" onChange={(e) => {setQuote(e.target.value);}}></textarea>
                    </div>

                    <div className="flex flex-col w-1/3 pt-4">
                        <div className=" w-full h-full flex flex-row-reverse pr-6" id="edit">
                        <button type="submit" className="bg-green-vrt hover:bg-green-vrtdark text-white w-18 h-12 py-2 px-4 rounded-full" onClick={handleProfileSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ProfileForm;
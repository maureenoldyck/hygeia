import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import tetris from '../../assets/images/tetris.jpg';


const ProfileForm = () => {


    //==========================================================================================//
    //                                 Set Variables + useState()                               //
    //==========================================================================================//


    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [quote, setQuote] = useState('');

    const { id } = useParams();

    //==========================================================================================//
    //                                 HandleSubmit: Button event                               //
    //==========================================================================================//

    useEffect(() => {
        fetch(`http://localhost:5000/api/profile/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include',
        })
        .then(res => res.json())
        .then((res) => { 
            if (name === "") {setName(res[0].name)};
            if (role === "") {setRole(res[0].role)};
            if (quote === "") {setQuote(res[0].quote)};
        });
    })

    const handleProfileSubmit = () => {
        
        //======================================================================================//
        //                         Fetch API location + POST body-properties                    //
        //======================================================================================//
        

        fetch(`http://localhost:5000/api/profile/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                role: role,
                quote: quote,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
            }

        })
        .then(res => res.json())
        .then(res => console.log())
        .catch((error) => {
            console.log(error)
        });
    };

    return (

        <>
            
                <div className="flex flex-row w-full h-full" id="profile-form">
                    <div className=" flex flex-col w-1/3 pt-2 items-center">
                        <h2 className="lg:text-3xl text-xl pb-8">My profile</h2>
                        <div id="picture">
                            <img src={tetris} alt="Profile" className="h-20 w-20 lg:w-28 lg:h-28 rounded-full"/>
                        </div>
                        <p><span>Your points</span></p>
                    </div>

                    <div className="flex flex-col lg:pt-10 pt-6 pb-6 w-1/3">
                        <label>Name:</label>
                        <input className="bg-transparent mt-1 pl-1 block w-full rounded-md border border-black" type="text" placeholder={name} onChange={(e) => {setName(e.target.value)}}/>
                        <label> Select role:</label>
                        <select name="" className="bg-transparent mt-1 pl-1 block w-full rounded-md border border-black" placeholder={role} onChange={(e) => {setRole(e.target.value)}}>
                            <option value="">---</option>
                            <option value="visitor">No roles, thanks</option>
                            <option value="helper">I think I can help</option>
                            <option value="seeker">I would love some help</option>
                        </select>
                        <label>A quote:</label>
                        <textarea className="bg-transparent mt-1 pl-1 block w-full rounded-md border border-black" name="" id="" cols="10" rows="2" placeholder={quote} onChange={(e) => {setQuote(e.target.value)}}></textarea>
                    </div>

                    <div className="flex flex-col w-1/3 pt-4">
                        <div className=" w-full flex flex-row-reverse pr-6" id="edit">
                        <button type="submit" className="bg-green-vrt hover:bg-green-vrtdark text-white lg:w-18 w lg:h-12 py-2 px-4 rounded-full" onClick={handleProfileSubmit}><Link to={`/profile/${id}`}>Save</Link></button>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default ProfileForm;
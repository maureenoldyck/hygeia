import React from 'react';
import tetris from '../assets/images/tetris.jpg';
import wave from '../assets/images/wave.svg';

const Profile_form = () => {

    return (

        <>
            <form action="/profile" method="">
                <div className="flex flex-row w-full h-full text-xl" id="profileCard">
                    <div className=" flex flex-col w-1/3 pt-2 items-center">
                        <h2 className="text-3xl pb-8">My profile</h2>
                        <div id="picture">
                            <img src={tetris} alt="Profile" className="h-28 w-28 rounded-full"/>
                        </div>
                        <p><span>Your points</span></p>
                    </div>

                    <div className="flex flex-col pt-10 w-1/3">
                        <label>Name:</label>
                        <input type="text" placeholder="Your name here"/>
                        <label> Select role:</label>
                        <select name="" id="">
                            <option value="">---</option>
                            <option value="visitor">No roles, thanks</option>
                            <option value="helper">I think I can help</option>
                            <option value="seeker">I would love some help</option>
                        </select>
                        <label>Add a Quote to your profile:</label>
                        <textarea name="" id="" cols="10" rows="2"></textarea>
                    </div>

                    <div className="flex flex-col w-1/3 pt-4">
                        <div className=" w-full h-full flex flex-row-reverse pr-6" id="edit">
                        <button className="bg-green-vrt hover:bg-green-vrtdark text-white w-18 h-12 py-2 px-4 rounded-full">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Profile_form;
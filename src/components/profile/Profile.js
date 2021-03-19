import React from 'react';
import tetris from '../../assets/images/tetris.jpg';
import settings from '../../assets/images/settings.svg';
import wave from '../../assets/images/wave.svg';

const Profile = () => {

    return (
        <div className="flex flex-row w-full h-full text-xl" id="profileCard">

            <div className=" flex flex-col w-1/3 pt-2 items-center">
                <h2 className="text-3xl pb-8">My profile</h2>
                <div id="picture">
                    <img src={tetris} alt="Profile" className="h-28 w-28 rounded-full"/>
                </div>
                <p><span>Your points</span></p>
            </div>

            <div className="flex flex-col pt-20 w-1/3">
                <h3 className="text-xl font-bold pb-2">Name/anon_ID</h3>
                <p><span>user/helper role</span></p>
                <p><span>motivational quote</span></p>
            </div>

            <div className="flex flex-col w-1/3 pt-4">
                <div className=" w-full h-full flex flex-row-reverse pr-6" id="edit">
                    <a href="/profile/edit/profile"><img src={settings} alt="Edit" className="h-6 w-6"/></a>
                </div>

                <div className=" w-full h-full flex flex-row-reverse pr-6 pt-24" id="wave">
                    <img src={wave} alt="Edit" className="h-8"/>
                </div>
            </div>
        </div>
    )
}

export default Profile;
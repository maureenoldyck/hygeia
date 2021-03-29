import React from 'react';
import { Link } from 'react-router-dom';
import tetris from '../../assets/images/tetris.jpg';
import settings from '../../assets/images/settings.svg';
import wave from '../../assets/images/wave.svg';

const Profile = () => {

    return (
        <div className="flex flex-row w-full h-full lg:text-xl pb-2" id="profileCard">

            <div className=" flex flex-col w-1/3 pt-2 items-center">
                <h2 className="lg:text-3xl text-xl pb-8">My profile</h2>
                <div id="picture">
                    <img src={tetris} alt="Profile" className="h-20 w-20 lg:w-28 lg:h-28 rounded-full"/>
                </div>
                <p><span>Your points</span></p>
            </div>

            <div className="flex flex-col pb-10 lg:pt-20 pt-16 w-1/3">
                <h3 className="text-xl font-bold pb-2">Name/anon_ID</h3>
                <p><span>user/helper role</span></p>
                <p><span>motivational quote</span></p>
            </div>

            <div className="flex flex-col w-1/3 pt-4">
                <div className=" w-full h-full flex flex-row-reverse pr-6" id="edit">
                    <Link to="/profile/edit/profile"><img src={settings} alt="Edit" className="h-6 w-6"/></Link>
                </div>

                <div className=" w-full h-full flex flex-row-reverse pr-6 pt-24" id="wave">
                    <img src={wave} alt="Edit" className="h-8"/>
                </div>
            </div>
        </div>
    )
}

export default Profile;
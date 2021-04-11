import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import settings from '../../assets/images/settings.svg';
import wave from '../../assets/images/wave.svg';

const Profile = () => {

    const { id } = useParams();

    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [quote, setQuote] = useState('');
    const [avatar, setAvatar] = useState('');


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
            setName(res[0].name);
            setRole(res[0].role);
            setQuote(res[0].quote);
            setAvatar('http://localhost:5000/' + res[0].profile_picture);
        });
    }, [id]);

    return (
        <div className="flex flex-row w-auto h-full lg:text-xl pb-2" id="profileCard">

            <div className=" flex flex-col w-1/3 pt-2 items-center">
                <h2 className="lg:text-3xl text-xl pb-8">My profile</h2>
                <div id="picture">
                    <img src={avatar} alt="Profile" className="h-20 w-20 lg:w-28 lg:h-28 rounded-full"/>
                </div>
                <p><span>Your points</span></p>
            </div>

            <div className="flex flex-col pb-10 lg:pt-20 pt-16 w-1/3">
                <h3 className="text-xl font-bold pb-2">{name || 'Username / Anon ID'}</h3>
                <p><span>{role || 'select a role'}</span></p>
                <p><span>{quote || 'Write a quote'}</span></p>
            </div>

            <div className="flex flex-col w-1/3 pt-4">
                <div className=" w-full h-full flex flex-row-reverse pr-6" id="edit">
                    <Link to={`/profile/${id}/edit/profile`}><img src={settings} alt="Edit" className="h-6 w-6"/></Link>
                </div>

                <div className=" w-full h-full flex flex-row-reverse pr-6 pt-24" id="wave">
                    <img src={wave} alt="Edit" className="h-8"/>
                </div>
            </div>
        </div>
    )
}

export default Profile;
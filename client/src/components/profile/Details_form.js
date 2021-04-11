import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const DetailsForm = () => {


    //==========================================================================================//
    //                                 Set Variables + useState()                               //
    //==========================================================================================//


    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [languages, setLanguages] = useState('');
    const [experiences, setExperiences] = useState('');
    const [website, setWebsite] = useState('');
    const [social, setSocial] = useState('');

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
mode: 'no-cors',
referrer: document.location.origin
        })
        .then(res => res.json())
        .then((res) => { 
            if (age === "") {setAge(res[0].age)};
            if (gender === "") {setGender(res[0].gender)};
            if (languages === "") {setLanguages(res[0].language)};
            if (experiences === "") {setExperiences(res[0].experience_id)};
            if (website === "") {setWebsite(res[0].my_web)};
            if (social === "") {setSocial(res[0].my_soc)};
        });
    })

    const handleDetailsSubmit = () => {


        //======================================================================================//
        //                         Fetch API location + POST body-properties                    //
        //======================================================================================//


        fetch(`https://hygeia-app.herokuapp.com/api/details/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                age: age,
                gender: gender,
                languages: languages,
                experiences: experiences,
                website: website,
                social: social,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
            },
            credentials: 'include', 
            referrerPolicy: 'origin',
            mode: 'no-cors',
referrer: document.location.origin

        })
        .then(res => res.json())
        .then(res => console.log(res));
    }

    return (
        <div className="w-full h-full lg:text-xl " id="detailsCard">

                <div className="flex flex-row justify-between pt-2 mr-6 ml-4 mb-2">
                    <h2 className="lg:text-3xl text-xl">Details</h2>
                    <button className="bg-green-vrt hover:bg-green-vrtdark text-white lg:w-18 lg:h-12 py-2 px-4 rounded-full" onClick={handleDetailsSubmit}><Link to={`/profile/${id}`}>Save</Link></button>

                </div>
                <div className="flex flex-col w-full m-auto"> 
                    <div className="flex flex-row justify-between pt-2 mx-6">
                        <div className="lg:p-4 p-1 w-2/5">
                            <ul>
                                <li>Age: </li>
                                <li>Gender: </li>
                                <li>Languages: </li>
                            </ul>
                        </div>
                        <div className="bg-gray-input bg-opacity-25 w-3/5 p-2 rounded-md">
                            <select name="" className="bg-transparent mt-1 block w-full border border-black rounded-md" placeholder={age} onChange={(e) => {setAge(e.target.value)}}>
                                <option value="12-20">12-20 y/o</option>
                                <option value="21-30">21-30 y/o</option>
                                <option value="31-40">31-40 y/o</option>
                                <option value="50+">50+ y/o</option>
                            </select>
                            <input name="" type="text" className="bg-transparent mt-1 block w-full rounded-md" placeholder={gender} onChange={(e) => {setGender(e.target.value)}}/>
                            <input name="" type="text" className="bg-transparent mt-1 block w-full rounded-md" placeholder={languages} onChange={(e) => {setLanguages(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between pt-2 pb-4 mx-6">
                        <div className="lg:p-4 p-1 w-2/5">
                                <ul>
                                    <li>Experiences: </li>
                                    <li>My Website: </li>
                                    <li>My Social: </li>
                                </ul>
                        </div>
                        <div className="bg-gray-input bg-opacity-25 w-3/5 my-1 lg:p-4 p-2 rounded-md">
                            
                            <input name="" type="text" className="bg-transparent mt-0.5 block w-full rounded-md" placeholder={experiences} onChange={(e) => {setExperiences(e.target.value)}}/>
                            <input name="" type="text" className="bg-transparent mt-0.5 block w-full rounded-md" placeholder={website} onChange={(e) => {setWebsite(e.target.value)}}/>
                            <input name="" type="text" className="bg-transparent mt-0.5 block w-full rounded-md" placeholder={social} onChange={(e) => {setSocial(e.target.value)}}/>
                            
                        </div>
                    </div>
                </div>
          
        </div>
    )
}

export default DetailsForm;
import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import settings from '../../assets/images/settings.svg';


const Details = () => {

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [languages, setLanguages] = useState('');
    const [experiences, setExperiences] = useState('');
    const [website, setWebsite] = useState('');
    const [social, setSocial] = useState('');

    const { id } = useParams();


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
            setAge(res[0].age);
            setGender(res[0].gender);
            setLanguages(res[0].language);
            setExperiences(res[0].experience_id);
            setWebsite(res[0].my_web);
            setSocial(res[0].my_soc);
        });
    }, [id])

    return (    
        <div className="flex flex-col w-full h-full lg:text-xl" id="detailsCard">
        
            <div className="flex flex-row justify-between pt-2 mr-6 ml-4 mb-2">
                <h2 className="lg:text-3xl text-xl">Details</h2>
                <Link to={`/profile/${id}/edit/details`}><img src={settings} alt="Edit" className="h-6 w-6 mt-1"/></Link>
            </div>
            <div className="flex flex-col w-full m-auto"> 
                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="lg:p-4 p-1  w-2/5">
                        <ul>
                            <li>Age: </li>
                            <li>Gender: </li>
                            <li>Languages: </li>
                        </ul>
                    </div>
                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1">
                        <ul>
                            <li>{age}</li>
                            <li>{gender}</li>
                            <li>{languages}</li>
                        </ul>
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
                    <div className="bg-gray-input rounded-xl bg-opacity-25 w-3/5 lg:p-4 p-1 overflow-hidden">
                        <ul>
                            <li className="h-7 overflow-x-auto">{experiences}</li>
                            <li>{website}</li>
                            <li>{social}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
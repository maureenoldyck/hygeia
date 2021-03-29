import React from 'react';
import { Link } from 'react-router-dom';
import settings from '../../assets/images/settings.svg';


const Details = () => {

    return (    
        <div className="flex flex-col w-full h-full lg:text-xl" id="detailsCard">
        
            <div className="flex flex-row justify-between pt-2 mr-6 ml-4 mb-2">
                <h2 className="lg:text-3xl text-xl">Details</h2>
                <Link to="/profile/edit/details"><img src={settings} alt="Edit" className="h-6 w-6 mt-1"/></Link>
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
                            <li>12-20 y/o</li>
                            <li>Undefined</li>
                            <li>Dutch</li>
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
                            <li className="h-7 overflow-x-auto">Social Anxiety, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iusto.</li>
                            <li>N/A</li>
                            <li>N/A</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;
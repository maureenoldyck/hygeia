import React from 'react';
import settings from '../assets/images/settings.svg';


const Details = () => {

    return (    
        <div className="flex flex-col w-full h-full text-xl" id="detailsCard">
          
            <div className="flex flex-row justify-between pt-2 mr-6 ml-1 mb-2">
                <h2 className="text-3xl">Details</h2>
                <a href="/profile/edit/details"><img src={settings} alt="Edit" className="h-6 w-6 mt-1"/></a>
            </div>
            <div className="flex flex-col w-full m-auto"> 
                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="p-4  w-2/5">
                        <ul>
                            <li>Age: </li>
                            <li>Gender: </li>
                            <li>Languages: </li>
                        </ul>
                    </div>
                    <div className="bg-green-profilebg bg-opacity-25 w-3/5 p-4">
                        <ul>
                            <li>12-20 y/o</li>
                            <li>Undefined</li>
                            <li>Dutch</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-row justify-between pt-2 mx-6">
                    <div className="p-4 w-2/5">
                            <ul>
                                <li>Experiences: </li>
                                <li>My Website: </li>
                                <li>My Social: </li>
                            </ul>
                    </div>
                    <div className="bg-green-profilebg bg-opacity-25 w-3/5 p-4 overflow-hidden">
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
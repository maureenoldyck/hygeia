import React from 'react';


const DetailsForm = () => {

    return (
        <div className="w-full h-full text-xl " id="detailsCard">
            <form action="/profile" method="" className="w-full h-full flex flex-col">
                <div className="flex flex-row justify-between pt-2 mr-6 ml-1 mb-2">
                    <h2 className="text-3xl">Details</h2>
                    <button className="bg-green-vrt hover:bg-green-vrtdark text-white w-18 h-12 py-2 px-4 rounded-full">Save</button>

                </div>
                <div className="flex flex-col w-full m-auto"> 
                    <div className="flex flex-row justify-between pt-2 mx-6">
                        <div className="p-4 w-2/5">
                            <ul>
                                <li>Age: </li>
                                <li>Gender: </li>
                                <li>Languages: </li>
                            </ul>
                        </div>
                        <div className="bg-green-profilebg bg-opacity-25 w-3/5 p-2 rounded-md">
                            <select name="" className="bg-transparent mt-1 block w-full rounded-md">
                                <option value="12-20 y/o">12-20 y/o</option>
                                <option value="21-30 y/o">21-30 y/o</option>
                                <option value="31-40 y/o">31-40 y/o</option>
                                <option value="50+ y/o">50+ y/o</option>
                            </select>
                            <input name="" type="text" className="bg-transparent mt-1 block w-full rounded-md" placeholder="Your Gender here"/>
                            <input name="" type="text" className="bg-transparent mt-1 block w-full rounded-md" placeholder="Your languages here"/>
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
                        <div className="bg-green-profilebg bg-opacity-25 w-3/5 mt-1 p-2 rounded-md">
                            
                            <input name="" type="text" className="bg-transparent mt-0.5 block w-full rounded-md" placeholder="Your experiences here"/>
                            <input name="" type="text" className="bg-transparent mt-0.5 block w-full rounded-md" placeholder="Your website here"/>
                            <input name="" type="text" className="bg-transparent mt-0.5 block w-full rounded-md" placeholder="Your social here"/>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DetailsForm;
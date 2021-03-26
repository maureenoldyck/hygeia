import React from 'react';

import unavailable from '../assets/images/unavailable.png';

const Unavailable = () => {
    return (

        <div className="bg-green-profilebg bg-opacity-25 flex justify-center h-64 text-xl rounded-xl">
            <div className="flex flex-row bg-green-profilebg bg-opacity-25 items-center w-full h-full rounded-xl border-black border-2 shadow-lg">
                <img src={unavailable} alt="" className="w-64 pb-1"/>
                <div className="flex-col m-4">
                    <h1 className="text-3xl font-bold pb-12">Woops!</h1>
                    <p>It seems that this feature <br/> is not online yet!</p>
                </div>
            </div>
        </div>

    );
}

export default Unavailable;
import React from 'react';
import happy from '../assets/images/happy.svg'
import neutral from '../assets/images/neutral.svg'
import sad from '../assets/images/sad.svg'


const MoodTracker = () => {
    return (
        
        <section className="flex bg-green-profilebg bg-opacity-25 w-1/3 min-h-full h-auto" id="right">
            <div className="flex justify-around items-center w-full my-6">
                <div className="flex flex-col bg-green-profilebg bg-opacity-25 w-3/5 h-moodTracker max-h-moodTracker my-6 justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-center w-full my-5"> Today </h1>
                        <div className="bg-green-profiledeets m-1 py-3">
                            <h5 className="text-center w-full"> Feeling? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <a href="?#"> <img className="w-8" src={happy} alt="Happy Emoji"/> </a>
                                <a href="?#"> <img className="w-8" src={neutral} alt="Neutral Emoji"/></a>
                                <a href="?#"> <img className="w-8" src={sad} alt="Sad Emoji"/> </a>
                            </div>
                        </div>
                        <div className="bg-green-profiledeets m-1 py-3">
                            <h5 className="text-center w-full"> Energy? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <a href="?#"> <img className="w-8" src={happy} alt="Happy Emoji"/> </a>
                                <a href="?#"> <img className="w-8" src={neutral} alt="Neutral Emoji"/></a>
                                <a href="?#"> <img className="w-8" src={sad} alt="Sad Emoji"/> </a>
                            </div>
                        </div>
                        <div className="bg-green-profiledeets m-1 py-3">
                            <h5 className="text-center w-full"> Physical? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <a href="?#"> <img className="w-8" src={happy} alt="Happy Emoji"/> </a>
                                <a href="?#"> <img className="w-8" src={neutral} alt="Neutral Emoji"/></a>
                                <a href="?#"> <img className="w-8" src={sad} alt="Sad Emoji"/> </a>
                            </div>
                        </div>
                        <div className="bg-green-profiledeets m-1 py-3">
                            <h5 className="text-center w-full"> Motivation? </h5>
                            <div className="flex flex-row justify-center w-full"> 
                                <a href="?#"> <img className="w-8" src={happy} alt="Happy Emoji"/> </a>
                                <a href="?#"> <img className="w-8" src={neutral} alt="Neutral Emoji"/></a>
                                <a href="?#"> <img className="w-8" src={sad} alt="Sad Emoji"/> </a>
                            </div>
                        </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white w-18 h-12 py-2 mx-4 px-4 rounded-full my-5"> Friends </button>
                </div>
            </div>
        </section>
    );
}

export default MoodTracker;



import React from 'react';
import tag from '../../assets/images/tag.svg';


import { BrowserRouter as Router, Link } from 'react-router-dom';


const RoomCard = () => {

    return (
        <>
        <div className="relative bg-brown-white hover:bg-brown-sand lg:w-full w-nine rounded-lg lg:mx-4 h-auto shadow-lg cursor-pointer">

            <div className="flex flex-row w-full">
                <Link to="chatroom/12999">
                    <div className="flex flex-col ml-6 w-nine" id="room-description">
                        <div className="flex flex-row py-4" id="chat-title">
                            <h1 className="text-xl font-bold px-2">Title</h1>
                            <img src={tag} alt="" className="w-4 cursor-pointer"/>
                        </div>

                        <div className="border-gray-300 border-l-4 px-4" id="chat-desciption">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia voluptatibus placeat reiciendis sequi alias error magnam dolore provident delectus iure. Ea error molestias impedit sequi modi ratione, deleniti vitae.
                                Aequi alias error  dolore provident delectus i mpedit sequi modi ratione ure. Ea error magnam molestias.
                            </p>
                        </div>

                        <div className="flex flex-row text-gray-400 py-2" id="chat-creds">
                            <p>dd/mm/yyyy • by_uID • dkths2smp77</p>
                        </div>
                    </div>
                </Link>

                <div className="flex flex-col items-center px-2 mx-auto" id="room-scoring">
                    <div className="flex flex-row pt-2 cursor-pointer" id="options-button">
                        <span className="text-xl hover:text-gray-500">•••</span>
                    </div>
                    <div className="flex flex-col mx-auto cursor-default" id="scoring">
                        <svg xmlns='http://www.w3.org/2000/svg' className="hover:fill-current cursor-pointer hover:text-green-600" viewBox='0 0 512 512'><title>Chevron Up</title><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' stroke-width='48' d='M112 328l144-144 144 144'/></svg>
                        <span>1945</span>
                        <svg xmlns='http://www.w3.org/2000/svg' className="hover:fill-current cursor-pointer hover:text-red-600" viewBox='0 0 512 512'><title>Chevron Down</title><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' stroke-width='48' d='M112 184l144 144 144-144'/></svg>
                    </div>
                    <div className="flex flex-row mt-auto mb-2 items-center cursor-default" id="participants">
                        <div id="participant-svg">
                        <   svg xmlns='http://www.w3.org/2000/svg' className="w-4" viewBox='0 0 512 512'><title>People Circle</title><path d='M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80z'/><path d='M323.67 292c-17.4 0-34.21-7.72-47.34-21.73a83.76 83.76 0 01-22-51.32c-1.47-20.7 4.88-39.75 17.88-53.62S303.38 144 323.67 144c20.14 0 38.37 7.62 51.33 21.46s19.47 33 18 53.51a84 84 0 01-22 51.3C357.86 284.28 341.06 292 323.67 292zm55.81-74zM163.82 295.36c-29.76 0-55.93-27.51-58.33-61.33-1.23-17.32 4.15-33.33 15.17-45.08s26.22-18 43.15-18 32.12 6.44 43.07 18.14 16.5 27.82 15.25 45c-2.44 33.77-28.6 61.27-58.31 61.27zM420.37 355.28c-1.59-4.7-5.46-9.71-13.22-14.46-23.46-14.33-52.32-21.91-83.48-21.91-30.57 0-60.23 7.9-83.53 22.25-26.25 16.17-43.89 39.75-51 68.18-1.68 6.69-4.13 19.14-1.51 26.11a192.18 192.18 0 00232.75-80.17zM163.63 401.37c7.07-28.21 22.12-51.73 45.47-70.75a8 8 0 00-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88-23.82 0-49.11 6.45-68.14 18.17-5.4 3.33-10.7 4.61-14.78 5.75a192.84 192.84 0 0077.78 86.64l1.79-.14a102.82 102.82 0 013.16-20.02z'/></svg>
                        </div>
                        <span>69</span>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default RoomCard;
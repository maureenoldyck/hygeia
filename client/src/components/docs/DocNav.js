import React from 'react';
import { Link } from 'react-router-dom';

//TODO: Add dropdown menu to the profile div

const DocNav = () => {


    return (
        
        <div className="h-1/4 mt-6 ml-4 bg-green-100 z-20 flex flex-row w-1/6">
            <nav className="w-nine m-auto">
                <div className="flex justify-start items-center flex-col w-full">
                    <div className="bg-green-profilebg bg-opacity-25 w-full h-2/5 my-6" id="doc-nav">
                        <ul className="ml-8 mt-4 w-full">
                            <h1 className="text-xl font-bold mb-4">Documentation:</h1>
                            <li><Link className="font-semibold" to="/whatis/mental-health">What is mental health?</Link>
                                <ul className="ml-4 mb-4">
                                    <li><Link to={"/whatis/mental-health"} >Mental health</Link></li>
                                    <li><Link to={"/whatis/list"}>A list</Link></li>
                                    <li><Link to={"/whatis/how-to-recognize"} >How to recognize</Link></li>
                                </ul>
                            </li>

                            <li><Link className="font-semibold" to="/recovery/can-it-go-away">Recovery</Link>
                                <ul className="ml-4 mb-4">
                                    <li><Link to={"/recovery/can-it-go-away"} >Can it go away?</Link></li>
                                    <li><Link to={"/recovery/things-to-look-out-for"}>Things to look out for</Link></li>
                                    <li><Link to={"/recovery/what-can-i-do"} >What can I do</Link></li>
                                </ul>
                            </li>

                            <li><Link className="font-semibold" to="/help/professional-help">How to find help?</Link>
                                <ul className="ml-4 mb-4">
                                    <li><Link to={"/help/professional-help"}>Professional help</Link></li>
                                    <li><Link to={"/help/help-from-friends"}>Help from friends</Link></li>
                                    <li><Link to={"/help/at-home"}>At home</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default DocNav;
import React from 'react';
import { Link } from 'react-router-dom';

//TODO: Add dropdown menu to the profile div

const DocNav = () => {


    return (
        
        <div className=" mt-6 ml-4 z-20 flex flex-row w-1/4">
            <nav className="w-nine">
                <div className="bg-blue-naval flex justify-start flex-col w-full h-auto top-16 sticky shadow-lg mb-16 text-white">
                    <div className="w-full my-3 pl-4" id="doc-nav">
                        <ul className="ml-1 mt-1 w-full">
                            <h1 className="text-xl font-bold mb-4">Documentation:</h1>
                            <li><Link className="font-bold" to="/whatis/mental-health">What is mental health?</Link>
                                <ul className="mb-4 pl-4">
                                    <li><Link className="hover:font-bold hover:underline" to={"/whatis/mental-health"} >Mental health</Link></li>
                                    <li><Link className="hover:font-bold hover:underline" to={"/whatis/list"}>A list</Link></li>
                                    <li><Link className="hover:font-bold hover:underline" to={"/whatis/how-to-recognize"} >How to recognize</Link></li>
                                </ul>
                            </li>

                            <li><Link className="font-bold" to="/recovery/can-it-go-away">Recovery</Link>
                                <ul className="mb-4 pl-4">
                                    <li><Link className="hover:font-bold hover:underline" to={"/recovery/can-it-go-away"} >Can it go away?</Link></li>
                                    <li><Link className="hover:font-bold hover:underline" to={"/recovery/things-to-look-out-for"}>Things to look out for</Link></li>
                                    <li><Link className="hover:font-bold hover:underline" to={"/recovery/what-can-i-do"} >What can I do</Link></li>
                                </ul>
                            </li>

                            <li><Link className="font-bold" to="/help/professional-help">How to find help?</Link>
                                <ul className="mb-4 pl-4">
                                    <li><Link className="hover:font-bold hover:underline" to={"/help/professional-help"}>Professional help</Link></li>
                                    <li><Link className="hover:font-bold hover:underline" to={"/help/help-from-friends"}>Help from friends</Link></li>
                                    <li><Link className="hover:font-bold hover:underline" to={"/help/at-home"}>At home</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link className="hover:font-bold hover:underline" to="/help/helplines">Helplines</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default DocNav;
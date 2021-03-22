import React from 'react';

//TODO: Add dropdown menu to the profile div

const DocNav = () => {
    return (
        
        <div className="h-auto mt-6 ml-4 bg-green-100 z-20 flex flex-row w-1/6">
            <nav className="w-nine m-auto">
                <div className="flex justify-around items-center flex-col w-full">
                    <div className="bg-green-profilebg bg-opacity-25 w-full h-2/5 my-6" id="doc-nav">
                        <ul className="ml-8 mt-4 w-full">
                            <h1 className="text-xl font-bold mb-4">Documentation:</h1>
                            <li><a className="font-semibold" href="">What is mental health?</a>
                                <ul className="ml-4 mb-4">
                                    <li><a href="">Mental health</a></li>
                                    <li><a href="">A list</a></li>
                                    <li><a href="">How to recognize</a></li>
                                </ul>
                            </li>

                            <li><a className="font-semibold" href="">Recovery</a>
                                <ul className="ml-4 mb-4">
                                    <li><a href="">Can it go away?</a></li>
                                    <li><a href="">things to look out for</a></li>
                                    <li><a href="">What can I do?</a></li>
                                </ul>
                            </li>

                            <li><a className="font-semibold" href="">How to find help?</a>
                                <ul className="ml-4 mb-4">
                                    <li><a href="">Professional help</a></li>
                                    <li><a href="">Help from friends</a></li>
                                    <li><a href="">At home</a></li>
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
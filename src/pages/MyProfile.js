import React from 'react';
import Profile from '../components/Profile.js';
import Profile_form from '../components/Profile_form.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Details from '../components/Details.js';
import DetailsForm from '../components/Details_form.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const MyProfile = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="flex justify-around bg-yellow-banana flex-col min-h-full ">

                <div className="flex justify-around flex-row h-screen z-0 mb-32 mt-28 px-12" >
                    <section className="bg-green-profilebg bg-opacity-25 justify-around w-full h-screen flex flex-row" id="left">

                        <div className="flex justify-around items-center flex-col w-full">
                            <div className="bg-green-profilebg bg-opacity-25 w-nine h-2/5 my-6" id="profile">
                                <Router>
                                <Switch>
                                    <Route path="/profile" exact component={Profile} />
                                    <Route path="/profile/edit/profile" exact component={Profile_form}/>
                                </Switch>
                                </Router>
                            </div>
        
                            <div className="bg-green-profiledeets w-nine h-3/5 my-6" id="details">
                                <Router>
                                <Switch>
                                    <Route path="/profile" exact component={Details} />
                                    <Route path="/profile/edit/details" exact component={DetailsForm}/>
                                </Switch>
                                </Router>
                            </div>
                        </div>

                        <div className="flex justify-around items-center w-full my-6">
                            <div className="bg-green-profiledeets w-nine h-full " id="settings">

                            </div>
                        </div>

                    </section>

                    <section className="flex bg-green-profilebg bg-opacity-25 w-1/3 h-screen" id="right">
                        <div className="flex justify-around items-center w-full my-6">
                            <div className="flex bg-green-profilebg bg-opacity-25 w-3/5 h-full my-6"></div>
                        </div>
                    </section>
                </div>

            </div>
            
            <div>
                <Footer />
            </div>
        </>
    );
}

export default MyProfile;
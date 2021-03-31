import React, {useState, useEffect} from 'react';
import Profile from '../components/profile/Profile.js';
import ProfileForm from '../components/profile/Profile_form.js';
import Details from '../components/profile/Details.js';
import DetailsForm from '../components/profile/Details_form.js';
import Settings from '../components/profile/Settings.js';
import SettingsForm from '../components/profile/Settings_form.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import MoodTracker from '../components/MoodTracker.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const MyProfile = () => {

    const [LandingNav, setLandingNav] = useState('');
  
    fetch("http://localhost:5000/api/profile", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include',
        })
        // .then(res => res.json())
        .then((res) => { 
            if (window.location.href === "http://localhost:3000/profile" || window.location.href === "http://localhost:3000/profile/") {
            
                const userID = localStorage.getItem('userID');
                window.location.href = "http://localhost:3000/profile/" + userID;

            } 
        }).catch((err) => {
            console.log(err);
        });
    
    useEffect(() => {
        fetch("http://localhost:5000/api/login", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include', 
        })
        .then(res => res.json())
        .then((res) => { 
            if (res.user) {
                setLandingNav(<Header user={res.user[0].id} />)
            } else {
                window.location.href = "/";
            }
        });
    }, []);

    return (
        <>
            <div>
                {LandingNav}
            </div>
            <div className="flex justify-around bg-brown-white flex-col">
                <div className="flex justify-around flex-row min-h-screen mb-32 lg:mt-20 mt-14 lg:px-12 px-4" >
                    <section className="bg-brown-sand bg-opacity-25 justify-around lg:w-screen w-full h-auto flex flex-col lg:flex-row" id="left">

                        <div className="flex items-center flex-col lg:min-w-100 w-auto">
                            <div className="bg-brown-sand bg-opacity-25 w-nine h-auto my-6 rounded-xl shadow-lg" id="profile">
                                <Router>
                                    <Switch>
                                        <Route path="/profile/:id/edit/details" exact component={Profile} />
                                        <Route path="/profile/:id/edit/settings" exact component={Profile} />
                                        <Route path="/profile/:id" exact component={Profile} />
                                        <Route path="/profile/:id/edit/profile" exact component={ProfileForm} />
                                    </Switch>

                                </Router>
                            </div>

                            <div className="bg-brown-white rounded-xl w-nine h-auto my-6 shadow-lg" id="details">
                                <Router>
                                    <Switch>
                                        <Route path="/profile/:id/edit/profile" exact component={Details} />
                                        <Route path="/profile/:id/edit/settings" exact component={Details} />
                                        <Route path="/profile/:id" exact component={Details} />
                                        <Route path="/profile/:id/edit/details" exact component={DetailsForm} />
                                    </Switch>
                                </Router>
                            </div>
                        </div>

                        <div className="flex justify-around w-full my-6">
                            <div className="bg-brown-white w-nine h-auto rounded-xl shadow-lg" id="settings">
                            <Router>
                                    <Switch>
                                        <Route path="/profile/:id/edit/profile" exact component={Settings} />
                                        <Route path="/profile/:id/edit/details" exact component={Settings} />
                                        <Route path="/profile/:id" exact component={Settings} />
                                        <Route path="/profile/:id/edit/settings" exact component={SettingsForm} />
                                    </Switch>
                                </Router>
                            </div>
                        </div>

                    </section>

                    <MoodTracker />
                </div>

            </div>
            
            <div>
                <Footer />
            </div>
        </>
    );
}

export default MyProfile;
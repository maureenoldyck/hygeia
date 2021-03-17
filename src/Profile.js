import React from 'react';
import Header from './Header.js'
import logo from './assets/logo.svg';

const Profile = () => {
    return (
        
        <div className="h-screen flex flex-col">

            <Header />
            <div className="flex flex-row h-screen z-0">
                <section className="bg-yellow-banana w-2/3" id="left-up">
                </section>

                <section className="bg-yellow-banana w-1/3" id="right-up">
                </section>
            </div>

            <footer className="bg-cover bg-green-footer w-full h-1/6 absolute bottom-0 left-0">
                <div className="absolute w-full text-center bottom-0 " id="copyright">
                    <p>©Hygeia - 2021</p>
                </div>
            </footer>
        </div>
    );
}

export default Profile;
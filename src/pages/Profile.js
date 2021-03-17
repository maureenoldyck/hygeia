import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

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

            <Footer />
        </div>
    );
}

export default Profile;
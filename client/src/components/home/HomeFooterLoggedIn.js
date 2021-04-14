import React from 'react';
import footerHome from '../../assets/images/footerHome.svg'

const HomeFooterLoggedIn = () => {
    return (
        
        <footer className="w-full h-24 -mt-24 bottom-0 left-0 relative">
            <img className="bg-brown-white w-full" src={footerHome} alt=""/>
            <div className="flex flex-col w-full absolute lg:bottom-12 2xl:bottom-3 bottom-28 md:bottom-24" id="sponsors">
                <div className="flex flex-row transform rotate-contact translate-y-20 justify-around ">
                    <img src="" alt="img1"/>
                    <img src="" alt="img2"/>
                    <img src="" alt="img3"/>
                    <img src="" alt="img4"/>
                    <img src="" alt="img5"/>
                </div>
            </div>
            <div className="bg-brown-clay w-full text-center text-white py-2" id="copyright">
                    <p>©Hygeia - 2021 | <a className="hover:underline" href="/terms-and-privacy">Terms of service</a></p>
            </div>
        </footer>
    );
}

export default HomeFooterLoggedIn;
import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';

import Header from '../../components/Header.js';
import HeaderHome from '../../components/home/HeaderHome.js';
import DocNav from '../../components/docs/DocNav.js';
import Article from '../../components/docs/ArticleBody.js';
import Footer from '../../components/Footer.js';



const Whatis = () => {


    const [LandingNav, setLandingNav] = useState('');
  

    useEffect(() => {
        fetch("http://localhost:5000/api/login", {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include', 
referrerPolicy: 'origin',
mode: 'cors',
referrer: document.location.origin 
        })
        .then(res => res.json())
        .then((res) => { 
            if (res.user) {
                setLandingNav(<Header user={52} />)
            } else {
                setLandingNav(<HeaderHome />)
            }
        });
    }, []);
    
    return (
        <>
            <div>
                {LandingNav}
            </div>
        
            <section className="min-h-screen mt-20 mb-24 bg-brown-white">
                <div className="flex flex-row w-full">
                    <DocNav />
                    <Route path={"/whatis/:slug"} component={Article}/>
                </div>
            </section>


            <div>
                <Footer />
            </div>
        </>
    );
}

export default Whatis;
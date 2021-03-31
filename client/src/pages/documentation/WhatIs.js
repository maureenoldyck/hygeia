import React from 'react';
import { Route } from 'react-router-dom';

import HeaderDoc from '../../components/docs/HeaderDoc.js';
import DocNav from '../../components/docs/DocNav.js';
import Article from '../../components/docs/ArticleBody.js';
import Footer from '../../components/Footer.js';


const Whatis = () => {

    
    return (
        <>
            <div>
                <HeaderDoc />
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
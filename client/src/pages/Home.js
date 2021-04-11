import React from 'react';
import Intro from '../components/home/Intro';
import About from '../components/home/About';


const Home = ({hideregister}) => {

   

    return (
        <div className="min-h-screen bg-brown-sand">
            
            
            <Intro/>
            <About/>
            {hideregister}
            

        </div>

    );
}

export default Home;
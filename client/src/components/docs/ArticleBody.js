import React from 'react';
import { useParams } from 'react-router';
import Articles from '../docs/Articles';


//TODO: Add dropdown menu to the profile div

const Article = () => {

    const {slug} = useParams();
    const post = Articles[slug];
    let { title, date, author, subtitle, description } = post;


    return (
    

        <div className="relative bg-brown-white lg:w-full w-nine rounded-lg lg:mx-4 shadow-lg p-12 m-12">
            <div className="flex flex-row justify-around overflow-auto">
                <h1 className="text-2xl w-1/2 font-bold ">{title}</h1>
                <p className="text-gray-400 ">{date}</p>
                <p className="text-gray-400 hover:underline">{author}</p> 

            </div>

            <br/>

            <h2 className="text-brown-yellow">{subtitle}</h2>
            <br/>
            <p className="whitespace-pre-wrap">{description}</p> 
        </div>
    );
}

export default Article;
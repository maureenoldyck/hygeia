import React from 'react';
import { useParams } from 'react-router';
import Articles from '../docs/Articles';


//TODO: Add dropdown menu to the profile div

const Article = () => {

    const {slug} = useParams();
    const post = Articles[slug];
    let { title, date, author, subtitle, description } = post;


    return (
    

        <div className="h-full my-6 ml-24 px-6 py-4 bg-green-100 z-20 flex flex-col w-4/6">
            <div className="flex flex-row justify-around overflow-auto">
                <h1 className="text-2xl w-1/2">{title}</h1>
                <p>{date}</p>
                <p>{author}</p> 

            </div>

            <br/>

            <h2>{subtitle}</h2>
            <br/>
            <p className="whitespace-pre-wrap">{description}</p> 
        </div>
    );
}

export default Article;
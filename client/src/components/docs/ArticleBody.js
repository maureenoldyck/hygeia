import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
// import Articles from '../docs/Articles';

const Article = () => {

    const {slug} = useParams();
    console.log(slug)
    // const post = Articles[slug];
    // let { title, date, author, subtitle, description } = post;

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('');
    const [authorLink, setAuthorLink] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/api/documentation/${slug}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include',
        })
        .then(res => res.json())
        .then((res) => { 
            setTitle(res[0].title);
            setSubtitle(res[0].subtitle);
            setDate(res[0].date);
            setAuthor(res[0].author);
            setAuthorLink(res[0].author_link);
            setDescription(res[0].description);
        });
    })


    return (
    

        <div className="relative bg-brown-white lg:w-full w-nine rounded-lg lg:mx-4 shadow-lg p-12 m-12">
            <div className="flex flex-row justify-around overflow-auto">
                <h1 className="text-2xl w-1/2 font-bold ">{title}</h1>
                <p className="text-gray-400 ">{date}</p>
                <p className="text-gray-400 hover:underline"><a href={authorLink}>{author}</a></p> 

            </div>

            <br/>

            <h2 className="text-brown-yellow">{subtitle}</h2>
            <br/>
            <p className="whitespace-pre-wrap">{description}</p> 
        </div>
    );
}

export default Article;
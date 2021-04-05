import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import HeaderHome from '../../components/home/HeaderHome'
import Header from '../../components/Header'
import FooterHome from '../../components/home/FooterHome'

const Search = () => {


    const [LandingNav, setLandingNav] = useState('');
    const [articles, setArticles] = useState([]);

    console.log(useParams());
    const { keywords } = useParams();


    useEffect(() => {
        fetch(`http://localhost:5000/api/search/${keywords}`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json,  charset=UTF-8', 
                'Accept': 'application/json, text/html',
            },
            credentials: 'include', 
        })
        .then(res => res.json())
        .then((res) => {
            setArticles(res);
        });
    }, [keywords]);



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
                setLandingNav(<HeaderHome />)
            }
        });
    }, []);



    return (
        <div className="bg-brown-sand min-h-screen">
            {LandingNav} 
            
            <div className="flex flex-col text-center mb-24 mt-12 items-stretch mx-5 min-h-screen">
                <div>
                    {articles.map(article => 
                        
                        <div className="border border-gray-600 p-4">
                            <Link to={`/${article.theme}/${article.slug}`} className="text-lg border-gray-300 borde px-4">{article.title}</Link>
                        </div>
                    
                    )}
                </div>
            </div>
            
            <FooterHome/>
        </div>
       
    );
}

export default Search;
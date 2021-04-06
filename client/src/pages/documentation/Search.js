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
            <div className="flex flex-col text-center text-3xl uppercase mt-3 text-blue-">
                <h1> Your search results: </h1>
            </div>
            <div className="flex flex-col text-center mb-24 mt-12 min-h-screen items-center mx-4">
                
                {articles.map(article => 
                    
                    <Link className="w-3/4" to={`/${article.theme}/${article.slug}`}> 
                        <div className="flex flex-col justify-center rounded-xl shadow-md mb-5 bg-brown-white py-12 hover:bg-white cursor-pointer" key={article.id}>
                            <h2 className="text-xl border-gray-300 border px-4"> {article.title}</h2>
                            <p className="text-brown-yellow">{article.subtitle}</p>
                        </div>
                    </Link>
                
                )}
            </div>
            
            <FooterHome/>
        </div>
       
    );
}

export default Search;
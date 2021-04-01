import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import DocNav from '../../components/docs/DocNav'
import HeaderHome from '../../components/home/HeaderHome'
import Header from '../../components/Header'
import FooterHome from '../../components/home/FooterHome'
import athome from '../../assets/images/athome.svg';
import canitgoaway from '../../assets/images/canitgoaway.svg';
import friends from '../../assets/images/friends.svg';
import helplines from '../../assets/images/helplines.svg';
import howtorecognize from '../../assets/images/howtorecognize.svg';
import professionalhelp from '../../assets/images/professionalhelp.svg';
import thingstolookoutfor from '../../assets/images/thingstolookoutfor.svg';
import whatcanido from '../../assets/images/whatcanido.svg';
import whatis from '../../assets/images/whatis.svg';
import documentation from '../../assets/images/documentation.svg';

const Documentation = () => {


    const [LandingNav, setLandingNav] = useState('');
  

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
            
            <div className="flex flex-col text-center mb-24 mt-12 items-stretch mx-5">
                <h1 className=" bg-blue-naval rounded-br-lg rounded-tl-lg py-3 2xl:text-lg 2xl:p-4 mb-3 text-white lg:w-1/5 w-1/2 self-center"> Mental Health </h1>
                <ul className="flex lg:flex-row flex-col min-w-1/3 mb-12">
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <Link to={"/whatis/mental-health"} >
                            <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={whatis} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> What is Mental health </h2> </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <Link to={"/whatis/list"}>
                        <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={documentation} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> A list </h2> </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <Link  to={"/whatis/how-to-recognize"} >
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={howtorecognize} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2>How to recognize</h2> </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
                <h1 className=" bg-blue-naval rounded-br-lg rounded-tl-lg py-3 2xl:text-lg 2xl:p-4 mb-3 text-white lg:w-1/5 w-1/2 self-center"> Recovery</h1>
                <ul className="flex lg:flex-row flex-col min-w-1/3 mb-12">
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <Link to={"/recovery/can-it-go-away"} >
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={canitgoaway} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> Can it go away? </h2> </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <Link to={"/recovery/things-to-look-out-for"}>
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={thingstolookoutfor} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2>Things to look out for </h2> </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <Link to={"/recovery/what-can-i-do"} >
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={whatcanido} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> What can I do? </h2> </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
                <h1 className=" bg-blue-naval rounded-br-lg rounded-tl-lg py-3 2xl:text-lg 2xl:p-4 mb-3 text-white lg:w-1/5 w-1/2 self-center"> Help </h1>
                <ul className="flex lg:flex-row flex-col min-w-1/3 mb-12">
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <Link to={"/help/professional-help"}>
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={professionalhelp} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> Professional help </h2> </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <Link to={"/help/help-from-friends"}>
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={friends} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2>Help from friends </h2> </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <Link to={"/help/at-home"}>
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={athome} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> At home </h2> </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
                <a href="#helplines" id="helplines" className=" bg-blue-naval rounded-br-lg rounded-tl-lg py-3 2xl:text-lg 2xl:p-4 mb-3 text-white lg:w-1/5 w-1/2 self-center"> Helplines </a>
                <ul className="flex lg:flex-row flex-col min-w-1/3 mb-12">
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <a href={"https://www.zelfmoord1813.be/"}>
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={helplines} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> Zelfmoordlijn</h2> </div>
                                     <p> Call : 1813</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <a href={"https://www.tele-onthaal.be"}>
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={helplines} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> Tele Onthaal </h2> </div>
                                    <p> Call: 106 </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="hover:font-bold hover:underline bg-white rounded-xl shadow-md lg:w-1/2 w-nine m-5 p-5">
                        <a href={"https://www.chsbelgium.org/en/"}>
                           <div className="flex flex-col">
                                <div className="flex justify-center">
                                    <img className="h-48 object-fill w-48 " src={helplines} alt=""/>
                                </div>
                                <div className="p-8">
                                    <div className="uppercase text-sm text-brown-yellow font-semibold"> <h2> Community Help Service </h2> </div>
                                    <p> Call:  32 (0) 2 648 40 14</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            
            <FooterHome/>
        </div>
       
    );
}

export default Documentation;
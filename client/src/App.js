import './App.css';
import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import ContactUs from './pages/ContactUs.js';
import Documentation from './pages/documentation/Documentation.js';
import MyProfile from './pages/MyProfile.js';
import Chatroom from './pages/Chatroom.js';
import SelectedChat from './components/chatroom/Pages/SelectedChat'
import Forum from './pages/Forum.js';
import Feed from './pages/Feed.js';
import Help from './pages/documentation/Help.js';
import Whatis from './pages/documentation/WhatIs.js';
import Recovery from './pages/documentation/Recovery.js';
import Search from './pages/documentation/Search.js';
import React, { useState , useEffect } from 'react';
import HeaderHome from '../components/home/HeaderHome';
import Header from '../components/Header';
import Community from '../components/home/Community';
import FooterHome from '../components/home/FooterHome';
import HomeFooterLoggedIn from '../components/home/HomeFooterLoggedIn'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {

  let loggedIn = localStorage.getItem('loggedIn');

  const [LandingNav, setLandingNav] = useState('');
  const [hideregister, setHideRegister] = useState();
  const [footer, setFooter] = useState();

  useEffect(() => {    
      fetch("http://localhost:5000/api/home", {
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
          console.log(res)
          if (res.loggedIn === true) {
              setLandingNav(<Header user={res.user[0].id} />)
              setHideRegister()
              setFooter(<HomeFooterLoggedIn/>)
          } else {
              setLandingNav(<HeaderHome />)
              setHideRegister(<Community />)
              setFooter(<FooterHome />)
          }
      });
  }, []);

  return (
    <Router>
      <div className="App m-auto w-screen max-w-Large h-auto">
      {LandingNav}
        <div>
          <div className="">
              <Switch>
                <Route path="/" exact component={Home} hideregister={hideregister}/>
                <Route path="/about-us" exact component={AboutUs} />
                <Route path="/contact-us" exact component={ContactUs} />
                <Route path="/documentation" exact component={Documentation} />
                <Route path="/search/:keywords" component={Search} />
                <Route path="/profile/:id">
                  {!loggedIn ? <Redirect to="/" /> : <MyProfile /> }
                </Route>
                <Route path="/chatroom" exact>
                  {!loggedIn ? <Redirect to="/" /> : <Chatroom /> }
                </Route>
                <Route path="/chatroom/12999">
                  {!loggedIn ? <Redirect to="/" /> : <SelectedChat /> }
                </Route>
                <Route path="/help" component={Help}/> 
                <Route path="/whatis" component={Whatis}/> 
                <Route path="/recovery" component={Recovery}/> 
                <Route path="/forums" > 
                  {!loggedIn ? <Redirect to="/" /> : <Forum /> }
                </Route>
                <Route path="/feed">
                  {!loggedIn ? <Redirect to="/" /> : <Feed />}
                </Route>  
                <Route path="*"> 
                  <Redirect to="/" />
                </Route>
              </Switch>
          </div>
        </div>
      {footer}
      </div>
    </Router>
  );
}


export default App;
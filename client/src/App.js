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
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {

  let loggedIn = localStorage.getItem('loggedIn');



  return (
    <Router>
      <div className="App m-auto w-screen max-w-Large h-auto">

        <div>
          <div className="">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about-us" exact component={AboutUs} />
                <Route path="/contact-us" exact component={ContactUs} />
                <Route path="/documentation" exact component={Documentation} />
                <Route path="/search/:keywords" component={Search} />
                <Route path="/profile/:id">
                  {!loggedIn ? <Redirect to="/" /> : <MyProfile userId={localStorage.getItem('userID')}/> }
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
      </div>
    </Router>
  );
}


export default App;
import './App.css';
import Home from './pages/Home.js';
import Documentation from './pages/documentation/Documentation.js';
import MyProfile from './pages/MyProfile.js';
import Chatroom from './pages/Chatroom.js';
import Forum from './pages/Forum.js';
import Feed from './pages/Feed.js';
import Help from './pages/documentation/Help.js';
import Whatis from './pages/documentation/WhatIs.js';
import Recovery from './pages/documentation/Recovery.js';
import Register from './pages/Login.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {


  return (
    <Router>
      <div className="App w-screen h-auto">
        
        <div>
          <div className="">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/documentation" exact component={Documentation} />
                <Route path="/profile" component={MyProfile}/>
                <Route path="/chatroom" component={Chatroom}/>
                <Route path="/help" component={Help}/> 
                <Route path="/whatis" component={Whatis}/> 
                <Route path="/recovery" component={Recovery}/> 
                <Route path="/forums" component={Forum}/> 
                <Route path="/feed" component={Feed}/>
                <Route path="/register" component={Register}/>
              </Switch>
          </div>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
import './App.css';
import Home from './pages/Home.js';
import MyProfile from './pages/MyProfile.js';
import Chatroom from './pages/Chatroom.js';
import Help from './pages/documentation/Help.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App h-screen">
      
      <div>
        <div className="">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={MyProfile}/>
              <Route path="/chatroom" component={Chatroom}/>
              <Route path="/help" component={Help}/> 
            </Switch>
          </Router>
        </div>
      </div>
      
    </div>
  );
}

export default App;
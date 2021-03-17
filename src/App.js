import './App.css';
import Home from './Home.js';
import Profile from './Profile.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App h-screen">
      
      <div>
        <div className="">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/profile" exact component={Profile}/>
            </Switch>
          </Router>
        </div>
      </div>
      
    </div>
  );
}

export default App;
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home'
import TripList from './components/TripList'
import TripNew from './components/TripNew'
import JournalList from './components/JournalList'
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
    <div className="App">
     <h1>Dusty Shoes</h1>
     <NavBar />
     <Switch>
       {/* <Route exact path="/" render={<Home />} />
       <Route exact path="/trips" render={<TripList />} />
       <Route exact path="/trips/new" render={<TripNew />} />
       <Route exact path="/journal" render={<JournalList />} /> */}
       <Route exact path="/" component={Home} />
       <Route exact path="/trips" component={TripList} />
       <Route exact path="/trips/new" component={TripNew} />
       <Route exact path="/journal" component={JournalList} />
       <Route exat path="/login" component={Login} />
       <Route exat path="/signup" component={Signup} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;

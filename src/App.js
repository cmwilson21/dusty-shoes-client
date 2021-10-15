import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/static/NavBar';
import Home from './components/static/Home'
import TripList from './components/trips/TripList'
import TripNew from './components/trips/TripNew'
import JournalList from './components/journal/JournalList'
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import TripDetails from './components/trips/TripDetails';


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
       <Route exact path="/trips/:id" component={TripDetails} />
       <Route exact path="/journal" component={JournalList} />
       <Route exat path="/login" component={Login} />
       <Route exat path="/signup" component={Signup} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;

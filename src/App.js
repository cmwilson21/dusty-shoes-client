import './App.css';
import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { getCurrentUser } from './actions/sessions'
import NavBar from './components/static/NavBar';
import Home from './components/static/Home';
import TripList from './components/trips/TripList';
import TripNew from './components/trips/TripNew';
import JournalList from './components/journal/JournalList';
import Login from './components/sessions/Login';
import Signup from './components/sessions/Signup';
import TripDetails from './components/trips/TripDetails';
import Errors from './components/static/Errors';


function App() {
  // const requesting = useSelector(state => state.requesting);
  // const city = 'london'
  const [weather, setWeather] = useState({})
  // const apiKey = process.env.REACT_APP_API_KEY;
  const apiKey = '069caffaa91daf864764d9b632ee4120'
  // const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=${apiKey}`


  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&APPID=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      setWeather(data.main)
    })
  } 
  , [])
  // console.log("weather", weather)

  const kelvinToFarenheight = (k) => {
    return (((k - 273.15) * 1.8) + 32).toFixed()
  }

  
  const dispatch = useDispatch();






  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])
  
  // if (requesting) return <h2>Loading...</h2>
  
  
  
  return (
    <Router>
      <div className="App">
      <h1>Dusty Shoes</h1>
      {/* {weather.temp} */}
      <div>
        <p>London Current Temp: {kelvinToFarenheight(weather.temp)}F</p>
      </div>
      <NavBar />
      <Errors />
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

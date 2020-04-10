import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Favorites from './components/Favorites/Favorites';
import Details from './components/Details/Details';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

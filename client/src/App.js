import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

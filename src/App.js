import React, { Component } from "react";
import NavBar from './Components/NavBar/index';
import { BrowserRouter as Router,Switch,Route }
 from "react-router-dom";

import './App.css';

//renders html
function App() {
  return (
  <Router>
    <NavBar/>
      <Switch>
        <Route path ='/'exact/>
      </Switch>
  </Router>
  );
}


export default App;
/*****************************************************************************/
/*!
\file App.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import React from "react";
import NavBar from "../src/Components/NavBar/NavBar"
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";

import './App.css';

import Home from "./Components/Pages/Home"

import PageSimple from "./Components/Pages/Page-Simple"
import PagePrototype from "./Components/Pages/Page-Prototype"
import PageDesignOpening from "./Components/Pages/Page-DesignOpening"
//renders html
function App()
{
  return (
    <div className='main'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/project-simple' exact component={PageSimple} />
          <Route path='/project-prototype' exact component={PagePrototype} />
          <Route path='/project-designopening' exact component={PageDesignOpening} />
        </Switch>

      </Router>
    </div>
  );
}


export default App;
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

import ProjectSimple from "./Components/Pages/Project-Simple"
//renders html
function App()
{
  return (
    <div className='main'>
      <Router>
        <NavBar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/project-simple' exact component={ProjectSimple} />
        </Switch>

      </Router>
    </div>
  );
}


export default App;
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
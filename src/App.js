import React from "react";
import NavBar from "../src/Components/NavBar/NavBar"
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";

import './App.css';

import Home from "./Components/Pages/Home"
import Services from "./Components/Pages/Services"
import Products from "./Components/Pages/Products"
import SignUp from "./Components/Pages/SignUp"
import Test from "./Components/Pages/Test"
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
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/test' exact component={Test} />
          <Route path='/project-simple' exact component={ProjectSimple} />
        </Switch>

      </Router>
    </div>
  );
}


export default App;
//import logo from './logo.svg';
import React, { Switch, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>                
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
    </div>
  );
}

export default App;

//{/* <Home /> */}
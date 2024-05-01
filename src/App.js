//import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import ReactDom from 'react-dom';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MedicalProfiles from "./MedicalProfiles.js"
import './index.css';

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search for Name" />
    </form>
  )
}


function statMedicalProfiles() {
  return (
    <div>
      <SearchBar />
    </div>
  )
}


function App() {

  const [page, setPage] = useState("/Medical Profiles")
 return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/MedicalProfiles" element={<MedicalProfiles />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>

    </div>
  );
}

export default App;

//{/* <Home /> */}
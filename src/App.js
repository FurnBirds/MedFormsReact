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
import MedProfilesTable from "./MedProfilesTable.js";
import NewProfile from "./NewPatientProfile.js";
import { MedicalProfiles } from "./TempMedicalprofiles.js"
import './index.css';

function App() {
  
  const [page, setPage] = useState("/Medical Profiles")
 return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact path="/MedicalProfiles"
          element={<MedProfilesTable
          MedicalProfiles = {MedicalProfiles}/>}
          />
        <Route exact path="/NewPatientProfile" element={<NewProfile />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>

    </div>
  );
}


export default App;


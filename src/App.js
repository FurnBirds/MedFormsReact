import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MedProfilesTable from "./MedProfilesTable.js";
import NewProfile from "./NewPatientProfile.js";
import ProfileDetails from "./ProfileDetails.js";

import './index.css';

function App() {
  

 return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact path="/MedicalProfiles"
          element={<MedProfilesTable/>}
          />
        <Route exact path="/MedicalProfiles/NewProfile" element={<NewProfile />} />
        <Route path="/MedicalProfiles/:id" element={<ProfileDetails />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}


export default App;


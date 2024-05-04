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

function MedProfiles() {
  return (
    <div>
      <SearchBar />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th className="names">Last Name</th>
            <th className="names">First Name</th>
            <th className="ptGender">Gender</th>
            <th className="ptDOB">Date of Birth</th>
            <th className="ptOccupation">Occupation</th>
            <th className="ptBP">Blood Pressure</th>
            <th className="ptCondition">Condition</th>
          </tr>
        </thead>
        <tbody>
          <MedProfileRow
            id="123"
            surname="Johnsters"
            firstname="Rachael"
            gender="female"
            dob="07/05/1999"
            occupation="Medical Registrar"
            systolicBP="128"
            diastolicBP="85"
            medicalIssue="Anaphelectic reaction to poison ivy"
          />
        </tbody>
      </table>
    </div>
  )
};

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search for Name" />
    </form>
  )
}

function MedProfileRow ({ id, surname, firstname, dob, gender, occupation, systolicBP, diastolicBP, medicalIssue}) {
  return (
    <tr>
      <td className = "ptID" id = "ptID">{id}</td>
      <td className = "names" id = "ptSurname">{surname}</td>
      <td className = "names" id = "ptFirstname">{firstname}</td>
      <td className = "ptGender">{gender}</td>
      <td className = "ptDOB">{dob}</td>
      <td className = "ptOccupation">{occupation}</td>
      <td className = "ptBP">{systolicBP} / {diastolicBP}</td>
      <td className = "ptCondition">{medicalIssue}</td>
    </tr>
  )
}

function App() {

  const [page, setPage] = useState("/Medical Profiles")
 return (
    <div className="App">
      <NavBar />
      <MedProfiles />
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
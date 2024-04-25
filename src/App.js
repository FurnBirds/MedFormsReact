//import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import {
  Routes,
  Route//, BrowserRouter
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MedicalProfiles from "./MedicalProfiles.js"
//import './App.css';

function App() {

  const [page, setPage] = useState("/Medical Profiles")
    
//   function getCurrentPage() {
//       switch(page) {
//           case "/":
//               return <Home />
//           case "/Medical Profiles":
//               return <MedicalProfiles />
//           default:
//               return <h1>404 not found</h1>
//       }
//   }

//   return (
//     <div>
//         <NavBar onChangePage={setPage} />
//         {getCurrentPage()}
//     </div>
// );

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>

    </div>
  );
}

export default App;

//{/* <Home /> */}
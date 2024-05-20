import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import runServer from "./api"
runServer();
//import reportWebVitals from './reportWebVitals';

//search bar
//pt profile table
//pt profile row

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
    
  
);



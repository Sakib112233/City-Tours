import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";
import Tour from "./components/Tour/Tour";
import {Router} from "react-router-dom";
function App() {
  return (
          <div className="App">
             <Navbar></Navbar>
             <TourList></TourList>
           </div>
  );
}

export default App;

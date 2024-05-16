import { useState } from "react";
import { Route, Routes, routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from './Home';
import Contact from "./Contact"
import About from './About';

function App() {
  return(
    <div>
      <h1>{}</h1>
      <div>
        <Navbar/>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/About" exact element={<About/>}/>
        <Route path="/Pro" exact element={<Contact />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
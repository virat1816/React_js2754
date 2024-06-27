import { useState } from "react";
import { Route, Routes, routes  } from "react-router-dom";
import Navbar from "./components/page/Navbar";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Main from "./components/page/Main";


function App() {
  const [value, setvalue] = useState({});

  const handle = (e) => {
    setvalue({ ...value, [e.target.name]: e.target.value });
  }; 
  console.log(value);
  return(
    <div>
      <h1>{}</h1>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/:id" exact element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
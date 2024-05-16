import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/page/About';
import Home from './component/page/Home';
import Navbar from './component/page/Navbar';
import Product from './component/page/Product';

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/product" exact element={<Product />} />
    </Routes>
  </div>
  );
}

export default App;

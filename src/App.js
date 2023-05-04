import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home'
import ProductDescription from './pages/product description/ProductDescription'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
function App() {
  return (
    <Router>
      <Routes>

   
    <Route path="/" element = {<Home/>} />
    <Route path="productDescription" element = {<ProductDescription/>} />
    {/* </div> */}
    </Routes>
    </Router>
  );
}

export default App;

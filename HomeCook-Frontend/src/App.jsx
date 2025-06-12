import React from 'react';
import Footer from './components/Footer/footer';

import Menu from './Pages/MenuPage/menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/navbar';
import './App.css';
import CartPage from './Pages/CartPage/cartpage';
import Home from './Pages/HomePage/home';
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

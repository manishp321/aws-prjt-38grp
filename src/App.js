import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
        <Router>
      <NavBar />
      <Menu/>
      <Footer/>
         <Routes>
           <Route path='/' exact />
         </Routes>
      </Router>
    </div>
  );
}

export default App;

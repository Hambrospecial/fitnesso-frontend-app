import React from "react";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './app.css';
import HomePage from "../src/HomePage";
import Login from "../src/components/Login/Login"
import Contact from "./components/Contact/pages/Contact.jsx"
import Navbar from "./components/Main/Navbar/Navbar"
import Footer from "./components/Main/Footer/Footer";
function App() {
  return (
    <div className='app'>
      <div className='section'>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/login' element={<Login />} />
            <Route
              exact
              path='/contact'
              element={
                <div>
                  <Navbar />
                  <Contact />
                  <Footer />
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;

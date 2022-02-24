import React from "react";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './app.css';
import HomePage from "../src/HomePage";
import Login from "../src/components/Login/Login"
function App() {
  return (
    <div className="app">
      <div className="section">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/login" element={ <Login/>} />
          </Routes>
         </Router>
      </div>
      
    </div>
  );
}

export default App;

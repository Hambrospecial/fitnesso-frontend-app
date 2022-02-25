import React from "react";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './app.css';
import HomePage from "../src/HomePage";
import Login from "../src/components/Login/Login"
import Signup from "./components/SignUp/SignUp";
import CreateAddress from "./components/Address/CreateAddress";
function App() {
  return (
    <div className="app">
      <div className="section">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/login" element={ <Login/>} />
            <Route exact path="/signup" element={ <Signup/>} />
            <Route exact path="/createaddress" element={ <CreateAddress/>} />
          </Routes>
         </Router>
      </div>
    </div>
  );
}

export default App;

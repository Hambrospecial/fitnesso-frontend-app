import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import HomePage from "../src/HomePage";
import Login from "../src/components/Login/Login";
import UserDashboard from "./components/Main/Dashboard/UserDashboard";
import Dashboard from "./components/Main/Dashboard/Dashboard";
import Orders from "./components/Main/Dashboard/Orders/Orders";
import UserFaves from "./components/Main/Dashboard/Favorites/UserFaves";
import UserInfo from "./components/Main/Dashboard/EditForms/UserInfo";
import UserPassword from "./components/Main/Dashboard/EditForms/UserPassword";
function App() {
  return (
    <div className="app">
      <div className="section">
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/userdashboard" element={<UserDashboard />}>
              <Route index element={<Dashboard />} />
              <Route path="/userdashboard/edit-user-info" element={<UserInfo/>}/>
              <Route path="/userdashboard/orders" element={<Orders/>}/>
              <Route path="/userdashboard/user-faves" element={<UserFaves/>}/>
              <Route path="/userdashboard/edit-user-pass" element={<UserPassword/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

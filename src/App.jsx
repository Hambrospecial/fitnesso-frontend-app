import React from "react";
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './app.css';
import HomePage from "../src/HomePage";
import Login from "../src/components/Login/Login"
import Signup from "./components/SignUp/SignUp";
import CreateAddress from "./components/Address/CreateAddress";
import BlogPost from './components/Main/BlogPost/BlogPost.js'
import FullBlogPost from './components/Main/BlogPost/FullBlogPost'
import Layout from "./components/Layout/Layout"

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
            <Route exact path="/blog" element={ <Layout />} >
                <Route path="" element={<BlogPost/>} />
                <Route  path=":id" element={<FullBlogPost/>} />
            </Route >
          </Routes>
         </Router>
      </div>
    </div>
  );
}

export default App;

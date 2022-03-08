import React from "react";
import './app.css';
import Navbar from "./components/Main/Navbar/Navbar"
import Blog from "./components/Main/Blog/Blog"
import Product from "./components/Main/Product/Product"
import Footer from "./components/Main/Footer/Footer"
import BlogArticle from "./components/Main/BlogArticle/BlogArticle";
import FixedImage from "./components/Main/FixedImage/FixedImage";
import Slider from "./components/Main/Slider/Slider";

function App() {
  return (
    <div className="app">
      <div className="section">
        <Navbar/>
        <Slider/>
        <Blog/>
        <Product/>
        <FixedImage/>
        <BlogArticle/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

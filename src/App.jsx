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
import ProductDashboard from "./components/Main/ProductCategory/ProductDashboard";
import AllProduct from "./components/Main/ProductCategory/AllProducts";
import Shop from './components/ShopPage/ShopPage'
import CartPage from "./components/Cart/CartPage/CartPage";
import SearchProductFilter from "./components/search/SearchProductFilter";
import Contact from "./components/Contact/pages/Contact.jsx"
import Navbar from "./components/Main/Navbar/Navbar"
import Footer from "./components/Main/Footer/Footer";
import Nutrition from "./components/Main/ProductCategory/Nutrition";
import Training from "./components/Main/ProductCategory/Training";
import ViewProduct from "./components/Main/ProductCategory/ViewProduct";
import UserAddress from "./components/Main/Dashboard/EditForms/UserAddress";

function App() {
  return (
    <div className='app'>
      <div className='section'>
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/product" element={<ProductDashboard/>}>
              <Route path="/product/item" element={<ViewProduct/>}/>
            </Route>
            <Route exact path="/userdashboard" element={<UserDashboard />}>
              <Route index element={<Dashboard />} />
              <Route path="/userdashboard/edit-user-info" element={<UserInfo/>}/>
              <Route path="/userdashboard/orders" element={<Orders/>}/>
              <Route path="/userdashboard/user-faves" element={<UserFaves/>}/>
              <Route path="/userdashboard/edit-user-pass" element={<UserPassword/>}/>
              <Route path="/userdashboard/edit-user-address" element={<UserAddress/>}/>
            </Route>
            <Route exact path="/product" element={<ProductDashboard />}>
              <Route index element={<AllProduct/>} />
              <Route path="/product/nutrition" element={<Nutrition/>}/>
              <Route path="/product/training" element={<Training/>}/>
            </Route>
            <Route exact path="/search" element={<SearchProductFilter/>}/>
            <Route exact path="/cart" element={<CartPage/>}/>
            <Route exact path="/shop" element={<Shop/>}/>
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

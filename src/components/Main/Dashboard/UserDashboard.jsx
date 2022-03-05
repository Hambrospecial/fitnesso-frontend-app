import React, {useState} from 'react';
import Dashboard from './Dashboard';
import './UserDashboard.css';

const UsersDashboard = () => {
  const homeurl = "http://localhost:3000/";

    const [sideBarResponsive, setSideBarResponsive] = useState(true)
    const handleResponsiveness =()=>{
        setSideBarResponsive(true)
    }
    const toggleSidebar = () =>{
        setSideBarResponsive(false)
    }
    
    // const logOut = (e) => {
    //   e.preventDefault();
    //   localStorage.clear()
    //       window.location.replace(homeurl)
    // }

  return (
      <>
    <div className="users__dashboard__container">
    <nav className="users__dashboard__navbar">
      <div className="users__dashboard__nav_icon" onClick={toggleSidebar}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="users__dashboard__navbar__left">
         {/* <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a className="users__dashboard__active_link" href="#">Admin</a>  */}
      </div>
      <div className="users__dashboard__navbar__right">
        <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-clock" aria-hidden="true"></i>
        </a>
        <a className="users__dashboard__avartar__link" href="#">
          {/* <AccountCircleIcon className="users__dashboard__avartar"/> */}
           {/* <i className="fa fa-user-circle-o" aria-hidden="true"></i>  */}
        </a>
      </div>
    </nav>
    
    <div className={!sideBarResponsive? 'users__dashboard__sidebar_responsive': ''} id="sidebar">
      <div className="users__dashboard__sidebar__title">
        <div className="users__dashboard__sidebar__img">
          <img src="https://uploads-ssl.webflow.com/5e80894f63c557e083ed96b4/5e808ce7dc544553a7f1b1e4_Black.svg" alt="logo" />
          <h1 style={{marginRight:'10px'}}> </h1>
        </div>
        <i
          onClick={handleResponsiveness}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="users__dashboard__sidebar__menu">
        <div className="users__dashboard__sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="/">My Dashboard</a>
        </div>
        <h2>Account</h2>
        <div className="users__dashboard__sidebar__link">
          <i className="fa fa-user" aria-hidden="true"></i>
          <a href="#">My Account Info</a>
        </div>
        <div className="users__dashboard__sidebar__link">
          <i className="fa fa-heart"></i>
          <a href="#">Favorites</a>
        </div>
        <div className="users__dashboard__sidebar__link">
          <i className="fa fa-envelope"></i>
          <a href="#">Inbox</a>
        </div>
        <div className="users__dashboard__sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Pending orders</a>
        </div>
        <div className="users__dashboard__sidebar__link">
          <i className="fa fa-handshake"></i>
          <a href="#">Orders</a>
        </div>
        <h2>Others</h2>
        <div className="users__dashboard__sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">FAQ</a>
        </div>
        <div className="users__dashboard__sidebar__link">
          <i className="fa fa-office"></i>
          <a href="#">Know more</a>
        </div>
        <div className="users__dashboard__sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#" onClick={() => {
            localStorage.clear()
                window.location.replace(homeurl)
          }}>Log out</a>
        </div>
      </div>
    </div>
    <main>
        <Dashboard/>
    </main>
  </div>
  </>
  )
}
export default UsersDashboard;

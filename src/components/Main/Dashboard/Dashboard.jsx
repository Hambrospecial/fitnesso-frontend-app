import React,{useEffect} from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./UserDashboard.css";
import axios from "axios";


const Dashboard = () => {

  const tt = localStorage.getItem("token")

  const br = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJBdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoidXNlcjp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoidXNlcjpyZWFkIn0seyJhdXRob3JpdHkiOiJhdXRob3I6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiYXV0aG9yOndyaXRlIn0seyJhdXRob3JpdHkiOiJwcm9kdWN0OnJlYWQifSx7ImF1dGhvcml0eSI6InByb2R1Y3Q6d3JpdGUifSx7ImF1dGhvcml0eSI6ImJsb2c6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiYmxvZzp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoidHJhaW5pbmc6d3JpdGUifSx7ImF1dGhvcml0eSI6InRyYWluaW5nOnJlYWQifSx7ImF1dGhvcml0eSI6InVzZXJzOnJlYWQifSx7ImF1dGhvcml0eSI6InVzZXJzOndyaXRlIn0seyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJzdWIiOiJCb2RhbSIsImlhdCI6MTY0NjIyODQ4MywiZXhwIjoxNjQ2MjY0NDgzfQ.VifYgkKhvu1L7wVKKsisheHS_Clcjq-tZOklSGEURo8' 

  // fetch('http://localhost:9067/person/profile', {
  //   withCredentials: true,
  //   credentials: 'include',
  //   headers: {
  //     'Authorization': br,
  //     'Connection': 'keep-alive',
  //     'Content-Type': 'application/json',
  //     'Cache-Control': 'no-cache'
  
  // },
  //   mode: "no-cors",
  //   method: "GET",
  // }).then(res => res.json())
  // .then(data => console.log(data))
  // .catch(err => console.err(err))

  // console.log(data);
  // console.error("here!")

  useEffect((e)=>{
      getUserInfo(e)
  },[])



  async function getUserInfo(e) {
 
    const url = 'http://localhost:9067/person/profile';

    try {
      const personInfoResponse = await axios.get(url, {
        headers: {Authorization: br},
        params: {
          username: `${localStorage.getItem('username')}`
        }
      });
      localStorage.setItem("person_info", personInfoResponse.data);

      console.log(personInfoResponse.data)    
  } catch (e) {
      console.log("User does not exist!");
  }
  }

  const personInfo = localStorage.getItem("person_info");



  return (
    <div>
      <div className="users__dashboard__main__title">
        <img src="assets/hello.svg" alt="" />
        <div className="users__dashboard__main__greeting">
          <h1>{"Hello " + localStorage.getItem("username")}</h1>
          <p>Welcome to your account dashboard</p>
        </div>
      </div>
      <div className="users__dashboard__charts">
        <div className="users__dashboard__charts__left">
          <div className="users__dashboard__charts__left__title">
            <div>
              <h1>Personal Information</h1>
              <p>Ikechukwu Anene</p>
            </div>
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <br />
          <div className="users__dashboard__charts__left__info">
            <div>
              <p>ikechukwu.anene@decagon.dev</p>
              <p>Ikechukwu Anene</p>
            </div>
            <a href="#">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="users__dashboard__charts__left">
          <div className="users__dashboard__charts__left__title">
            <div>
              <h1>Address & shipping details</h1>
              <p>Lagos State</p>
            </div>
            <i className="fa fa-truck" aria-hidden="true"></i>
          </div>
          <br />
          <div className="users__dashboard__charts__left__info">
            <div>
              <p>Asajon Way</p>
              <p>Phase IV Kubwa</p>
            </div>
            <a href="#">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="users__dashboard__charts__left">
          <div className="users__dashboard__charts__left__title">
            <div>
              <h1>Subscriptions</h1>
              <p></p>
            </div>
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <br />
          <div className="users__dashboard__charts__left__info">
            <div>
              <span className="users__dashboard__subscribe__checkbox">
                subscribe to our newsletter{" "}
              </span>
              <input type="checkbox" />
            </div>
            <a href="#">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="users__dashboard__charts__right">
          <div className="users__dashboard__charts__right__title">
            <div>
              <h1>Account details</h1>
            </div>
            <i className="fa fa-dollar-sign" aria-hidden="true"></i>
          </div>
          <div className="users__dashboard__charts__right__cards">
            <div className="users__dashboard__charts__right__title">
              <div>
                <p></p>
                <p>Wallet Balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

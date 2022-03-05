import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./UserDashboard.css";
import axios from "axios";
import { useState } from "react";
import useFetch from "./useFetch";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(token);
  const [peopledata, setPeopleData] = useState({});
  const [successful, setSuccessful] = useState(false);
  const [address, setAddress] = useState({});

  useEffect((e) => {
    getUserInfo(e);
  }, []);
  const getUserInfo = async (e) => {
    setSuccessful(true);
    const url = "http://localhost:9067/person/profile";
    try {
      const personInfoResponse = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          username: `${localStorage.getItem("username")}`,
        },
      });
      setPeopleData(personInfoResponse.data);
      setSuccessful(false);
      // setPeopleData(personInfoResponse.data)
      // console.table(personInfoResponse);
      console.log(personInfoResponse.data);
      setAddress(personInfoResponse.data.address);

      // localStorage.setItem("state", personInfoResponse.data.address.state);
      // DONT FORGET TO delete "state" from localStorage
      // const details = personInfoResponse.data
    } catch (e) {
      console.log("User does not exist!");
    }
  };

  // const personInfo = localStorage.getItem("person_info");
  return (
    <div id={peopledata.id}>
    <div className="users__dashboard__main__title">
      <img src={`${peopledata.image}`} alt={`${peopledata.image}`} />
      <div className="users__dashboard__main__greeting">
        <h1>{peopledata.username}</h1>
        <p>Welcome to your account dashboard {`${peopledata.firstName} ${peopledata.lastName}`}</p>
      </div>
    </div>
    <div className="users__dashboard__charts">
      <div className="users__dashboard__charts__left">
        <div className="users__dashboard__charts__left__title">
          <div>
            <h1>Personal Information</h1>
            <p>{peopledata.userName}</p>
          </div>
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <br />
        <div className="users__dashboard__charts__left__info">
          <div>
            <p>{`${peopledata.firstName} ${peopledata.lastName}`}</p>
            <p>{peopledata.email}</p>
            <p>{peopledata.phoneNumber}</p>
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
            <p>{address.state}</p>
          </div>
          <i className="fa fa-truck" aria-hidden="true"></i>
        </div>
        <br />
        <div className="users__dashboard__charts__left__info">
          <div>
            <p>{address.streetDetail}</p>
            <p>{address.city}</p>
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
  )
  
  ;
};

export default Dashboard;

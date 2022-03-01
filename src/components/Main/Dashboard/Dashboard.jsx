import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./UserDashboard.css";

const Dashboard = () => {
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

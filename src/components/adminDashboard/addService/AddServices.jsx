import React from "react";
import "./Addservice.css";

const Addservice = () => {
  return (
    <div className="admin-dashboard-board">
      <div className="add-service-body">
        <form className="add-service-form">
          <div className="add-service-title">services</div>
          <div className="add-service-subtitle">Add a service</div>

          <div className="add-service-input-container add-service-ic1">
            <input
              id="firstname"
              className="add-service-input"
              type="text"
              placeholder="service Name "
            />
          </div>
          <div className="add-service-input-container add-service-ic2">
            <input
              id="lastname"
              className="add-service-input"
              type="text"
              placeholder="service Price"
            />
          </div>
          <div className="add-service-input-container add-service-ic2">
            <input
              id="email"
              className="add-service-input"
              type="text"
              placeholder="service Description "
            />
          </div>
          <div className="add-service-input-container add-service-ic2">
            <input
              id="email"
              className="add-service-input"
              type="text"
              placeholder="service Type"
            />
          </div>
          <div className="add-service-input-container add-service-ic2">
            <input
              id="email"
              className="add-service-input"
              type="text"
              placeholder="Quantity"
            />
          </div>
          <div className="add-service-input-container add-service-ic2">
            <input
              id="email"
              className="add-service-input"
              type="text"
              placeholder="Remaining Stock"
            />
          </div>
          <div className="add-service-input-container add-service-ic2">
            {/* <input id="email" className="add-service-input" type="text" placeholder="service description " /> */}
            <select className="select-box" name="" id="">
              <option className="select-box1" value="">
                Select Category
              </option>
              <option className="select-box1" value="">
                service
              </option>
              <option className="select-box1" value="">
                SERVICES
              </option>
            </select>
          </div>
          <div className="add-service-iput-container add-service-ic2">
            <input
              id="email"
              className="add-service-iput"
              type="file"
              placeholder=" "
            />
            <div className="add-service-cut cut-short"></div>
          </div>

          <button type="submit" className="add-service-submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addservice;
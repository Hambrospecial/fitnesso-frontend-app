import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div className="admin-dashboard-board">
      <div className="add-product-body">
        <form className="add-product-form">
          <div className="add-product-title">Products</div>
          <div className="add-product-subtitle">Add a Product</div>

          <div className="add-product-input-container add-product-ic1">
            <input
              id="firstname"
              className="add-product-input"
              type="text"
              placeholder="Product Name "
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              id="lastname"
              className="add-product-input"
              type="text"
              placeholder="Product Price"
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              id="email"
              className="add-product-input"
              type="text"
              placeholder="Product Description "
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            {/* <input id="email" className="add-product-input" type="text" placeholder="Product description " /> */}
            <select className="select-box" name="" id="">
              <option className="select-box1" value="">
                Select Category
              </option>
              <option className="select-box1" value="">
                BURGER
              </option>
              <option className="select-box1" value="">
                BURGER
              </option>
              <option className="select-box1" value="">
                BURGER
              </option>
            </select>
          </div>
          <div className="add-product-iput-container add-product-ic2">
            <input
              id="email"
              className="add-product-iput"
              type="file"
              placeholder=" "
            />
            <div className="add-product-cut cut-short"></div>
          </div>

          <button type="text" className="add-product-submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

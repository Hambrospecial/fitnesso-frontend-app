import axios from "axios";
import React from "react";
import { notifyUser } from "../../Contact/utils";
import "./AddProduct.css";
import { useState } from 'react'

function Form() {
    const [state, setState] = useState({
        productName: '',
        price: '',
        description: '',
        productType: '',
        quantity: '',
        stock: '',
        category: ''
    })

    const handleInput=(e)=>{
        const newObj = {...state}
        newObj[e.target.name] = e.target.value
        setState(newObj)
    }

    const url = "https://fitnesso-app-new.herokuapp.com/product/add"

    const handleSubmit=(e)=>{
        e.preventDefault()
        const body = {
            productName: state.productName.trim(),
            price: state.price.trim(),
            description: state.description.trim(),
            productType: state.productType.trim(),
            quantity: state.quantity.trim(),
            stock: state.stock.trim(),
            category: state.category
        }

        console.log(body)
        axios.post(url, body)
        .then((res) => {
            notifyUser("Product added successfully")
        }).catch((err) => {
            console.log(err)
            console.log("Message not sent")
        })
    }
}


const AddProduct = () => {
  return (
    <div className="admin-dashboard-board">
      <div className="add-product-body">
        <form className="add-product-form">
          <div className="add-product-title">Products</div>
          <div className="add-product-subtitle">Add a Product</div>

          <div className="add-product-input-container add-product-ic1">
            <input
              name="productName"
              className="add-product-input"
              type="text"
              placeholder="Product Name"
              value={state.productName}
              onChange={handleInput}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="price"
              className="add-product-input"
              type="text"
              placeholder="Product Price"
              value={state.price}
              onChange={handleInput}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="description"
              className="add-product-input"
              type="text"
              placeholder="Product Description "
              value={state.description}
              onChange={handleInput}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="productType"
              className="add-product-input"
              type="text"
              placeholder="Product Type"
              value={state.productType}
              onChange={handleInput}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="quantity"
              className="add-product-input"
              type="text"
              placeholder="Quantity"
              value={state.quantity}
              onChange={handleInput}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="stock"
              className="add-product-input"
              type="text"
              placeholder="Remaining Stock"
              value={state.stock}
              onChange={handleInput}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            {/* <input id="email" className="add-product-input" type="text" placeholder="Product description " /> */}
            <select className="select-box" name="category" value={state.category} onChange={handleInput}>
              <option className="select-box1" value="">
                Select Category
              </option>
              <option className="select-box1" value="">
                PRODUCT
              </option>
              <option className="select-box1" value="">
                SERVICES
              </option>
            </select>
          </div>
          <div className="add-product-iput-container add-product-ic2">
            <input
              name="image"
              className="add-product-iput"
              type="file"
              placeholder=" "
            />
            <div className="add-product-cut cut-short"></div>
          </div>

          <button type="submit" className="add-product-submit" onClick={handleSubmit} >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

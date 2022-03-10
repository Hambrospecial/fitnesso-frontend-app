import axios from "axios";
import { notifyUser } from "../../Contact/utils";
import "./AddProduct.css";
import React, { useState } from 'react';

             

// function Form() {
//     const [state, setState] = useState({
//         productName: '',
//         price: '',
//         description: '',
//         productType: '',
//         quantity: '',
//         stock: '',
//         category: ''
//     })

//     const handleInput=(e)=>{
//         const newObj = {...state}
//         newObj[e.target.name] = e.target.value
//         setState(newObj)
//     }

//     const url = "https://fitnesso-app-new.herokuapp.com/product/add"

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         const body = {
//             productName: state.productName.trim(),
//             price: state.price.trim(),
//             description: state.description.trim(),
//             productType: state.productType.trim(),
//             quantity: state.quantity.trim(),
//             stock: state.stock.trim(),
//             category: state.category
//         }

//         console.log(body)
//         axios.post(url, body)
//         .then((res) => {
//             notifyUser("Product added successfully")
//         }).catch((err) => {
//             console.log(err)
//             console.log("Message not sent")
//         })
//     }
// }


const AddProduct = () => {
  
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productType, setProductType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [monthlySubscription, setMonthlySubscription] = useState("");
  const [image, setImage] = useState("");

  async function sendAddProductRequest(e) {
    e.preventDefault();
    const reqBody = {
      productName: productName,
      price: price,
      description: description,
      productType: productType,
      quantity: quantity,
      stock: stock,
      category: category,
      monthlySubscription: monthlySubscription,
      image: image
    };

    console.log(reqBody)

    const url = 'http://localhost:9067/product/add';
  
    try {
        // const loginResponse = await axios.post(url, reqBody);
        const res = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Authorization": 'Bearer ' + localStorage.getItem('token'),
            "Content-Type":"application/json",
          },
          body: JSON.stringify(reqBody)
        })
        
        console.log(res.data)
        console.log("Product added successfully")
      
       // window.location.replace(homeurl)
  
    } catch (e) {
        console.log("Failed woefully");
       // console.log(e)
    }
  
  }
  const [disabledButton, setDisabledButton] = React.useState(false);
  // return(
  //     <div className="login-container">
  //         <div className='login'>
  //             <p className="sign" align="center">LOGIN</p>
  //             <form className='form1'>
  //                 <input type="text" className='username' align="center" 
  //                 placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)} required/>
                  
  //                 <input type="password" className='password' align="center" 
  //                 placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} required/>
                  
  //                 <button type='submit' className='submit' disabled={disabledButton} onClick={sendLoginRequest} href="/">Login</button>
     
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
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="price"
              className="add-product-input"
              type="text"
              placeholder="Product Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="description"
              className="add-product-input"
              type="text"
              placeholder="Product Description "
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="category"
              className="add-product-input"
              type="text"
              placeholder="Product Category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="quantity"
              className="add-product-input"
              type="text"
              placeholder="Quantity / Trainers"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            <input
              name="stock"
              className="add-product-input"
              type="text"
              placeholder="Remaining Stock / Available Trainers"
              value={stock}
              onChange={(event) => setStock(event.target.value)}
            />
          </div>
          <div className="add-product-input-container add-product-ic2">
            {/* <select className="select-box" name="category" >
              <option className="select-box1" value={productType} onChange={(event) => setProductType(event.target.value)}>
                Select Product Type
              </option>
              <option className="select-box1" value={productType} onChange={(event) => setProductType(event.target.value)}>
                PRODUCT
              </option>
              <option className="select-box1" value={productType} onChange={(event) => setProductType(event.target.value)}>
                SERVICES
              </option>
            </select> */}
            <input
              name="category"
              className="add-product-input"
              type="text"
              placeholder="Product Type"
              value={productType}
              onChange={(event) => setProductType(event.target.value)}
            />
          </div>
          <div className="add-product-iput-container add-product-ic2">
          <input
              name="image"
              className="add-product-input"
              type="text"
              placeholder="Image Url"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <div className="add-product-cut cut-short"></div>
          </div>
          <div className="add-product-iput-container add-product-ic2">
          <input
              name="monthlySubscription"
              className="add-product-input"
              type="text"
              placeholder="Monthly Subscription"
              value={monthlySubscription}
              onChange={(event) => setMonthlySubscription(event.target.value)}
            />
            <div className="add-product-cut cut-short"></div>
          </div>

          <button type="submit" className="add-product-submit" disbled={disabledButton} onClick={sendAddProductRequest} >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

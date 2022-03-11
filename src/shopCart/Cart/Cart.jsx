import React, {createContext} from 'react'
import { useNavigate } from 'react-router-dom'

import CartItem from '../CartItem/CartItem'
//styles
import { Wrapper } from './Cart.styles'
//Types
import { CartItemType } from '../ShopApp'

// const CartInfoContext = createContext()


const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) => items.reduce((ack, item) => ack + item.amount * item.price, 0)
  const navigate = useNavigate();

  var myMap = new Map();
  cartItems.map((item) => (
    myMap.set(item.id, item.amount)
  ));

  let obj = {};
  myMap.forEach(function(value, key){
    obj[key] = value;
  })

  const addToCartFunction = async () => {
    console.log(localStorage.getItem("token"), "token here");
      const res = await fetch("https://fitnesso-app-new.herokuapp.com/carts/add", {
        method: "POST",
        headers: {"Content-type": "application/json",
      "Authorization" : "Bearer " + localStorage.getItem("token")},
      body: JSON.stringify(myMap)
      });

      const data = await res.json();
      console.log(data);
      localStorage.setItem("cartList", data.cartList);
      navigate("/checkout");
  }
  
 return (
  <Wrapper>
   <h2>Your Shopping Cart</h2>
   {cartItems.length === 0 ? <p>No items in cart</p> : null}
   {cartItems.map(item => (<CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />))}
   <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
   {console.log(cartItems, 'cart item')}
   {cartItems.length>0 && <button onClick = {addToCartFunction} className="prod_cart_btn">CHECK OUT</button>}
  </Wrapper>
  
 )
}

export default Cart
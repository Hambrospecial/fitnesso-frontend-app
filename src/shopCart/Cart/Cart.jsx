import React, {createContext} from 'react'

import CartItem from '../CartItem/CartItem'
//styles
import { Wrapper } from './Cart.styles'
//Types
import { CartItemType } from '../ShopApp'

// const CartInfoContext = createContext()


const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items) => items.reduce((ack, item) => ack + item.amount * item.price, 0)
 return (
  <Wrapper>
   <h2>Your Shopping Cart</h2>
   {cartItems.length === 0 ? <p>No items in cart</p> : null}
   {cartItems.map(item => (<CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />))}
   <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
   {console.log(cartItems, 'cart item')}
   {cartItems.length>0 && <button onClick = {() => window.location.href='/shop'}>CHECK OUT</button>}
  </Wrapper>
  
 )
}

export default Cart
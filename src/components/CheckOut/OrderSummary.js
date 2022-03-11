import React from 'react';
import "./OrderSummary.css";

const OrderSummary = () => {
  const cartList = localStorage.getItem("cartList");
  const itemsPrice = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalPrice = itemsPrice + 149.56;
  return (
    <div>
        <div className="OrderSummary-container">
        <div className="OrderSummary-row OrderSummary-split OrderSummary-title-content">
          <div className="OrderSummary-design OrderSummary-heading">Order Summary</div>
        </div>
        <div className="OrderSummary-row OrderSummary-cal-split">
          <div className="OrderSummary-method-title-info">Subtotal</div>
          <div className="OrderSummary-method-amount">$ {itemsPrice} USD</div>
        </div>
        <div className="OrderSummary-row OrderSummary-cal-split">
          <div className="OrderSummary-method-title-info">Flat Rate</div>
          <div className="OrderSummary-method-amount-flat">$ 149.56 USD</div>
        </div>
        <div className="OrderSummary-row OrderSummary-cal-split">
          <div className="OrderSummary-method-title-info">Total</div>
          <div className="OrderSummary-method-amount">$ {totalPrice} USD</div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary;
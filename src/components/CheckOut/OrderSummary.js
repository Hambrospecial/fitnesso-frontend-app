import React from 'react';
import "./OrderSummary.css";

const OrderSummary = () => {
  return (
    <div>
        <div className="OrderSummary-container">
        <div className="OrderSummary-row OrderSummary-split OrderSummary-title-content">
          <div className="OrderSummary-design OrderSummary-heading">Order Summary</div>
        </div>
        <div className="OrderSummary-row OrderSummary-cal-split">
          <div className="OrderSummary-method-title-info">Subtotal</div>
          <div className="OrderSummary-method-amount">$ 149.56 USD</div>
        </div>
        <div className="OrderSummary-row OrderSummary-cal-split">
          <div className="OrderSummary-method-title-info">Flat Rate</div>
          <div className="OrderSummary-method-amount-flat">$ 149.56 USD</div>
        </div>
        <div className="OrderSummary-row OrderSummary-cal-split">
          <div className="OrderSummary-method-title-info">Total</div>
          <div className="OrderSummary-method-amount">$ 149.56 USD</div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary;
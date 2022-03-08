import React from "react";
import "./OneItemOrder.css";
import logo from "./bean.png";

const OneItemOrder = () => {
  return (
    <div className="OneItemOrder-row OneItemOrder-item-container">
      <div className="OneItemOrder-cal-split">
        <img src={logo} className="OneItemOrder-image600" alt="pic" />
      </div>
      <div>
        <div className="OneItemOrder-method-title OneItemOrder-cal-split">Home Burn</div>
        <div className="OneItemOrder-method-title-info OneItemOrder-cal-split">Quantity: 1</div>
        <div className="OneItemOrder-method-amount OneItemOrder-cal-split">$ 149.56 USD</div>
      </div>
    </div>
  );
};

export default OneItemOrder;

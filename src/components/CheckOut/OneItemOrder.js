import React from "react";
import "./OneItemOrder.css";
import logo from "./bean.png";

const OneItemOrder = ({itemData}) => {
  return (
    <div className="OneItemOrder-row OneItemOrder-item-container">
      <div className="OneItemOrder-cal-split">
        <img src={itemData.image} className="OneItemOrder-image600" alt="pic" />
      </div>
      <div>
        <div className="OneItemOrder-method-title OneItemOrder-cal-split">{itemData.productName}</div>
        <div className="OneItemOrder-method-title-info OneItemOrder-cal-split">Quantity: {itemData.quantity}</div>
        <div className="OneItemOrder-method-amount OneItemOrder-cal-split">$ {itemData.price} USD</div>
      </div>
    </div>
  );
};

export default OneItemOrder;

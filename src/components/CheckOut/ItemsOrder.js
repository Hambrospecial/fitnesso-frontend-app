import React from 'react';
import "./ItemsOrder.css"
import OneItemOrder from './OneItemOrder';

const ItemsOrder = () => {
  const cartList = localStorage.getItem("cartList");
  return (
    <div>
      <div className="ItemsOrder-container">
        <div className="ItemsOrder-row ItemsOrder-split ItemsOrder-title-content">
          <div className="ItemsOrder-design ItemsOrder-heading">Items in Order</div>
        </div>
        {cartList.map((item, i) => (
          <OneItemOrder key={i} itemData={item}/>
        ))}
      </div>
    </div>
  )
}

export default ItemsOrder;
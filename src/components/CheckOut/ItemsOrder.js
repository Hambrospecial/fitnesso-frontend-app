import React from 'react';
import "./ItemsOrder.css"
import OneItemOrder from './OneItemOrder';

const ItemsOrder = () => {
  return (
    <div>
      <div className="ItemsOrder-container">
        <div className="ItemsOrder-row ItemsOrder-split ItemsOrder-title-content">
          <div className="ItemsOrder-design ItemsOrder-heading">Items in Order</div>
        </div>
            <OneItemOrder/>
            <OneItemOrder/>
            <OneItemOrder/>
      </div>
    </div>
  )
}

export default ItemsOrder;
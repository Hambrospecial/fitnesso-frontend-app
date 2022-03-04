import React from "react";
// import "../UserDashboard.css";
import './Orders.css'

const Orders = () => {
  return (
    <div className="order-container">
      <article className="order-article">
        <div className="order-details">
            <img src="#" alt="Product Image Loading" />
            <div className="order-info">
                <h3>Order No:</h3>
                <p>Order Date:</p>
                <p>Order Total Cost:</p>
                <div className="order-status">
                    Order Status:
                </div>
            </div>
            <a href="#" className="order-see-more">See Details</a>
        </div>
      </article>
    </div>
  );
};

export default Orders;

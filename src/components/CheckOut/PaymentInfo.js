import React, { useState } from "react";
import "./PaymentInfo.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const PaymentInfo = ({setCardInfo, cardInfo}) => {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
        ...cardInfo,
        [name]: value
      });
  }
  const handleInputFocus = (e) => {
    setFocus({ focus: e.target.name });
  };

  return (
    <div>
      <div className="PaymentInfo-container">
        <div className="PaymentInfo-row PaymentInfo-split PaymentInfo-title-content">
          <div className="PaymentInfo-design PaymentInfo-heading">Payment Info</div>
          <div className="PaymentInfo-design">*Required</div>
        </div>
        <div className="PaymentInfo-row PaymentInfo-clean">
          <div className="PaymentInfo-card-adjust">
            <Cards
              cvc={cardInfo.cvcNumber || ''}
              expiry={cardInfo.expiringDate || ''}
              focused={cardInfo.focus || ''}
              name={cardInfo.name || ''}
              number={cardInfo.cardNumber || ''}
            />
          </div>
          <div>
            <div className="PaymentInfo-info-input PaymentInfo-title-content PaymentInfo-input-container">
              <label>Card Number* </label>
              <input
                className="PaymentInfo-big-input"
                name="cardNumber"
                value={cardInfo.cardNumber || ''}
                onChange={handleInputChange}
                onFocus={(e) => setFocus(e.target.name)}
                type="text"
              />
            </div>
            <div className="PaymentInfo-info-input PaymentInfo-title-content PaymentInfo-big-input PaymentInfo-input-container">
              <label>Expiration Date MM/YY* </label>
              <input
                maxLength="5"
                type="text"
                name="expiringDate"
                value={cardInfo.expiringDate || ''}
                onChange={handleInputChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            <div className="PaymentInfo-info-input PaymentInfo-title-content PaymentInfo-small-input PaymentInfo-input-container">
              <label>Card CVC* </label>
              <input
                type="password"
                name="cvcNumber"
                value={cardInfo.cvcNumber || ''}
                onChange={handleInputChange}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;

import React from "react";
import "./RightPane.css";

function PayRequest() {
    return (
      <div className="pay-request">
        <h3>Pay Request</h3>
        <p>Amount: $10.00</p>
        <button className="pay-request-button">Pay Now</button>
      </div>
    );
  }
  
  function ShowOrder() {
    return (
      <div className="show-order">
        <h3>Order Summary</h3>
        <ul>
          <li>Item 1 - $10.00</li>
          <li>Item 2 - $20.00</li>
          <li>Item 3 - $30.00</li>
        </ul>
        <p>Total: $60.00</p>
      </div>
    );
  }

export { PayRequest, ShowOrder };

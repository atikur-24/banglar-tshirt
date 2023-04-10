import React from "react";
import "./Cart.css";

const Cart = ({ cart, handlerRemoveFromCart }) => {
  return (
    <div>
      <h2>Order Summary {cart.length} </h2>
      <hr />
      {cart.map((ts, idx) => (
          <div className="order" key={idx}>
            <p>{ts.name}</p>
            <button
              onClick={() => handlerRemoveFromCart(ts._id)}
              className="x-btn"
            >
              X
            </button>
          </div>
      ))}
    </div>
  );
};

export default Cart;

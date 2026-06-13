import React from "react";

export default function Cart({ cart, removeFromCart }) {
  return (
    <div className="page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>🛒 Your cart is empty</p>
      ) : (
        <div className="grid">
          {cart.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="info">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

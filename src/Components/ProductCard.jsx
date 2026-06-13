import React from "react";

export default function ProductCard({ item, addToCart }) {
  return (
    <div className="product-card">
      <img src={item.thumbnail} alt={item.title} />
      <div className="info">
        <h3>{item.title}</h3>
        <p className="price">${item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}

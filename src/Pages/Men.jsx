import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
export default function Men({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="page">
      <h2>Men's Collection</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} item={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

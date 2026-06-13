import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
export default function Accessories({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-watches")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="page">
      <h2>Accessories</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} item={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

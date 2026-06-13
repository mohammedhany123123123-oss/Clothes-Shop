import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Women({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="page">
      <h2>Women's Collection</h2>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} item={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

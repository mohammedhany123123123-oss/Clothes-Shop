import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <h2>Discover Your Style</h2>
      <p>Shop the latest fashion for everyone</p>
      <div className="hero-btns">
        <Link to="/men" className="btn">
          Shop Men
        </Link>
        <Link to="/women" className="btn">
          Shop Women
        </Link>
      </div>
    </div>
  );
}

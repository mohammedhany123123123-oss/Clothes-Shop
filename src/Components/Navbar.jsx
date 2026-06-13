import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1 className="logo">TrendZone</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/cart">🛒 Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

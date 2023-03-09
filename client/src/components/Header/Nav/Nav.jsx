import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return <nav >
  <Link to="/">Home</Link>
  <Link to="/products">Products</Link>
  <Link className="gg-shopping-cart" to="/cart"></Link> 
  </nav>
};

export default Nav;

import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return <nav className="me-auto">
  <Link to="/">Home</Link>
  <Link to="/products">Products</Link>
  {/* <Link to="/:id">Search</Link> */}
  </nav>
};

export default Nav;

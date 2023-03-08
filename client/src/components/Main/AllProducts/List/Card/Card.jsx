import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return <article className="all-products-card">
    <img src={props.data.image} alt="" />
    <h1>{props.data.title}</h1>
    <p>Price: {props.data.price}€</p>
    <p>Rating: {props.data.rating.rate}</p>
    <Link to={'/products/'+props.data.id}>Details</Link>
    <button>Add to Cart</button>


  </article>;
};

export default Card;

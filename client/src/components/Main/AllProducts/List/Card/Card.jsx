import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';


const Card = (props) => {
  const dispatch = useDispatch();
  return <article className="all-products-card">
    <img src={props.data.image} alt="" />
    <h1>{props.data.title}</h1>
    <p>Price: {props.data.price}€</p>
    <p>Rating: {props.data.rating.rate}</p>
    <Link to={'/products/'+props.data.id}>Details</Link>
 


  </article>;
};

export default Card;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../../redux/cart/cartActions";

/**Print cards */

const Card = (props) => {
  const dispatch = useDispatch();
  return <article className="product-card ">
    <img className="product-card__image"  src={props.data.image} alt="" />
    <h1 className="product-card__brand" >{props.data.title}</h1>
    <p className="product-card__description" >Price: {props.data.price}€</p>
    <p className="product-card__description">Rating: {props.data.rating.rate}</p>
    <Link to={'/products/'+props.data.id}>Details</Link>
    <button className="css-button-retro--blue " onClick={()=>{
          dispatch(addToCart(props.data))
        }}>Add to cart</button>


  </article>;
};

export default Card;

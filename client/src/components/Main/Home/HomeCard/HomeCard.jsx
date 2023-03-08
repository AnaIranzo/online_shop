import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../redux/cart/cartActions";

const HomeCard = (props) => {
  const dispatch = useDispatch();
  return <article className="all-products-card">

<img src={props.data.image} alt="" />
    <h1>{props.data.title}</h1>
    <p>Price: {props.data.price}€</p>
    <p>Rating: {props.data.rating.rate}</p>
    <Link to={'/products/'+props.data.id}>Details</Link>
    <button onClick={()=>{
          dispatch(addToCart(props.data))
        }}>Add to cart</button>
  </article>;
};

export default HomeCard;

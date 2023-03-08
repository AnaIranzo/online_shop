import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../redux/cart/cartActions";

const DetailCard = (props) => {
  const dispatch = useDispatch();
  return <article>
      
      <img src={props.data.image} alt="" />
      <h1>{props.data.title}</h1>
      <p>Price: {props.data.price}€</p>
      <p>Rating: {props.data.rating.rate}</p>
      <p>Provider: {props.data.provider.company_name}</p>
      <button onClick={()=>{
          dispatch(addToCart(props.data))
        }}>Add to cart</button>
      


  </article>;
};

export default DetailCard;

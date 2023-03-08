import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../redux/cart/cartActions";

const DetailCard = (props) => {
  const dispatch = useDispatch();
  return <article className="all-products-card">
      
      <img src={props.data.image} alt="" />
      <h1>{props.data.title}</h1>
      <p>Description: {props.data.description}</p>
      <p>Price: {props.data.price}€</p>
      <p>Rating: {props.data.rating.rate}</p>
      <p>Provider: {props.data.provider.company_name}</p>
      <p>CIF: {props.data.provider.CIF}</p>
      <p>Adress: {props.data.provider.address}</p>

      <button onClick={()=>{
          dispatch(addToCart(props.data))
        }}>Add to cart</button>
      


  </article>;
};

export default DetailCard;

import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../redux/cart/cartActions";

const DetailCard = (props) => {
  const dispatch = useDispatch();
  return <article className="product-card-details">
      <img className="product-card__image" src={props.data.image} alt="" />

      <span >
      <h1 className="product-card__brand">{props.data.title}</h1>
      <p className="product-card__description">Description: {props.data.description}</p>
      <p>Price: {props.data.price}€</p>
      <p>Rating: {props.data.rating.rate}</p>
      <p>Provider: {props.data.provider.company_name}</p>
      <p>CIF: {props.data.provider.CIF}</p>
      <p>Adress: {props.data.provider.address}</p>

      <button className="css-button-3d--green" onClick={()=>{
          dispatch(addToCart(props.data))
        }}>Add to cart</button>
        </span>
      


  </article>;
};

export default DetailCard;

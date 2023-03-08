import React from "react";

const DetailCard = (props) => {
  return <article>
      
      <img src={props.data.image} alt="" />
      <h1>{props.data.title}</h1>
      <p>Price: {props.data.price}€</p>
      <p>Rating: {props.data.rating.rate}</p>
      <p>Provider: {props.data.provider.company_name}</p>
      <button>Add to Cart</button>
      


  </article>;
};

export default DetailCard;

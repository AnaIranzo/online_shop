import React from "react";

const Card = (props) => {
  return <article>
    <img src={props.data.image} alt="" />
    <h1>{props.data.title}</h1>
    <p>Price: {props.data.price}€</p>
    <p>Rating: {props.data.rating.rate}</p>

  </article>;
};

export default Card;

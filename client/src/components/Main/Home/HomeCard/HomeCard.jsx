import React from "react";

const HomeCard = (props) => {
  return <article className="all-products-card">

<img src={props.data.image} alt="" />
    <h1>{props.data.title}</h1>
    <p>Price: {props.data.price}€</p>
    <p>Rating: {props.data.rating.rate}</p>
  </article>;
};

export default HomeCard;

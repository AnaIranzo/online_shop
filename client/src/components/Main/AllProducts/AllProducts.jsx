import React from "react";
import { useState, useEffect } from 'react';
import List from './List/List'

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [ascendingTitle, setAscendingTitle] = useState(true);
  const [descendingTitle, setDescendingTitle] = useState(false);
  const [ascendingRating, setAscendingRating] = useState(false);
  const [descendingRating, setDescendingRating] = useState(false);
  const [ascendingPrice, setAscendingPrice] = useState(false);
  const [descendingPrice, setDescendingPrice] = useState(false);
  

  useEffect(()=> {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [setProducts, ascendingTitle, descendingTitle,ascendingRating,descendingRating, ascendingPrice, descendingPrice])

  console.log(products);
  
 

  const filterOrders = () => {
    const dataArr = products;

    // ASCENDING TITLE
    if (ascendingTitle) {
      const searchAscArr = dataArr.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );

      return searchAscArr;
    }

    // DESCENDING TITLE
    if (descendingTitle) {
      const searchDescArr = dataArr.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      );
      return searchDescArr;
    }

    // ASCENDING RATING
    if (ascendingRating) {
      const searchAscArr = dataArr.sort((a, b) =>
        a.rating.rate > b.rating.rate ? 1 : b.rating.rate > a.rating.rate ? -1 : 0
      );

      return searchAscArr;
    }

    // DESCENDING RATING
    if (descendingRating) {
      const searchDescArr = dataArr.sort((a, b) =>
        a.rating.rate < b.rating.rate ? 1 : b.rating.rate < a.rating.rate ? -1 : 0
      );
      return searchDescArr;
    }

    // ASCENDING PRICE
    if (ascendingPrice) {
      const searchAscArr = dataArr.sort((a, b) =>
        a.price > b.price? 1 : b.price > a.price ? -1 : 0
      );

      return searchAscArr;
    }

    // DESCENDING PRICE
    if (descendingPrice) {
      const searchDescArr = dataArr.sort((a, b) =>
        a.price < b.price ? 1 : b.price < a.price ? -1 : 0
      );
      return searchDescArr;
    }

    // 
    
    return products;
  };


  filterOrders(setProducts)


  return <section>
              <button
                onClick={(e) => { 
                  ascendingTitle ?  setAscendingTitle(false) : setAscendingTitle(true);
                  ascendingTitle ? setDescendingTitle(true) : setDescendingTitle(false);  
                  setAscendingPrice(false);
                  setDescendingPrice(false);
                  setAscendingRating(false)
                  setDescendingRating(false)

                  
                  // setIsCountryCode(false);
                }}> Title              
                </button>
         
          
              <button
                onClick={(e) => {
                  ascendingRating ?  setAscendingRating(false) : setAscendingRating(true);
                  ascendingRating ? setDescendingRating(true) : setDescendingRating(false);  
                  setAscendingTitle(false);
                  setDescendingTitle(false);
                  setAscendingPrice(false);
                  setDescendingPrice(false);

                }}>
                Rating
              </button>
          
              <button
                onClick={(e) => {
                  ascendingPrice ?  setAscendingPrice(false) : setAscendingPrice(true);
                  ascendingPrice ? setDescendingPrice(true) : setDescendingPrice(false); 
                  setAscendingTitle(false);
                  setDescendingTitle(false); 
                  setAscendingRating(false)
                  setDescendingRating(false)
                }}>
                Price
              </button>
    <List data={products}/>
          

  </section>;

};

export default AllProducts;

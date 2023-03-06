import React from "react";
import { useState, useEffect } from 'react';
import List from './List/List'

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  console.log(products);
  return <section>

    <List data={products}/>

  </section>;

};

export default AllProducts;

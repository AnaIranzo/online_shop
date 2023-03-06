import React from "react";
import { useState, useEffect } from 'react';


const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
/*   const getAllProducts = async () => {

    try {
      const res = await fetch('/products');
      const data = await res.json();

      setProducts(data)
    } catch (error) {
      
    }
  }
  getAllProducts(); */
  console.log(products);
  return <div>AllProducts</div>;

};

export default AllProducts;

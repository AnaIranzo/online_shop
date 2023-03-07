import React, {useEffect, useState} from "react";
import AllProducts from './AllProducts/AllProducts';



const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  
  function fetchData() {
  fetch('http://localhost:5000/products')
  .then(res => res.json())
  .then(data => setProducts(data))
      }


  return <main>
    <AllProducts products={products} setProducts={setProducts}/>

  </main>;
};

export default Main;

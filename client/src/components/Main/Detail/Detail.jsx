import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import DetailCard from "./DetailCard/DetailCard";

const Detail = () => {
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  function fetchData() {
    fetch(`http://localhost:5000/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data))
        }
    

    console.log(product);
  return <section>
     {product.map(data => <DetailCard data={data}/>)}

        

  </section>;
};

export default Detail;

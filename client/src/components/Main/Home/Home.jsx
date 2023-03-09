import React, {useState} from "react";
import HomeCard from "./HomeCard/HomeCard";
import { v4 as uuidv4 } from 'uuid';

import pic from'./assets/Screenshot from 2023-03-09 23-03-35.png';

const Home = ({products}) => {

  const [query, setQuery] = useState('');
  
  const onChange = event => setQuery(event.target.value);

  let filteredProducts = []

  const filterProducts = () => {
    filteredProducts = products.filter(product => {return product.title.toLowerCase().includes(query.toLowerCase()) || product.provider.company_name.toLowerCase().includes(query.toLowerCase()) });


  }
  

  filterProducts();


  return <section className="all-products">
     <section className='banner'>
    <img src={pic} alt="" />

    </section>
      <input type="text" className="search" value={query} onChange={onChange} placeholder={'Search...'}/>
      <div className="all-products-list">
        {filteredProducts.map(product => <HomeCard data={product}  key={uuidv4()}/>)}
      </div>
  </section>;
};

export default Home;

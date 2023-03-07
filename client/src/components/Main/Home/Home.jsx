import React, {useState} from "react";
import HomeCard from "./HomeCard/HomeCard";
import { v4 as uuidv4 } from 'uuid';


const Home = ({products}) => {

  const [query, setQuery] = useState('');
  
  const onChange = event => setQuery(event.target.value);

  let filteredProducts = []

  const filterProducts = () => {
    filteredProducts = products.filter(product => {return product.title.toLowerCase().includes(query.toLowerCase()) || product.provider.company_name.toLowerCase().includes(query.toLowerCase()) });


  }
  

  filterProducts();


  return <div>

<input type="text" value={query} onChange={onChange}/>
      <div className="list">
        {filteredProducts.map(product => <HomeCard data={product}  key={uuidv4()}/>)}
      </div>
  </div>;
};

export default Home;

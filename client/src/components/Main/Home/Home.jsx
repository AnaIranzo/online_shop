import React, {useState} from "react";
import HomeCard from "./HomeCard/HomeCard";

const Home = ({products}) => {

  const [query, setQuery] = useState('');
  
  const onChange = event => setQuery(event.target.value);

  const filteredProducts = products.filter(product => {

    return product.title.toLowerCase().includes(query.toLowerCase());
  });



  return <div>

<input type="text" value={query} onChange={onChange}/>
      <div className="list">
        {filteredProducts.map(product => <HomeCard data={product}/>)}
      </div>
  </div>;
};

export default Home;

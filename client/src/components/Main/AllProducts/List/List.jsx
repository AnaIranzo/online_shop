import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/Card';

/**Map products data */
const List = (props) => {
  
return <section className="all-products-list">

{props.data.map(product => <Card data={product} key={uuidv4()} showDetails={props.showDetails}/>)}

  </section>;
};

export default List;

import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Card from './Card/Card';

const List = (props) => {
  return <section>

{props.data.map(product => <Card data={product} key={uuidv4()}/>)}

  </section>;
};

export default List;

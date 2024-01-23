import React from "react";
import "./CartList.css";

import { cat1, cat2, cat3, cat4 } from '../../assets';

const CartList_component = () => {
  const name = {
    first: 'John',
    last: 'Micheavelli'
  }

  const cats = [cat1, cat2, cat3, cat4];
  return (
    <div>
      {
        cats.map((cat) => <img src={cat} alt="cat" />)
      }
      <p>{name.first}</p>
      <p>{name.last}</p>
    </div>
  );
};

export default CartList_component;

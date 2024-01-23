import React from "react";

import "./CartList.css";
import Cat_component from "../cat";

const CartList_component = ({ cats }) => {

  return (
    <div className="cats">
      <div className="cats-row">
        {cats.slice(0, 3).map((cat) => (
          <Cat_component cat={cat} key={cat.id} />
        ))}
      </div>

      <div className="cats-row">
        {cats.slice(3, 6).map((cat) => (
          <Cat_component cat={cat} key={cat.id} />
        ))}
      </div>
    </div>
  );
};

export default CartList_component;

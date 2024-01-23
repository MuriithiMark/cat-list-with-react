import React from "react";

const Cat_component = ({ cat }) => {
  const { image, name, country, description } = cat;

  return (
    <div>
      <img src={image} alt={name} />
      <p>
        {name} from <b>{country}</b>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Cat_component;

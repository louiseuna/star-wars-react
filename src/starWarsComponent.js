import React from "react";

export default function StarWarsComponent(props) {
  console.log(props.cost);
  return (
    <div className="container">
      <div className="container-inner">
        <h2 className="name">{props.data.name}</h2>
      </div>
    </div>
  );
}

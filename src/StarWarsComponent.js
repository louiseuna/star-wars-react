import React from "react";

export default function StarWarsComponent(props) {
  // console.log(props);
  return (
    <div className="container">
      <div className="container-inner">
        Hi from StarWarsComponent!
        <h2 className="name">Name: {props.name}</h2>
      </div>
    </div>
  );
}

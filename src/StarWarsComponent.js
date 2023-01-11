import React from "react";

export default function StarWarsComponent(props) {
  console.log(props.data);
  return (
    <tr className="row">
      <td className="item">{props.data.name}</td>
      <td className="item">{props.data.model}</td>
      <td className="item">{props.data.manufacturer}</td>
      <td className="item">{props.data.cost}</td>
      {/* I know ".length" could cause issues, as it is a built-in React function that outputs the number of items in an object,
      but the item in SWAPI is also called "length" which clashes with this.
      If I had more time I would look into how to get around this. */}
      <td className="item">{props.data.length}</td>
      <td className="item">{props.data.crew}</td>
      <td className="item">{props.data.pax}</td>
      <td className="item">{props.data.cargo}</td>
    </tr>
  );
}

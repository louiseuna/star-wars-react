import React from "react";

export default function StarWarsComponent(props) {
  console.log(props.data);
  return (
    <tr className="row">
      <td className="item">{props.data.name}</td>
      <td className="item">{props.data.model}</td>
      <td className="item">{props.data.manufacturer}</td>
      <td className="item">{props.data.cost}</td>
      <td className="item">{props.data.length}</td>
      <td className="item">{props.data.crew}</td>
      <td className="item">{props.data.pax}</td>
      <td className="item">{props.data.cargo}</td>
    </tr>
  );
}

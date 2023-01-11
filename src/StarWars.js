import React, { useState } from "react";
import axios from "axios";
import StarWarsComponent from "./StarWarsComponent";

export default function StarWars(props) {
  const [starship, setStarship] = useState(props.starship);

  function handleStarShips(response) {
    setStarship({
      ready: true,
      setLoaded: true,
      name: response.data.results[0].name,
      model: response.data.results[0].model,
      manufacturer: response.data.results[0].manufacturer,
      cost: response.data.results[0].cost_in_credits,
      length: response.data.results[0].length,
      crew: response.data.results[0].crew,
      pax: response.data.results[0].passengers,
      cargo: response.data.results[0].cargo_capacity,
    });
    // console.log("HERE" + i + ": " + response.data.results[i]);

    // let starship = response.data.results[i];
  }
  search();

  function search() {
    // const apiKey = "starships";
    let dataUrl = `https://swapi.dev/api/starships?format=json`;
    axios.get(dataUrl).then(handleStarShips);
  }

  const toggleTable = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  console.log(props.starship);
  return (
    <div className="inner-wrapper">
      <button for="starwars" onClick={toggleTable}></button>
      <div className="table-container">
        <table className="results">
          <tbody>
            <tr className="row top">
              <td className="heading">Name:</td>
              <td className="heading">Model:</td>
              <td className="heading">Manufacturer:</td>
              <td className="heading">Cost:</td>
              <td className="heading">Length:</td>
              <td className="heading">Crew:</td>
              <td className="heading">Passsenger Capacity:</td>
              <td className="heading">Cargo Capacity:</td>
            </tr>
            {/* <tr className="row">
              <td className="item">{starship.name}</td>
              <td className="item">{starship.model}</td>
              <td className="item">{starship.manufacturer}</td>
              <td className="item">{starship.cost}</td>
              <td className="item">{starship.length}</td>
              <td className="item">{starship.crew}</td>
              <td className="item">{starship.pax}</td>
              <td className="item">{starship.cargo}</td>
            </tr> */}
            <StarWarsComponent data={starship} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

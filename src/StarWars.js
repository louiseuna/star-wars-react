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
  function search() {
    const apiKey = "starships";
    let dataUrl = `https://swapi.dev/api/${apiKey}?format=json`;
    axios.get(dataUrl).then(handleStarShips);
  }
  search();

  return (
    <div className="form">
      <div>
        <button for="starwars">StarShips!</button>
      </div>
      <div>
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
            <StarWarsComponent data={starship} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

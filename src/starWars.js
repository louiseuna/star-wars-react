import React, { useState } from "react";
import axios from "axios";
import StarWarsComponent from "./StarWarsComponent.js";
import "./App.css";

export default function StarWars(props) {
  const [starship, setStarship] = useState(props.starship);

  function starShips(response) {
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
  }
  function submitStarship(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let dataUrl = `https://swapi.dev/api/starships?format=json`;
    axios.get(dataUrl).then(starShips);
  }
  search();
  return (
    <div className="form">
      <div>
        <label for="starwars" onChange={submitStarship}>
          StarShips!
          <input
            className="radio"
            type="radio"
            value="starships"
            name="starwars"
          />
        </label>
        <label for="starwars">
          Vehicles!
          <input
            className="radio"
            type="radio"
            value="vehicles"
            name="starwars"
          />
        </label>
        <label for="starwars">
          Films!
          <input className="radio" type="radio" value="films" name="starwars" />
        </label>
      </div>
      <div>
        starWars.js here
        <StarWarsComponent data={starship} />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import StarWarsComponent from "./StarWarsComponent";

export default function StarWars(props) {
  const [starship, setStarship] = useState(props.starship);

  function starShips(response) {
    for (let i = 0; i < response.data.results.length; i++) {
      setStarship({
        ready: true,
        setLoaded: true,
        name: response.data.results[i].name,
        model: response.data.results[i].model,
        manufacturer: response.data.results[i].manufacturer,
        cost: response.data.results[i].cost_in_credits,
        length: response.data.results[i].length,
        crew: response.data.results[i].crew,
        pax: response.data.results[i].passengers,
        cargo: response.data.results[i].cargo_capacity,
      });
      // console.log("HERE" + i + ": " + response.data.results[i]);

      // let starship = response.data.results[i];

      // console.log(starship);
    }
    return;
  }
  function search() {
    let dataUrl = `https://swapi.dev/api/starships?format=json`;
    axios.get(dataUrl).then(starShips);
  }
  search();
  return (
    <div className="form">
      <div>
        <button for="starwars">StarShips!</button>
      </div>
      <div>
        starWars.js here
        <StarWarsComponent data={starship} />
      </div>
    </div>
  );
}

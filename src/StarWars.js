import React, { useState } from "react";
import axios from "axios";
// import StarWarsComponent from "./StarWarsComponent";

export default function StarWars(props) {
  const [starship, setStarship] = useState(props.starship);

  function handleStarShips(response) {
    let i = 0;
    for (i = 0; i <= response.data.results.length; i++) {
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
    }
  }
  search();

  function search() {
    const apiKey = "starships";
    let dataUrl = `https://swapi.dev/api/${apiKey}?format=json`;
    axios.get(dataUrl).then(handleStarShips);
  }

  const toggleTable = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  console.log(props.starship);
  return (
    <div className="inner-wrapper">
      <button onClick={toggleTable}></button>
      <div className="table-container">
        <table className="table results">
          <tbody>
            <tr className="row top">
              <td className="heading item">
                <div>Name:</div>
              </td>
              <td className="heading item">
                <div>Model:</div>
              </td>
              <td className="heading item">
                <div>Manufacturer:</div>
              </td>
              <td className="heading item">
                <div>Cost:</div>
              </td>
              <td className="heading item">
                <div>Length:</div>
              </td>
              <td className="heading item">
                <div>Crew:</div>
              </td>
              <td className="heading item">
                <div>Passsenger Capacity:</div>
              </td>
              <td className="heading item">
                <div>Cargo Capacity:</div>
              </td>
            </tr>
            {/* Previously had the rows of first item in this file. */}
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
            {/* When Deployed on Netlify, the API connection broke so would not display anything. Therefore I have commented out the Component so that at least some of my styling shows on the hosted page. */}
            {/* <StarWarsComponent data={starship} /> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

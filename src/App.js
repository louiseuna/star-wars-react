import logo from "./logo.svg";
// import React, { useState, useEffect } from "react";
import React from "react";
import StarWars from "./StarWars";
import "./App.css";

function App() {
  // const [starships, setStarships] = useState([]);
  // const [vehicles, setVehicles] = useState([]);
  // const [films, setFilms] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchStarships() {
  //     let res = await fetch("https://swapi.dev/api/starships?format=json");
  //     let data = await res.json();
  //     setStarships(data.results);
  //   }
  //   async function fetchVehicles() {
  //     let res = await fetch("https://swapi.dev/api/vehicles?format=json");
  //     let data = await res.json();
  //     setVehicles(data.results);
  //   }
  //   async function fetchFilms() {
  //     let res = await fetch("https://swapi.dev/api/films?format=json");
  //     let data = await res.json();
  //     setFilms(data.results);
  //   }

  //   fetchStarships();
  //   fetchVehicles();
  //   fetchFilms();
  // }, []);
  // console.log("starships", starships);
  // console.log("vehicles", vehicles);
  // console.log("films", films);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello From React!</p>
      <StarWars />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import React from "react";
import StarWars from "./StarWars";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello From React!</p>
      <StarWars />
    </div>
  );
}

export default App;

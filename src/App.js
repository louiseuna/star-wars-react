import logo from "./star-wars-logo.png";
import background from "./star-wars-background.png";
import React from "react";
import StarWars from "./StarWars";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello From React!</p>
      <StarWars />
    </div>
  );
}

export default App;

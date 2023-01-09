import logo from "./logo.svg";
import StarWars from "./starWars";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello From React!</p>
        <StarWars />
      </header>
    </div>
  );
}

export default App;

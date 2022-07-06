import logo from "./logo.svg";
import "./React.css";
import FoodMain from "./comps/FoodMain";

function React() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <FoodMain />
    </div>
  );
}

export default React;

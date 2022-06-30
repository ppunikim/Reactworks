import logo from "./logo.svg";
import TodoMain from "./comps/TodoMain";
import "./App.css";
import "./w3css.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoMain />
    </div>
  );
}

export default App;

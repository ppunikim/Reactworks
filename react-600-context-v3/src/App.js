import Main from "./comps/Main";
import "./App.css";
import logo from "./logo.svg";
import { AppContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="로고" />
      </header>
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import Home from "./comps/Home";
import About from "./comps/About";
import TodoMain from "./comps/TodoMain";
import BucketMain from "./comps/BucketMain";
import Navi from "./comps/Nav";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* react-router-dom 의 영역 */}
      <BrowserRouter>
        <Navi />
        <Routes path="/" element={<Home />} />
        <Routes path="/todo" element={<TodoMain />} />
        <Routes path="/bucket" element={<BucketMain />} />
      </BrowserRouter>
    </div>
  );
}

export default App;

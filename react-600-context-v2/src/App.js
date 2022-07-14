import Main from "./comps/Main";
import "./App.css";
import logo from "./logo.svg";
import AppContext from "./context/Context";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState({
    ad_name: "",
    ad_tel: "",
    ad_addr: "",
  });
  const [addrList, setAddrList] = useState([]);

  const props = {
    address,
    setAddress,
    addrList,
    setAddrList,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="로고" />
      </header>
      <AppContext.Provider value={props}>
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;

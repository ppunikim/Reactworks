import "./App.css";
import Main from "./comps/Main";
/**
 * React에서 JS파일, JSX(JavaScript Extends)
 */

// JSX에서 사용하는 Component type 변수
const h1 = <h1>뿌니귀요미</h1>;
const div = <div>{h1}</div>;
const header = <header className="App-header"></header>;
const appDiv = (
  <div className="App">
    {header}
    {div}
    <Main />
  </div>
);
//App이라는 이름의 Component type의 함수
function App() {
  return appDiv;
}

//다른 Component 에서 App Component 를 import하여 조립할 수 있도록 내보내는 것.
export default App;

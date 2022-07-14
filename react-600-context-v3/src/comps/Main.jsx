//react로부터 useState함수 추출

// 나중에 export { useState } 로 써야 한다.
import { useState } from "react";

// 나중에 export default Input 이렇게 한다.
import Input from "./Input";
import List from "./List";
import View from "./View";
const Main = () => {
  return (
    <>
      <Input />
      <List />
    </>
  );
};

export default Main;

//react로부터 useState함수 추출

// 나중에 export { useState } 로 써야 한다.
import { useState } from "react";

// 나중에 export default Input 이렇게 한다.
import Input from "./Input";
import List from "./List";
import View from "./View";

const Main = () => {
  const [address, setAddress] = useState({
    ad_name: "",
    ad_tel: "",
    ad_addr: "",
  });
  const [addrList, setAddrList] = useState([]);
  return (
    <>
      <Input
        address={address}
        setAddress={setAddress}
        addrList={addrList}
        setAddrList={setAddrList}
      />
      <View address={address} />
      <List addrList={addrList} />
    </>
  );
};

export default Main;

import { createContext, useContext, useState } from "react";
const AppContext = createContext();

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

const AppContextProvider = ({ children }) => {
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

  /*
  AppContext.Provider 를 사용해야 하는데
  AppContextProvider 를 사용했습니다

  계속 자기자신을 호출하니 무한 반목에 빠져 버렸네요

  */
  return (
    <>
      <AppContext.Provider value={props}>{children}</AppContext.Provider>
    </>
  );
};
export { useAppContext, AppContextProvider };

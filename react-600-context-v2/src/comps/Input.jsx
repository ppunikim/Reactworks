import AppContext from "../context/Context";
import { useContext } from "react";

const Input = () => {
  const { address, setAddress, addrList, setAddrList } = useContext(AppContext);
  const { ad_name, ad_tel, ad_addr } = address;

  const onChangeEvent = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const onClickEvent = (e) => {
    setAddrList([...addrList, address]);
  };
  return (
    <>
      <input
        onChange={onChangeEvent}
        name="ad_name"
        placeholder="이름"
        value={ad_name}
      />
      <input
        onChange={onChangeEvent}
        name="ad_tel"
        placeholder="전번"
        value={ad_tel}
      />
      <input
        onChange={onChangeEvent}
        name="ad_addr"
        placeholder="주소"
        value={ad_addr}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
};

export default Input;

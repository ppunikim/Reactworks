import { useAppContext } from "../context/ContextProvider";

const View = () => {
  const { address } = useAppContext();
  const { ad_name, ad_tel, ad_addr } = address;
  return (
    <div>
      <strong>이름 : </strong>
      <span>{ad_name}</span>
      <strong>전화번호 : </strong>
      <span>{ad_tel}</span>
      <strong>주소 : </strong>
      <span>{ad_addr}</span>
    </div>
  );
};

export default View;

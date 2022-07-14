//리스트 볼 수 있도록 출력하는 것

import Item from "./Item";
import AppContext from "../context/Context";
import View from "./View";
import { useContext } from "react";

//addrList 배열의 값을 표 형식으로 구현하기
const List = () => {
  const { addrList } = useContext(AppContext);

  const addrBody = addrList.map((addr) => {
    return <Item addr={addr} />;
  });
  return (
    <>
      <View />
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>{addrBody}</tbody>
      </table>
    </>
  );
};

export default List;

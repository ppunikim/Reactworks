// 왜 오류나지?
import { zoneCode } from "../module/StnNo";
import { useState, useEffect } from "react";
// DataApi.js에 정의된 fetchData함수를 사용하겠다.
import { FetchData } from "../module/DataApi";

const ApiMain = () => {
  const [text, setText] = useState("Korea");
  const [data, setData] = useState([]);

  /*
    react의 생명주기 함수
    컴포넌트가 만들어질 때, 컴포넌트가 rendering될 때
    자동으로 실행되는 함수.
  */
  useEffect(() => {
    FetchData().then((result) => {
      console.log(result);
      const item = result.response.body.items.item;
      setText(JSON.stringify(item));
      setData([...item]);
    });
  }, []);

  const itemBody = data.map((item) => {
    return (
      <tr>
        <td>{item.title}</td>
        <td>{zoneCode[item.stnId][0]}</td>
        <td>{zoneCode[item.stnId][1]}</td>
        <td>{item.tmSeq}</td>
        <td>{item.tmFc}</td>
      </tr>
    );
  });
  return <table className="w3-table w3-table-all">{itemBody}</table>;
};
export default ApiMain;

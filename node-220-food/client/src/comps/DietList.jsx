import { useContext } from "react";
import DietContext from "../context/DietContext";
import DietItem from "./DietItem";

/* DietMain에서 전달받은 foods 를 
   props에서 직접 분해(비구조화, spread) 
   직접 foods변수에 받기
*/

const DietList = () => {
  //const { foods } = params;
  const { foods } = useContext(DietContext);
  const foodsBody = foods.map((food) => {
    return <DietItem food={food} />;
  }); //end foodsBody

  return (
    <table className="w3-table w3-table-all">
      <thead>
        <tr>
          <th>날짜</th>
          <th>음식</th>
          <th>섭취량</th>
          <th>단위 칼로리</th>
          <th>총칼로리</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>{foodsBody}</tbody>
    </table>
  );
};

export default DietList;

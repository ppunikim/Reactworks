/* DietMain에서 전달받은 foods 를 
   props에서 직접 분해(비구조화, spread) 
   직접 foods변수에 받기
*/
const DietList = ({ params }) => {
  const { foods, removeFoodItem } = params;
  const removeEvent = (e, d_id) => {
    /**표준 JS함수중 react에서 사용할 수 없는 함수들이 있는데
     * 그중 confirm함수가 지원되지 않아 window를 사용해야 한다.
     */
    if (window.confirm(d_id + "데이터 삭제할 거니?")) {
      removeFoodItem(d_id);
    }
  };
  const foodsBody = foods.map((food) => {
    /* map을 사용해 foods 배열의 데이터를 
       food라는 이름으로 만들고,
       tr, td를 갖는 list body 요소를 생성하기.
    */
    return (
      <tr key={food.d_id}>
        <td>{food.d_date}</td>
        <td>{food.d_food}</td>
        <td>{food.d_qty}</td>
        <td>{food.d_cal}</td>
        <td>{food.d_qty * food.d_cal}</td>
        <td
          /* 인라인 style은 {{}} 이렇게 해주고, 
          속성값은 ("")문자열로 만들어주기 */
          style={{ cursor: "pointer" }}
          onClick={(e) => removeEvent(e, food.d_id)}
        >
          &times;
        </td>
      </tr>
    );
  });
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

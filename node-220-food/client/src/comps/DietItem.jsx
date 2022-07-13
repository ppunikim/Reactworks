import { useState, useContext } from "react";
import DietContext from "../context/DietContext";

const DietItem = ({ food }) => {
  /*
    식품명 표시된 곳 click했을 때 input box가 나타나도록 하려한다.
    1. DietList에서 isEdit state변수를 만들고 item을 생성하면서
       isEdit 변수의 상태에 따라 input box 또는 문자열이 나타나도록
       했다.
       ===>  모든 item이 isEdit 상태를 공유하게 돼 
            한 개의 항목을 클릭하면 모든 항목의 input 박스가 나타났다.
            이러한 문제로 인해, 
    2. DietItem 을 별도로 분리하고 DietItem에서 isEdit상태변수를 생성한 후
       같은 코드로 input box가 나타나도록 하였다.
       똑같은 이름의 isEdit이지만, 각 item마다 서로 다른 isEdit 만들게 돼
       클릭한 item만 input box가 나타나도록 변경된다.
    */

  const [isEdit, setEdit] = useState(false);

  const { removeFoodItem } = useContext(DietContext);
  const removeEvent = (e, d_id) => {
    if (window.confirm(d_id + "데이터 삭제할 거니?")) {
      removeFoodItem(d_id);
    }
  }; //end DietList

  const onEdit = (e) => {
    setEdit(true);
  };

  const onKeypress = (e) => {
    if (e.keyCode === 13) {
      setEdit(false);
    }
  };

  return (
    <tr key={food.d_id}>
      <td>{food.d_date}</td>
      {isEdit ? (
        <td>
          <input
            name="d_food"
            defaultValue={food.d_food}
            onKeyDown={onKeypress}
          />
        </td>
      ) : (
        <td onClick={onEdit}>{food.d_food}</td>
      )}
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
};

export default DietItem;

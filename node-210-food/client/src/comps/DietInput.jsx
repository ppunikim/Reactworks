import { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";

const DietInput = () => {
  const [food, setFood] = useState({
    d_id: uuid(),
    d_date: moment().format("YYYY[-]MM[-]DD"),
    d_food: "",
    d_qty: "",
    d_cal: "",
  });

  const onChange = (e) => {
    /*
    input box에서 내용입력(onChange) 이벤트가 발생하면
    input box가 e.target에 담겨 전달된다.
    input box의 name 속성과 value를 분해해 각각 변수 담기.
    name 변수와 value변수가 분해되고 각각의 별도 변수로 생성됨.
    각각 별도 변수로 선언된 속성을 사용해 food JSON 객체에
      값을 담는다.    

    밑에 코드와 다르게 위 코드처럼 적으면, 더 쉽고 간편하게 적을 수 있다.
    { [name] : 값 }
    */
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };
  // 밑 코드에서는 각각 input 박스에 changeEvent를 별도 생생하고,각각의 코드를 작성해야 한다.
  // const onDateChange = (e) => {
  //   setFood({ ...food, d_date: e.target.value });
  // };
  // const onFoodVChange = (e) => {
  //   setFood({ ...food, d_food: e.target.value });
  // };
  const onClick = async (e) => {
    const postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    };
    const res = await fetch("http://localhost:3000/food/insert", postOption);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
    }
  };

  return (
    <div className="w3-row-padding">
      <div className="w3-col s3">
        <input
          type="date"
          name="d_date"
          className="w3-input"
          defaultValue={food.d_date}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s3">
        <input
          type="text"
          name="d_food"
          placeholder="음식 메뉴를 입력하세요."
          className="w3-input "
          onChange={onChange}
        />
      </div>
      <div className="w3-col s3">
        <input
          type="text"
          name="d_qty"
          placeholder="섭취 수량을 입력하세요."
          className="w3-input "
          onChange={onChange}
        />
      </div>
      <div className="w3-col s3">
        <input
          type="text"
          name="d_cal"
          placeholder="단위 칼로리를 입력하세요."
          className="w3-input "
          onChange={onChange}
        />
      </div>
      <button onClick={onClick} className="w3-button w3-primary">
        저장하기
      </button>
    </div>
  );
};
export default DietInput;

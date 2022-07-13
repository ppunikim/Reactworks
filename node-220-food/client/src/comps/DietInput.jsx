import { useState } from "react";
import uuid from "react-uuid";
import moment from "moment";

const DietInput = ({ params }) => {
  // params로 전달받은 데이터와 함수중, 필요한 부분만 분해해 변수로 받기
  const { fetchFood, setFoods } = params;
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
    /**
     * react 와 node사이에 데이터를 주고받는데
     * 서로 다른 PORT 통해서 데이터를 주고받게 돼
     * CORS(Cross Origin Resouce Share, 교차 사이트 스트립트 오류)가 발생.
     * 서버와 서버간 통신(데이터 교환)이 이루어질 때
     * 보안, 해킹방지 등이 점점 많은 곳에서 스크립트 교환이
     *  이루어지지 않도록 하고 있다.
     * React와 NodeJS가 다른 서버에서 작동될 때는 Package.json에 proxy 설정을 통해
     *  CORS문제를 일부 해결할 수 있다.
     *
     *
     * proxy 설정을 했을 경우 fetch URL부분에 http://localhost:3000 부분을
     * 없에고 작성해도 된다.
     * 그 이유는 이미 package.json에서 작성해줬기 때문이다.
     */
    const res = await fetch("/food/insert", postOption);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
      await fetchFood().then((result) => {
        setFoods(result);
      });
    }

    setFood({
      d_id: uuid(),
      d_date: moment().format("YYYY[-]MM[-]DD"),
      d_food: "",
      d_qty: "",
      d_cal: "",
    });
  };

  return (
    <div className="w3-row-padding">
      <div className="w3-col s3">
        <input
          type="date"
          name="d_date"
          className="w3-input"
          value={food.d_date}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s3">
        <input
          type="text"
          name="d_food"
          placeholder="음식 메뉴를 입력하세요."
          className="w3-input "
          value={food.d_food}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s3">
        <input
          type="text"
          name="d_qty"
          placeholder="섭취 수량을 입력하세요."
          className="w3-input "
          value={food.d_qty}
          onChange={onChange}
        />
      </div>
      <div className="w3-col s3">
        <input
          type="text"
          name="d_cal"
          placeholder="단위 칼로리를 입력하세요."
          className="w3-input "
          value={food.d_cal}
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

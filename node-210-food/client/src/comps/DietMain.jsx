// useState는 state 변수를 선언할 때 사용할 함수
/* useEffect 는 React의 생명주기 함수로, 
   Comp가 rendering될 때 자동으로 코드 실행해 
   node서버로부터 데이터를 fecth(SELECT ALL) 해
   state 변수에 담는 코드가 작성될 곳.
*/
import { useState, useEffect } from "react";
import DietInput from "./DietInput";
import DietList from "./DietList";

/**
 * DB에서 데이터들을 fetch하여 list를 보여줄 예정인데
 * List를 보여주고 다음에 item을 클릭하거나 변경하는 코드를 추가하려면
 * 어디에서 state데이터를 만들어야 할 것인가 잘 고민해야 한다.
 * DietMain에서 DB fetch 하고 item 등을 변화시키는 event도 선언하여
 * Main Component가 감싸고 있는 child Component 들이 공유할 수 있도록 설계한다.
 */
const DietMain = () => {
  // useState와 useEffect는 함수 내부에서 실행될 코드.
  const [foods, setFoods] = useState([]);

  // 데이터를 fetch할 때 사용할 함수 선언하기
  const fetchFood = async () => {
    const res = await fetch("/food/selectAll");
    if (res.ok) {
      return await res.json();
    }
  };

  /*
  * DietMain Comp가 rendering될 때 실행하여 fetchFood() 함수를 호출하고
     그 결과를 food state 변수에 setting 하기  
  * useEffect 의 두 번째 매개변수 : state변수를 설정하면 state변수값이
     변화될 때마다 useEffect 함수가 실행된다.
     state변수의 변화를 감지하여 어떤 event를 실행할 때 사용하는 방법 
  * 두 번째 매개변수에 빈 배열을 넣지 않으면
     useEffect함수가 무한 반복적으로 실행된다. 그러므로 있어야 하는데
     이것의 역할로는 컴포넌트가 rendering될 때 한번만 실행하도록 하는 것이다.
  */
  useEffect(() => {
    fetchFood().then((result) => {
      console.table(result);
      setFoods(result);
    });
  }, []);

  /**배열.fliter() 함수를 사용해
   * 삭제할, 전달받은 d_id와 일치하지 않은 데이터만 추출
   */
  const removeFoodItem = (d_id) => {
    fetch(`/food/remove/${d_id}`, { method: "DELETE" })
      .then((res) => res.text())
      .then((result) => {
        const filterBody = foods.filter((food) => food.d_id !== d_id);
        setFoods(filterBody);
      });
  };

  /**child component에 전달해야할 데이터와 함수가 많아지는 경우
   * 개별적으로 전달하는 것보다 하나의 객체로 묶어 전달하기.
   */
  const params = {
    foods,
    removeFoodItem,
    fetchFood,
    setFoods,
  };
  /**DietList와 DietInput에게 params에 담긴 데이터와 함수를
   * 한꺼번에 전달하기
   */
  return (
    <>
      <DietList params={params} />
      <DietInput params={params} />
    </>
  );

  // return (
  //   <>
  //     <DietList foods={foods} removeFoodItem={removeFoodItem} />
  //     <DietInput fetchFood={fetchFood} setFoods={setFoods} />
  //   </>
  // );
};

export default DietMain;

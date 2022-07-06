import FoodItem from "./FoodItem";
// const onKeyDown = (e) => {
//   if (e.keyCode === 13) {
//     console.log(e.target.value);
//     const today = new Date();
//     const food = {
//       f_date: document.write(today),
//       f_foodName: e.target.value,
//       f_eatNum: 1,
//       f_kal: "100K",
//     };

//     const postData = {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(food),
//     };
//     fetch("http://localhost:3000/food", postData);
//   }
// };
const onKeyDown = (e) => {
  const f_date = document.querySelector("input[name= 'f_date']");
  const f_foodName = document.querySelector("input[name= 'f_foodName']");
  const f_eatNum = document.querySelector("input[name= 'f_eatNum']");
  const f_kal = document.querySelector("input[name= 'f_kal']");

  const postData = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    f_date: f_date.value,
    f_foodName: f_foodName.value,
    f_eatNum: f_eatNum.value,
    f_kal: f_kal.values,
  };
  fetch("http://localhost:3000/food", postData);
};
const FoodInput = () => {
  return (
    <>
      <input name="f_date" placeholder="날짜" />
      <input name="f_foodName" placeholder="식품명" />
      <input name="f_eatNum" placeholder="섭취량" />
      <input name="f_kal" placeholder="칼로리" />
      <button type="button" onClick={onKeyDown}>
        저장
      </button>
    </>
  );
};

export default FoodInput;

import moment from "moment";

const FoodInput = ({ fetchFoodList }) => {
  const onKeyDown = () => {
    const f_foodName = document.querySelector("input[name='f_foodName']");
    const f_eatNum = document.querySelector("input[name='f_eatNum']");
    const f_kal = document.querySelector("input[name='f_kal']");

    const f_data = {
      f_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      f_foodName: f_foodName.value,
      f_eatNum: f_eatNum.value,
      f_kal: f_kal.values,
    };
    const postOption = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(f_data),
    };
    fetch("http://localhost:3000/food/insert", postOption)
      .then((res) => res.text())
      .then((result) => {
        fetchFoodList();
      });
  };

  return (
    <>
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

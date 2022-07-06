import FoodItem from "./FoodItem";

const FoodList = (props) => {
  const { foodList } = props;
  const _tempFoodList = foodList.map((food, index) => {
    const food_td = <FoodItem food={food} index={index} />;
    return food_td;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>날짜</th>
          <th>음식명</th>
          <th>먹은 횟수</th>
          <th>칼로리</th>
        </tr>
      </thead>
      <tbody>{_tempFoodList}</tbody>
    </table>
  );
};

export default FoodList;

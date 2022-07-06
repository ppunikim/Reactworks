const FoodList = ({ foodList }) => {
  const _tempFoodList = foodList.map((food) => {
    return (
      <tr>
        <th>{food.f_date}</th>
        <th>{food.f_foodName}</th>
        <th>{food.f_eatNum}</th>
        <th>{food.f_kal}</th>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>날짜</th>
          <th>음식명</th>
          <th>섭취량</th>
          <th>칼로리</th>
        </tr>
      </thead>
      <tbody>{_tempFoodList}</tbody>
    </table>
  );
};

export default FoodList;

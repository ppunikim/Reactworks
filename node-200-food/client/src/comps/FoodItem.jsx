import React from "react";

const FoodItem = (props) => {
  const { food, index } = props;
  return (
    <tr>
      <td>{food.f_date}</td>
      <td>{food.f_foodName}</td>
      <td>{index + 1}</td>
      <td>{food.f_kal}</td>
    </tr>
  );
};

export default FoodItem;

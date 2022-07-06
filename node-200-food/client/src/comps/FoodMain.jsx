import { useState, useEffect } from "react";

import FoodInput from "./foodInput";
import FoodList from "./FoodList";

const FoodMain = () => {
  const [foodList, setFoodList] = useState([]);
  const fetchFoodList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonBuck = await response.json();
    console.log("Fetch");
    setFoodList(jsonBuck);
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  return (
    <div>
      <FoodInput fetchFoodList={fetchFoodList} />
      <FoodList foodList={foodList} />
    </div>
  );
};

export default FoodMain;

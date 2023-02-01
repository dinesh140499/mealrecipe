import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ item }) => {
  const navigate=useNavigate()
  return (
    <>
    
      {item
        ? item.map((cur) => {
            return (
              <div className="meal" key={cur.idMeal} onClick={()=>{navigate(`/${cur.idMeal}`)}}>
                <img
                  src={cur.strMealThumb}
                  alt={cur.idMeal}
                />
                <h3>{cur.strMeal}</h3>
                <h6>{cur.strCategory}</h6>
              </div>
            );
          })
        : "not found"}
    </>
  );
};

export default MealItem;

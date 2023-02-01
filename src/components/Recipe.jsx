import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let vId=""
const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals));
  }, []);
  return (
    <>
        {recipe.map((cur) => {
          const {
            strMealThumb,
            idMeal,
            strMeal,
            strInstructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,

            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
            strMeasure7,
            strMeasure8,
            strMeasure9,
            strMeasure10,
            strMeasure11,
            strMeasure12,
            strCategory
          } = cur;
          if(cur){
            const url=cur.strYoutube
            const str=url.split("=")
            console.log(str)
            vId=str[str.length-1]
            console.log(vId)
          }
          return (
            <>
              <div className="mealRecipe" key={idMeal}>
                <div className="recipe-left">
                  <img src={strMealThumb} alt={strMealThumb} />
                  <div className="overlay">
                  <h3>{strMeal}</h3>
                  <h5>{strCategory}</h5>
                  </div>
                </div>
                <div className="recipe-right">
                  <h3>Ingredients</h3>

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                      {strIngredient1} : {strMeasure1}
                    </h5>
                  )}

                  {strIngredient2 && strMeasure2 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient2} : {strMeasure2}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient3} : {strMeasure3}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient4} : {strMeasure4}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient5} : {strMeasure5}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient6} : {strMeasure6}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient7} : {strMeasure7}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient8} : {strMeasure8}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient9} : {strMeasure9}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient10} : {strMeasure10}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient11} : {strMeasure11}
                    </h5>
                  )}

                  {strIngredient1 && strMeasure1 === "" ? (
                    ""
                  ) : (
                    <h5>
                     
                      {strIngredient12} : {strMeasure12}
                    </h5>
                  )}
                </div>
              </div>
              <div className="recipeInstruction">
                    <h3>Instruction</h3>
                    <p>{strInstructions}</p>
                </div>
                <div className="recipeInstruction">
                    <iframe width="80%" height="500" src={`https://www.youtube.com/embed/${vId}`} title={`${strMeal}`}  allowFullScreen></iframe>
                </div>
            </>
          );
        })}
    </>
  );
};

export default Recipe;

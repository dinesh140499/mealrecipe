import axios from "axios";
import React, { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";
import RecipeIndex from "./RecipeIndex";
import RandomMeal from "./RandomMeal";


const Home = () => {
  const [url, setUrl] = useState(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
  );
  const url2 = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const url3 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`;

  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState("");
  const [item2, setItem2] = useState("");

  const [search, setSearch] = useState("");
  
  useEffect(() => {
    
    const filterCat = async () => {
      const res = await axios(url);
      const res2 = await axios(url2);
  
      setItem(res.data.meals);
      setItem2(res2.data.meals);
      
      // console.log(res2.data.meals);
    };
    filterCat()
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  }, [url, url2,url3]);


  const setIndex = (alpha) => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipe = (event) => {
    if (event.key === "Enter") {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };

  const searchButton = () => {
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  };

  return (
    <>
      <div className="home">
        <h1>Search Your Food Recipe</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Tempore iure ratione ipsum, doloremque incidunt praesentium!
        </p>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search..."
            className="searchBar"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={searchRecipe}
          />
          <span className="material-symbols-outlined" onClick={searchButton}>
            search
          </span>
        </div>
      </div>
      <hr />
      <div className="container">
        <h3>Random Meals</h3>
        <div className="random-section">
          {loading ? <RandomMeal item={item2} /> : "Loading..."}
        </div>
      </div>
      <hr />
      <div className="container category-section">
        <h3>Category</h3>
        <div className="category">
          {loading ? <MealItem item={item} /> : "Loading..."}
        </div>
      </div>     
      <div className="container recipe-section">
        <RecipeIndex
          alphaIndex={(alpha) => {
            setIndex(alpha);
          }}
        />
      </div>
    </>
  );
};

export default Home;

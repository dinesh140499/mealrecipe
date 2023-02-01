import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const RandomMeal = ({item}) => {
  const navigate=useNavigate()

    
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
          setLoading(true);
        }, 1500);
      }, []);
      console.log(item)
  return (
    <>
       {loading?item.map((cur)=>{
        return(
            <div className="random" key={cur.idMeal} onClick={()=>{navigate(`/${cur.idMeal}`)}}>
                <img src={cur.strMealThumb} alt="" />
                <div className="overlay">
                    <h2>{cur.strMeal}</h2>
                    <h4>{cur.strCategory}</h4>
                </div>
            </div>
        )
       }):'Loading'}
    </>
  )
}

export default RandomMeal
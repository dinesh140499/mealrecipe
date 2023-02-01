

const RecipeIndex = ({ alphaIndex }) => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let num = 0;



  return (
    <div className="alpha">
      {alpha.map((cur) => {
        return (
          <div  key={num++} onClick={() => alphaIndex(cur)}>
             <h3>{cur}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeIndex;

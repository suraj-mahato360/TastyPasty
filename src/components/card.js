import React from "react";

let Card = (props) => {
  return (
    <div className="container">
      <div className="outcome">
        <h3>Recipes Found</h3>
        <hr />
      </div>
      <div className="recipe">
        {props.recipes.map((recipe) => (
          <div className="card">
            <div className="food-img">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <h3>{recipe.title}</h3>
            <a href={`https://www.youtube.com/results?search_query=${recipe.title}`} target="blank">
              <div className="get-content">
                <button className="b">Get Recipe</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;

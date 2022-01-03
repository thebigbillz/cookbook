import React from "react";

const Recipe = ({ label, image, calories, mealType, dietType, recipeUrl }) => {
  return (
    <div className="recipe">
      <h3>{label}</h3>
      <p>Calories: {calories}</p>
      <p>Meal Type: {mealType || "-"}</p>
      <p>Diet Type: {dietType || "-"}</p>
      <img className="image" src={image} alt={label} />
      <a className="url" href={recipeUrl} target="_blank">
        Steps & Ingredients
      </a>
    </div>
  );
};

export default Recipe;

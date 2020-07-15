import React, { useState } from "react";
import RecipeDetails from "./recipeDetails";
import NutritionDetails from "./nutritionDetails";
import { v4 as uuidv4 } from "uuid";

export default function Recipe({ recipe }) {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showNutrients, setShowNutrients] = useState(false);

  const {
    label,
    image,
    url,
    ingredients,
    calories,
    totalNutrients,
    cautions,
  } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <span className="info">Calories: {calories.toFixed(0)} kcal</span>
      <span className="info"> Number of servings: {recipe.recipe.yield}</span>

      {cautions.length !== 0 && (
        <span className="info" style={{ color: "#b44066" }}>
          Cautions:
        </span>
      )}

      <span className="info" style={{ color: "#b44066" }}>
        {cautions.map((caution) => (
          <span style={{ marginRight: "1rem" }} key={uuidv4()}>
            {caution}
          </span>
        ))}
      </span>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Source
      </a>
      <button onClick={() => setShowIngredients(!showIngredients)}>
        Ingredients
      </button>
      {showIngredients && <RecipeDetails ingredients={ingredients} />}

      <button onClick={() => setShowNutrients(!showNutrients)}>
        Total nutrients
      </button>
      {showNutrients && <NutritionDetails totalNutrients={totalNutrients} />}
    </div>
  );
}

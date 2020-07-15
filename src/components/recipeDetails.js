import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function RecipeDetails({ ingredients }) {
  return ingredients.map((item) => {
    return (
      <ul className="ingredient-list" key={uuidv4()}>
        <li className="ingredient-text">{item.text}</li>
        <li className="ingredient-weight">
          Weight-
          {item.weight.toFixed(0)} g
        </li>
      </ul>
    );
  });
}

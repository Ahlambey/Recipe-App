import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function NutritionDetails({ totalNutrients }) {
  return (
    <ul className="ingredient-list" key={uuidv4()}>
      <li className="ingredient-text">
        {totalNutrients.CA.label}: {totalNutrients.CA.quantity.toFixed(0)}{" "}
        {totalNutrients.CA.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.CHOLE.label}: {totalNutrients.CHOLE.quantity.toFixed(0)}{" "}
        {totalNutrients.CHOLE.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.FAMS.label}: {totalNutrients.FAMS.quantity.toFixed(0)}{" "}
        {totalNutrients.FAMS.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.FAPU.label}: {totalNutrients.FAPU.quantity.toFixed(0)}{" "}
        {totalNutrients.FAPU.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.FASAT.label}: {totalNutrients.FASAT.quantity.toFixed(0)}{" "}
        {totalNutrients.FASAT.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.FAT.label}: {totalNutrients.FAT.quantity.toFixed(0)}{" "}
        {totalNutrients.FAT.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.FE.label}: {totalNutrients.FE.quantity.toFixed(0)}{" "}
        {totalNutrients.FE.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.FIBTG.label}: {totalNutrients.FIBTG.quantity.toFixed(0)}{" "}
        {totalNutrients.FIBTG.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.K.label}: {totalNutrients.K.quantity.toFixed(0)}{" "}
        {totalNutrients.K.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.MG.label}: {totalNutrients.MG.quantity.toFixed(0)}{" "}
        {totalNutrients.MG.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.NA.label}: {totalNutrients.NA.quantity.toFixed(0)}{" "}
        {totalNutrients.NA.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.P.label}: {totalNutrients.P.quantity.toFixed(0)}{" "}
        {totalNutrients.P.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.PROCNT.label}:{" "}
        {totalNutrients.PROCNT.quantity.toFixed(0)} {totalNutrients.PROCNT.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.TOCPHA.label}:{" "}
        {totalNutrients.TOCPHA.quantity.toFixed(0)} {totalNutrients.TOCPHA.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.VITA_RAE.label}:{" "}
        {totalNutrients.VITA_RAE.quantity.toFixed(0)}{" "}
        {totalNutrients.VITA_RAE.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.VITB12.label}:{" "}
        {totalNutrients.VITB12.quantity.toFixed(0)} {totalNutrients.VITB12.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.VITB6A.label}:{" "}
        {totalNutrients.VITB6A.quantity.toFixed(0)} {totalNutrients.VITB6A.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.VITC.label}: {totalNutrients.VITC.quantity.toFixed(0)}{" "}
        {totalNutrients.VITC.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.VITD.label}: {totalNutrients.VITD.quantity.toFixed(0)}{" "}
        {totalNutrients.VITD.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.VITK1.label}: {totalNutrients.VITK1.quantity.toFixed(0)}{" "}
        {totalNutrients.VITK1.unit}
      </li>
      <li className="ingredient-text">
        {totalNutrients.ZN.label}: {totalNutrients.ZN.quantity.toFixed(0)}{" "}
        {totalNutrients.ZN.unit}
      </li>
    </ul>
  );
}

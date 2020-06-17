import React from "react";
import style from "./recipe.module.css";

export const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h3>{title}</h3>
      <div className={style.inside}>
        <img className={style.image} src={image} alt="" />
        <ol className={style.ingredient}>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>

      <h4 className={style.calories}>
        Calories : {Math.floor(calories)} / serving
      </h4>
    </div>
  );
};

export default Recipe;

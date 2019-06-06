import { useState } from "react";

export const useIngredients = (initialValue = []) => {
  const [ingredients, setIngredients] = useState(initialValue);

  return {
    ingredients,
    addIngredient: text => {
      if (text !== "") {
        setIngredients(ingredients.concat({ text }));
      }
    },
    removeIngredient: idx => {
      setIngredients(ingredients.filter((todo, index) => idx !== index));
    }
  };
};

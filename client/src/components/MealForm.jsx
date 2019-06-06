import React, { useState } from "react";
import {
  Paper,
  TextField,
  Button,
  Container,
  Typography
} from "@material-ui/core";
import AddIngredient from "./AddIngredient";
import IngredientList from "./IngredientList";
import { useInputValue } from "../hooks/useInputValue";
import { useIngredients } from "../hooks/useIngredients";
import { fakeGetMeals, fakeSaveMeal } from "../services/fakeMealService";

const MealForm = () => {
  const [mealName, setMealName] = useState("");
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { ingredients, addIngredient, removeIngredient } = useIngredients();

  const handleChange = e => {
    setMealName(e.target.value);
  };

  const clearInputAndAddIngredient = e => {
    clearInput();
    addIngredient(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const meal = {
      name: mealName,
      ingredients: ingredients
    };
    fakeSaveMeal(meal);
    alert("Form submitted");
  };

  const getMeals = () => {
    const meals = fakeGetMeals();
    console.log(meals);
  };

  return (
    <Container>
      <Paper style={{ margin: 16, padding: 16 }}>
        <Typography variant="h2" gutterBottom>
          Create Meal
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={mealName}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <AddIngredient
            inputValue={inputValue}
            onInputChange={changeInput}
            onButtonClick={clearInputAndAddIngredient}
            onInputKeyPress={event =>
              keyInput(event, clearInputAndAddIngredient)
            }
          />
          <IngredientList
            items={ingredients}
            onItemRemove={idx => removeIngredient(idx)}
          />
          <br />
          <TextField
            label="Recipe"
            name="recipe"
            margin="normal"
            multiline
            rows="5"
            variant="outlined"
            fullWidth
          />
          <Button
            style={{ marginTop: 10 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default MealForm;

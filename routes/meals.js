const express = require("express");
const router = express.Router();
const { Meal } = require("../models/meal");
const { Ingredient } = require("../models/ingredient");

router.get("/", async (req, res) => {
  const meals = await Meal.find().sort("name");
  res.send(meals);
});

router.post("/", async (req, res) => {
  const ingredients = await Ingredient.find({
    _id: { $in: req.body.ingredients }
  });

  let meal = new Meal({
    name: req.body.name,
    ingredients: ingredients
  });

  meal = await meal.save();

  res.send(meal);
});

router.put("/:id", async (req, res) => {
  const ingredients = await Ingredient.find({
    _id: { $in: req.body.ingredients }
  });

  const meal = await Meal.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name, ingredients: ingredients },
    { new: true }
  );

  if (!meal)
    return res.status(404).send("The meal with the given ID was not found.");

  res.send(meal);
});

module.exports = router;

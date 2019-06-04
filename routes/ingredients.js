const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { Ingredient } = require("../models/ingredient");

router.get("/", async (req, res) => {
  const ingredients = await Ingredient.find().sort("name");
  res.send(ingredients);
});

router.post("/", async (req, res) => {
  let ingredient = new Ingredient({
    name: req.body.name
  });
  ingredient = await ingredient.save();

  res.send(ingredient);
});

router.delete("/:id", async (req, res) => {
  const ingredient = await Ingredient.findByIdAndRemove(req.params.id);

  if (!ingredient)
    return res
      .status(404)
      .send("The ingredient with the given ID was not found.");

  res.send(ingredient);
});

module.exports = router;

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

module.exports = router;

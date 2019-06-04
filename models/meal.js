const mongoose = require("mongoose");
const { ingredientSchema } = require("./ingredient");

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  ingredients: [ingredientSchema]
});

const Meal = mongoose.model("Meal", mealSchema);

exports.mealSchema = mealSchema;
exports.Meal = Meal;

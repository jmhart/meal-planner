const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255
  }
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

exports.ingredientSchema = ingredientSchema;
exports.Ingredient = Ingredient;

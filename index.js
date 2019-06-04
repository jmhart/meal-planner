const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ingredients = require("./routes/ingredients");
const meals = require("./routes/meals");

app.use(express.json());
app.use("/api/ingredients", ingredients);
app.use("/api/meals", meals);

const db = "mongodb://localhost/meal-planner";
mongoose.connect(db).then(() => console.log(`Connected to ${db}`));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

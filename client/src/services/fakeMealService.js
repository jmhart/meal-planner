const meals = [
  {
    name: "Spaghetti pomodoro",
    ingredients: [
      "Spaghetti pasta",
      "tomatoes",
      "onion",
      "garlic",
      "olive oil",
      "salt",
      "pepper"
    ]
  },
  {
    name: "Fettuccine Alfredo",
    ingredients: [
      "Fettuccine pasta",
      "cream",
      "parmesan",
      "onion",
      "garlic",
      "olive oil",
      "salt",
      "pepper"
    ]
  },
  {
    name: "Penne vodka sauce",
    ingredients: [
      "Penne pasta",
      "tomatoes",
      "vodka",
      "cream",
      "basil",
      "onion",
      "garlic",
      "olive oil",
      "salt",
      "pepper"
    ]
  }
];

export function fakeGetMeals() {
  return meals;
}

export function fakeSaveMeal(meal) {
  meals.push(meal);
}

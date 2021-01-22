const db = require("../../data/db-config");

module.exports = {
  findAll,
  getShoppingList,
  getInstructions,
  getRecipesFromIngredient,
};

function findAll() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients as i")
    .join(
      "recipe_steps_ingredients as rsi",
      "i.ingredient_id",
      "rsi.ingredient_id"
    )
    .join("recipe_steps as rs", "rs.recipe_step_id", "rsi.recipe_step_id")
    .select("i.ingredient_name", "rsi.quantity")
    .where("rs.recipe_id", id);
}

function getInstructions(id) {
  return db("recipe_steps")
    .select("step_number", "instruction_text")
    .where("recipe_id", id)
    .orderBy("step_number");
}

function getRecipesFromIngredient(id) {
  return db("recipes as r")
    .join("recipe_steps as rs", "r.recipe_id", "rs.recipe_id")
    .join(
      "recipe_steps_ingredients as rsi",
      "rsi.recipe_step_id",
      "rs.recipe_step_id"
    )
    .join("ingredients as i", "i.ingredient_id", "rsi.ingredient_id")
    .select("r.recipe_name")
    .where("i.ingredient_id", id);
}

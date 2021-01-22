const db = require("../../data/db-config");

module.exports = {
  findAll,
  getShoppingList,
  getInstructions,
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

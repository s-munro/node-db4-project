exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_steps_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_steps_ingredients").insert([
        {
          ingredient_id: 1,
          recipe_step_id: 1,
          quantity: "A whole gallon",
        },
        {
          ingredient_id: 2,
          recipe_step_id: 2,
          quantity: "Two whole gallons",
        },
        {
          ingredient_id: 3,
          recipe_step_id: 3,
          quantity: "More than you'd think",
        },
      ]);
    });
};

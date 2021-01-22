exports.up = function (knex) {
  return knex.schema
    .createTable("recipes")
    .createTable("ingredients")
    .createTable("recipe_steps")
    .createTable("recipe_steps_ingredients");
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_steps_ingredients");
};

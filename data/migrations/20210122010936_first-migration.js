exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name").notNullable();
    })

    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name").notNullable();
    })
    .createTable("recipe_steps", (table) => {
      table.increments("recipe_step_id");
      table.string("instruction_text").notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("CASCADE");
    })
    .createTable("recipe_steps_ingredients", (table) => {
      table.increments("recipe_steps_ingredients_id");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("CASCADE");
      table
        .integer("recipe_step_id")
        .unsigned()
        .notNullable()
        .references("recipe_step_id")
        .inTable("recipe_steps")
        .onDelete("CASCADE");
      table.string("quantity").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_steps_ingredients");
};

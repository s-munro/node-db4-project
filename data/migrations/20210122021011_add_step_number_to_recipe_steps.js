exports.up = function (knex) {
  return knex.schema.table("recipe_steps", (table) => {
    table.integer("step_number").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.table("recipe_steps", (table) => {
    table.dropColumn("step_number");
  });
};

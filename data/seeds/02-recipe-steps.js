exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_steps").insert([
        {
          instruction_text: "put it under hot water",
          step_number: 1,
          recipe_id: 1,
        },
        {
          instruction_text: "put it under hot water again",
          step_number: 2,
          recipe_id: 1,
        },
        {
          instruction_text: "put it under hot water one more time",
          step_number: 3,
          recipe_id: 1,
        },
      ]);
    });
};

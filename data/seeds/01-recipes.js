exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Delicious Pancakes" },
        { recipe_name: "Delicious Water and Flour" },
        {
          recipe_name: "Home-made database coding late at night",
        },
      ]);
    });
};

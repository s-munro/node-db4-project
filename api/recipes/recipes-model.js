const db = require("../../data/db-config");

module.exports = {
  findAll,
};

function findAll() {
  return db("recipes");
}

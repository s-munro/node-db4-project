const express = require("express");

const router = express.Router();

const Recipes = require("./recipes-model");

router.get("/", (req, res) => {
  Recipes.findAll()
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((err) => {
      console.log("err: ", err);
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then((instructions) => {
      res.status(200).json(instructions);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;

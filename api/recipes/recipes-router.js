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

module.exports = router;

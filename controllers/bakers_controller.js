// DEPENDENCIES
const express = require("express");
const baker = express.Router();
const Baker = require("../models/baker.js");
const bakerSeedData = require("../models/baker_seed.js");

baker.get("/data/seed", (req, res) => {
  Baker.insertMany(bakerSeedData).then(res.redirect("/breads"));
});

// INDEX:
baker.get("/", (req, res) => {
  Baker.find()
    .populate("breads")
    .then((foundBakers) => {
      res.send(foundBakers);
    });
});

// SHOW:
baker.get("/:id", (req, res) => {
  Baker.findById(req.params.id)
    .populate("breads")
    .then((foundBaker) => {
      res.render("bakerShow", {
        baker: foundBaker,
      });
    });
});

// EXPORT
module.exports = baker;

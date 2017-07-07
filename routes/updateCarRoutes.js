const express  = require("express");
const updateCarRouter = express.Router();
const Car = require("../models/Car");

updateCarRouter.get("/:id", (req, res) => {
  Car.findById(req.params.id)
    .then(foundCar => {
      res.send(foundCar);
      // res.render("updateCar", { auto: foundCar});
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

updateCarRouter.put("/:id", (req, res) => {
  Car.updateOne({_id: req.params.id}, req.body)
    .then(updatedCar=> {
      res.send(updatedCar);
      // res.redirect("/");
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

updateCarRouter.patch("/:id", (req, res) => {
  Car.updateOne({_id: req.params.id}, req.body)
    .then(updatedCar=> {
      res.send(updatedCar);
      // res.redirect("/");
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = updateCarRouter;
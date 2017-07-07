const express  = require("express");
const deleteCarRouter = express.Router();
const Car = require("../models/Car");

deleteCarRouter.delete("/:id", (req, res) => {
  Car.deleteOne({ _id: req.params.id }) 
    .then(() => {
      res.send("Deleted CAR record");
      // res.redirect("/");
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = deleteCarRouter;
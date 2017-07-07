const express  = require("express");
const carRouter = express.Router();
const Car = require("../models/Car");

carRouter.get("/", (req, res) => {
  Car.find()
  .then(foundCars => {
    res.send(foundCars);
  })
  .catch(err => {
    res.status(500).send(err);
  });
});

carRouter.get("/:id", (req, res) => {
  Car.findById(req.params.id)
    .then(foundCar => {
      res.send(foundCar);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

carRouter.put("/:id", (req, res) => {
  Car.updateOne({_id: req.params.id}, req.body)
    .then(updatedCar=> {
      res.send(updatedCar);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

carRouter.patch("/:id", (req, res) => {
  Car.updateOne({_id: req.params.id}, req.body)
    .then(updatedCar=> {
      res.send(updatedCar);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

carRouter.post("/", (req, res) => {
  let carData = req.body;
  let newCar = new Car(carData);
  newCar
    .save()
    .then(savedCar => {
      res.send(savedCar);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

carRouter.delete("/:id", (req, res) => {
  Car.deleteOne({ _id: req.params.id }) 
    .then(() => {
      res.send("Deleted CAR record");
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = carRouter;
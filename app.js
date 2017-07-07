const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const Car = require("./models/Car");
const indexRouter = require('./routes/indexRoutes');
const addCarRouter = require('./routes/addCarRoutes');
const deleteCarRouter = require('./routes/deleteCarRoutes');
const updateCarRouter = require('./routes/updateCarRoutes');
const app = express();
const dbURL = "mongodb://localhost:27017/classiCars";


// app.use('/static', express.static('static'));

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + "/static/index.html");
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB CONNECTION
mongoose.connect(dbURL).then(function(err, db) {
  if (err) {
    console.log("error", err);
  }
  console.log("connected to classicCar DB.");
});

// put routes here
app.use('/', indexRouter);
app.use('/addCar', addCarRouter);
app.use('/updateCar', updateCarRouter);
app.use('/deleteCar', deleteCarRouter);


app.listen(3000, function () {
    console.log('Express running on http://localhost:3000/.')
});

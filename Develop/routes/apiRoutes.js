const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Workout = require("../models");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((foundWorkout) => {
      res.json(foundWorkout);
      console.log(foundWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find().then((foundWorkout) => {
    res.json(foundWorkout);
    console.log(foundWorkout);
  });
});

model.exports = router;

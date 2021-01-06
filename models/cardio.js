const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CardioSchema = new Schema({
  type: String,
  name: String,
  duration: Integer,
  distance: Integer,
});

const Cardio = mongoose.model("Cardio", CardioSchema);
module.exports = Cardio;

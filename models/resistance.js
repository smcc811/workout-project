const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ResistanceSchema = new Schema({
  type: String,
  name: String,
  duration: String,
  weight:Integer,
  reps: Integer,
  sets: Integer,
});

const Resistance = mongoose.model("resistance", ResistanceSchema);
module.exports = Resistance;

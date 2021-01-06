const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;
//const db = require("models");
const db = require("./models");
connection.on("connected", () => {
  console.log("Mongoose connected successfully");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error" + err);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT, () => {
  console.log("Server is running  on http://localhost: ${PORT}");
});

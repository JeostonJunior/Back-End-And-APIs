var express = require("express");
var app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
// Normal usage
app.use(express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({ message: "Hello json".toUpperCase() })
    : res.json({ message: "Hello json" });
});

module.exports = app;

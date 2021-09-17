const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(2000, () => {
  console.log("connected on 2000");
});

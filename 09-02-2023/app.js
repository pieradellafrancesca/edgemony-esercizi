const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

const myPreferences = {
  pet: "orso",
  color: "blu",
  season: "inverno",
};

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nome: "Mario",
    titolo: "Home Page",
    myPreferences: myPreferences,
  });
});

app.get("/about", (req, res) => {
  res.render("about", { titolo: "About" });
});

app.get("/mi-presento", (req, res) => {
  res.render("mi-presento", {
    titolo: "Mi presento",
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.render("login", {
      nome: name,
    });
  }
  res.status(400).send("Enter data");
});

app.listen(PORT);

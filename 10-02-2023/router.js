const express = require("express");

const router = express.Router();

router.use(express.static("./public"));

router.get("/", (req, res) => {
  res.render("index", { titolo: "Home Page" });
});

router.get("/about", (req, res) => {
  res.render("about", { titolo: "Chi sono" });
});

router.get("/contatti", (req, res) => {
  res.render("contatti", { titolo: "Contatti" });
});

router.get("/formazione", (req, res) => {
  res.render("formazione", { titolo: "Formazione" });
});

router.get("/web-design", (req, res) => {
  res.render("web-design", { titolo: "Web Design" });
});

router.get("*", (req, res) => {
  res.render("404", { titolo: "Error" });
});

module.exports = router;

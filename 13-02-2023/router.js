const express = require("express");
const session = require("cookie-session");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(express.static("./public"));

router.use(bodyParser.urlencoded({ extended: true }));
router.use(session({ secret: "my section" }));

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

router.get("/login", (req, res) => {
  res.render("login", { titolo: "Log In" });
});

router.post("/login", (req, res) => {
  if (!req.body.mail || !req.body.password) {
    res.status(400);
    res.render("login", {
      msg: "Inserisci tutti i dati necessari",
    });
  } else {
    let name = "Mario";
    let mail = "mario@mail.com";
    let password = "9999";
    let userAuth = { mail: mail, password: password };

    if (mail == req.body.mail && password == req.body.password) {
      req.session.user = userAuth;
      res.render("private", { name: name });
    } else {
      res.redirect("/warning");
    }
  }
});

function checkPage(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/warning");
  }
}

router.get("/private", checkPage, (req, res) => {
  res.render("private", { titolo: "Private" });
});

router.get("/warning", (req, res) => {
  res.render("warning", { titolo: "Warning" });
});

router.get("/logout", (req, res) => {
  // console.log("Hai fatto logout");
  req.session = null;
  res.redirect("/login");
});

router.get("*", (req, res) => {
  res.render("404", { titolo: "Error" });
});

module.exports = router;

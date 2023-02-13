const express = require("express");
const app = express();
const router = require("./router");
const hbs = require("hbs");

const PORT = 8181;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use("/", router);

app.listen(PORT, () => console.log(`Server attiva su porta ${PORT}`));

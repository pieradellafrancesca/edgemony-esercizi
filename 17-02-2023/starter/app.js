require("dotenv").config();

const express = require("express");

const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// const md = require("./models/subscribers");

const routerProd = require("./controllers/prodController");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on("err", (err) => console.error(err));

db.once("open", () => console.log("Connesso al db"));

app.use(express.json());

// Routing
app.use("/api/v1/products", routerProd);

app.listen(2000, () => console.log("Server attivo"));

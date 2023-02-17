const express = require("express");
const routerProd = express.Router();
const Product = require("../models/products");

routerProd.get("/", async (req, res) => {
  try {
    const prod = await Product.find();
    res.json(prod);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

routerProd.post("/", async (req, res) => {
  const prod = new Product({
    title: req.body.title,
    category: req.body.category,
    price: req.body.price,
    brand: req.body.brand,
  });
  try {
    const newProd = await prod.save();
    res.status(201).json(newProd);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

routerProd.put("/:id", getProd, async (req, res) => {
  if (req.body.title) {
    res.prod.title = req.body.title;
  }
  if (req.body.price) {
    res.prod.price = req.body.price;
  }
  if (req.body.brand) {
    res.prod.brand = req.body.brand;
  }

  try {
    const prodUpdate = await res.prod.save();
    res.json(prodUpdate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

routerProd.delete("/:id", deleteProd, async (req, res) => {
  try {
    const prodUpdate = await Product.find();
    res.json(prodUpdate);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getProd(req, res, next) {
  let prod;
  try {
    prod = await Product.findById(req.params.id);
    if (prod === null) {
      return res.status(404).json({ message: "Utente non trovato" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.prod = prod;
  next();
}

async function deleteProd(req, res, next) {
  try {
    prod = await Product.findByIdAndRemove(req.params.id);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  next();
}

module.exports = routerProd;

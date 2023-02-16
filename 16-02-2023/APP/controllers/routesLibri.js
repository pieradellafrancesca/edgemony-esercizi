const express = require("express");
let router = express.Router();

const mongoose = require("mongoose");
const Book = mongoose.model("bookModel");

router.get("/libri", (req, res) => {
  res.render("addupdate_book", {
    viewTitle: "Inserisci un libro",
  });
});

router.post("/libri", (req, res) => {
  if (req.body._id == "") insertRecord(req, res);
  else updateRecord(req, res);
});

function insertRecord(req, res) {
  // creo un collegamento con lo schema di mongoose
  let book = new Book();
  book.title = req.body.title;
  book.author = req.body.author;
  book.country = req.body.country;
  book.language = req.body.language;
  book.year = req.body.year;
  book.pages = req.body.pages;
  book.save((err, doc) => {
    if (!err) res.redirect("list_book");
    else console.log(`Errore nell' inserimento: ${err}`);
  });
}

function updateRecord(req, res) {
  Book.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
    if (!err) {
      res.redirect("list_book");
    } else {
      console.log("Errore durante l' update : " + err);
    }
  });
}

router.get("/list_book", (req, res) => {
  Book.find((err, docs) => {
    if (!err) {
      res.render("list_book", {
        booklist: docs,
      });
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

router.get("/libri/:id", (req, res) => {
  Book.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("addupdate_book", {
        viewTitle: "Aggiornamento",
        book: doc,
      });
    }
  });
});

router.get("/libri/delete/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/list_book");
    } else {
      console.log(`Errore ${err}`);
    }
  });
});

module.exports = router;

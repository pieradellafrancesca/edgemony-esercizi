const express = require("express");
const app = express();
const items = require("./items");

const PORT = 8181;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET
app.get("/api/items", (req, res) => {
  res.status(200).json({ success: true, data: items });
});

// POST
app.post("/api/items", (req, res) => {
  const { id, title, body, tags } = req.body;
  if (!id || !title || !body || !tags) {
    return res.status(400).json({ success: false, msg: "data missing" });
  }
  return res.status(201).json({
    success: true,
    data: [...items, { id: id, title: title, body: body, tags: tags }],
  });
});

// PUT
app.put("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const { title, userId } = req.body;

  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return res
      .status(400)
      .json({ success: false, msg: `No item with id ${id}` });
  }

  const newItems = items.map((item) => {
    if (item.id === Number(id)) {
      item.title = title;
      item.userId = userId;
    }
    return item;
  });
  res.status(200).json({ success: true, data: newItems });
});

// DELETE
app.delete("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return res
      .status(400)
      .json({ success: false, msg: `No item with id ${id}` });
  }
  const newItems = items.filter((item) => item.id !== Number(id));
  return res.status(200).json({ success: true, data: newItems });
});

// metodo POST con dato ricevuto da form
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Enter name!" });
  }
  return res.status(200).send(`Welcome ${name}!`);
});

app.listen(PORT);

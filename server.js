const path = require('path');

// server.js
const express = require("express");
const cors = require("cors");
const app = express();

// the env variable
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// some of the data
let items = [
  { id: 1, text: "Learn Express" },
  { id: 2, text: "Build Dashboard" }
];

// GET route
app.get("/api/items", (req, res) => {
  res.json(items);
});

// POST route
app.post("/api/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    text: req.body.text
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

const path = require("path");

// Serve static files
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project4.html'));
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



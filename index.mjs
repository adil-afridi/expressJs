import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json()); // Fixed typo here

const items = [
  {
    id: 1,
    name: "Jamal Khan",
    age: 22,
    city: "Peshawar",
  },
  {
    id: 2,
    name: "Kamal Khan",
    age: 30,
    city: "Islamabad",
  },
  {
    id: 3,
    name: "Amir Khan",
    age: 27,
    city: "Karachi",
  },
  {
    id: 4,
    name: "Kabeer Khan",
    age: 35,
    city: "Lahore",
  },
  {
    id: 5,
    name: "AJ Afridi",
    age: 24,
    city: "Peshawar",
  },
];

/// Root of Home Page
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

/// Root of About Page
app.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

/// Post request to About
app.post("/about", (req, res) => {
  const data = req.body;
  res.send(`Data Received on About Page: ${JSON.stringify(data)}`);
});

/// PUT request to About
app.put("/about", (req, res) => {
  const updateData = req.body;
  res.send(`Data is updated on About Page: ${JSON.stringify(updateData)}`);
});

/// DELETE request to About
app.delete("/about", (req, res) => {
  res.send("Successfully deleted data from About Page.");
});

/// Contact Page
app.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});

/// Post request to Contact
app.post("/contact", (req, res) => {
  const data = req.body;
  res.send(`Data Received on Contact Page: ${JSON.stringify(data)}`);
});

/// PUT request to Contact
app.put("/contact", (req, res) => {
  const updateData = req.body;
  res.send(`Data is updated on Contact Page: ${JSON.stringify(updateData)}`);
});

/// DELETE request to Contact
app.delete("/contact", (req, res) => {
  res.send("Successfully deleted data from Contact Page.");
});

/// Get retrieve all items now
app.get("/items", (req, res) => {
  res.status(200).json(items);
});

/// Post add a new item
app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

/// PUT update the existing item
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    items[itemIndex].name = req.body.name;
    items[itemIndex].age = req.body.age;
    items[itemIndex].city = req.body.city;
    res.status(200).json(items[itemIndex]);
  } else {
    res.status(404).json({ message: "Item not found." });
  }
});

/// DELETE item by id
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.status(200).json({ message: "Item deleted successfully." });
  } else {
    res.status(404).json({ message: "Item not found." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening now on http://localhost:${PORT}`);
});

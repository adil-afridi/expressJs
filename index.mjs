import express from "express";

const app = express();
const PORT = 3000;

app.use(epxress.json());

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
    age: 227,
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

///Root of Home Page
app.get("/", (req, res) => {
  res.send("Wellcome to Home Page");
});

/// Root of About Page
app.get("/about", (req, res) => {
  res.send("Wellcome to About Page");
});

///Post request to about
app.post("/about", (req, res) => {
  const data = req.body;
  res.send(`Data Recived on About Page ${JSON.stringify(data)}`);
});

///PUT request to about
app.put("/about", (req, res) => {
  const updateDate = req.body;
  res.send(`Data is updated on About Page ${JSON.stringify(updateDate)}`);
});

/// DELETE request to about
app.delete("/about", (req, res) => {
  res.send("Succesfully Deleted data About Page..");
});

/// Contact Page
app.get("/contact", (req, res) => {
  res.send("Wellcome to Contact Page");
});

///Post request to contact
app.post("/contact", (req, res) => {
  const data = req.body;
  res.send(`Data Recived on Contact Page ${JSON.stringify(data)}`);
});

///PUT request to Contact
app.put("/about", (req, res) => {
  const updateDate = req.body;
  res.send(`Data is updated on Contact Page ${JSON.stringify(updateDate)}`);
});

/// DELETE request to Contact
app.delete("/about", (req, res) => {
  res.send("Succesfully Deleted data from Contact Page..");
});

/// get Retrive all items now
app.get("/items", (req, res) => {
  res.status(200).json(items);
});

/// post add a new items
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

/// put update the existing items
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    items[itemIndex].name = req.body.name;
    items[itemIndex].age = req.body.age;
    items[itemIndex].city = req.body.city;
    res.status(200).json(items[itemIndex]);
  } else {
    res.status(401).json({ message: "item is not found.." });
  }
});

/// delete  item by id
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    items.splice(itemIndex, 1);
    res.status(200).json({ message: "item Deleted Successfully" });
  } else {
    res.status(404).json({ message: "item is not found.." });
  }
});


app.listen(PORT, () => {
    console.log(`Server is listening now on http://localhost:${PORT}`)
})
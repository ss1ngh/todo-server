const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all origins

// Sample todo list
const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "This is todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "This is todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    description: "This is todo 3",
    completed: false,
  },
  {
    id: 4,
    title: "Todo 4",
    description: "This is todo 4",
    completed: false,
  },
  {
    id: 5,
    title: "Todo 5",
    description: "This is todo 5",
    completed: false,
  },
];

// Endpoint to fetch a todo by ID
app.get("/todo", (req, res) => {
  const id = parseInt(req.query.id, 10);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    res.json({ todo });
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

// Endpoint to fetch random todos
app.get("/todos", (req, res) => {
  const randomTodos = todos.filter(() => Math.random() > 0.5);
  res.json({ todos: randomTodos });
});

// Endpoint to calculate the sum of two numbers
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a, 10);
  const b = parseInt(req.query.b, 10);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: "Invalid numbers" });
  } else {
    const sum = a + b;
    res.send(sum.toString());
  }
});

// Endpoint to calculate simple interest
app.get("/interest", (req, res) => {
  const principal = parseFloat(req.query.principal);
  const rate = parseFloat(req.query.rate);
  const time = parseFloat(req.query.time);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    res.status(400).json({ error: "Invalid parameters" });
  } else {
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.json({ total, interest });
  }
});

// Helper function to generate a random number
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Endpoint to fetch random notifications
app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10),
  });
});

// Start the server
const PORT = process.eventNames.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

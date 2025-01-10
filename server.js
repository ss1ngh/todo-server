const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all origins

// Green lines: Define todos with specific IDs (1 to 10)
const todos = [
  {
    id: 1,
    title: "Go to the gym",
    description: "Complete the workout plan at the gym.",
    completed: false,
  },
  {
    id: 2,
    title: "Buy groceries",
    description: "Buy essential groceries from the nearby store.",
    completed: false,
  },
  {
    id: 3,
    title: "Finish homework",
    description: "Complete the pending assignments.",
    completed: false,
  },
  {
    id: 4,
    title: "Prepare for meeting",
    description: "Prepare slides for tomorrow's meeting.",
    completed: false,
  },
  {
    id: 5,
    title: "Call mom",
    description: "Catch up with mom about her day.",
    completed: false,
  },
  {
    id: 6,
    title: "Clean the house",
    description: "Tidy up the living room and kitchen.",
    completed: false,
  },
  {
    id: 7,
    title: "Water the plants",
    description: "Water the plants in the garden.",
    completed: false,
  },
  {
    id: 8,
    title: "Read a book",
    description: "Read a chapter from the current book.",
    completed: false,
  },
  {
    id: 9,
    title: "Plan vacation",
    description: "Research and plan for the upcoming vacation.",
    completed: false,
  },
  {
    id: 10,
    title: "Write a blog post",
    description: "Draft and publish a new blog post.",
    completed: false,
  },
];

// Endpoint to fetch a todo by ID
app.get("/todo", (req, res) => {
  const id = parseInt(req.query.id, 10); // Get the ID from query string
  const todo = todos.find(t => t.id === id); // Find the todo with that specific ID
  if (todo) {
    res.json({ todo });
  } else {
    res.status(404).json({ error: "Todo not found" }); // Return error if todo not found
  }
});

// Endpoint to fetch all todos (for testing or listing)
app.get("/todos", (req, res) => {
  res.json({ todos });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

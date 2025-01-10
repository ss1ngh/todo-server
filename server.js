const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for all origins

// Green lines: Added pool of possible task titles and descriptions
const taskTitles = [
  "Go to the gym",
  "Buy groceries",
  "Finish homework",
  "Prepare for meeting",
  "Call mom",
  "Clean the house",
  "Water the plants",
  "Read a book",
  "Plan vacation",
  "Write a blog post",
];

const taskDescriptions = [
  "Complete the workout plan at the gym.",
  "Buy essential groceries from the nearby store.",
  "Complete the pending assignments.",
  "Prepare slides for tomorrow's meeting.",
  "Catch up with mom about her day.",
  "Tidy up the living room and kitchen.",
  "Water the plants in the garden.",
  "Read a chapter from the current book.",
  "Research and plan for the upcoming vacation.",
  "Draft and publish a new blog post.",
];

// Green line: Helper function to generate a random todo
function generateRandomTodo() {
  const id = Math.floor(Math.random() * 1000); // Random ID
  const title = taskTitles[Math.floor(Math.random() * taskTitles.length)];
  const description =
    taskDescriptions[Math.floor(Math.random() * taskDescriptions.length)];
  const completed = Math.random() > 0.5; // Randomly set completion status

  return { id, title, description, completed };
}

// Endpoint to fetch a todo by ID (returns a single random todo)
app.get("/todo", (req, res) => {
  const todo = generateRandomTodo(); // Generate a random todo each time
  res.json({ todo });
});

// Green line: Endpoint to fetch multiple random todos
app.get("/todos", (req, res) => {
  const count = parseInt(req.query.count, 10) || 5; // Number of todos to generate
  const randomTodos = Array.from({ length: count }, generateRandomTodo); // Generate multiple todos
  res.json({ todos: randomTodos });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  const task = { id: Date.now(), title, description, isChecked: false };
  tasks.push(task);
  res.json(task);
});

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running`);
});

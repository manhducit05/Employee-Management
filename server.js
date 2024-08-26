const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to get all tasks
app.get('/tasks', (req, res) => {
  fs.readFile('database.json', (err, data) => {
    if (err) throw err;
    const tasks = JSON.parse(data);
    res.json(tasks);
  });
});

// Endpoint to save a new task or update an existing one
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  fs.readFile('database.json', (err, data) => {
    if (err) throw err;
    let tasks = JSON.parse(data);

    // Check if task already exists (for update)
    const existingTaskIndex = tasks.findIndex(task => task.id == newTask.id);
    if (existingTaskIndex > -1) {
      tasks[existingTaskIndex] = newTask; // Update task
    } else {
      tasks.push(newTask); // Add new task
    }

    fs.writeFile('database.json', JSON.stringify(tasks, null, 2), (err) => {
      if (err) throw err;
      res.json({ message: 'Task saved successfully!' });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    // Validation
    if (!req.body.title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    // Create task object
    const newTask = {
      title: req.body.title,
      completed: req.body.completed,
    };

    // Save to MongoDB
    const savedTask = await Task.create(newTask);

    // Send success response
    res.status(201).json(savedTask);

  } catch (error) {
    // Handle unexpected errors
    res.status(500).json({
      message: "Failed to create task",
      error: error.message,
    });
  }
};

const getAllTasks = async (req, res) => {
    try {

        const tasks = await Task.find();

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch tasks",
            error: error.message
        });

    }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  try{
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true ,runValidators: true});
    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found"
      });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update task",
      error: error.message
    });
  }
}

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try{
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found"
      });
    }
    res.status(200).json({
      message: "Task deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete task",
      error: error.message
    });
  }
}
const getTaskById = async (req, res) => {
  const { id } = req.params;
  try{
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch task",
      error: error.message
    });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getTaskById
};

  

require("dotenv").config();
const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("./db/connect");

const app = express();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Task Manager API");
});

// Routes
app.use("/tasks", taskRoutes);

// Port
const PORT = process.env.PORT || 3000;

// Start server ONLY after DB connection
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
  }
};

startServer();
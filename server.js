const express = require("express");
const app = express();
const morgan = require("morgan");
const sequelize = require("./config/database");
const taskRoutes = require("./routes/task");
const errorHandler = require("./middlewares/errorHandler");

// Connect to the database
sequelize.sync()
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/tasks", taskRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

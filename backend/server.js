const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { sequelize } = require("./models");

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/plans", require("./routes/plan.routes"));
app.use("/api/bookings", require("./routes/booking.routes"));

// Test Route (optional - for quick backend status check)
app.get("/", (req, res) => {
  res.send("✅ DreamWed API is up and running.");
});

// Start server after syncing database
sequelize.sync({ alter: true }) // Use { force: true } only for development (drops tables)
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to database:", err);
  });

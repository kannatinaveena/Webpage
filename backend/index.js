const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Root Route (to fix "Cannot GET /")
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Import Routes
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes); // ✅ Ensure this is correct

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,   // ✅ Recommended option
  useUnifiedTopology: true // ✅ Recommended option
})
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error("❌ MongoDB Connection Failed:", err));

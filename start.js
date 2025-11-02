require("dotenv").config();
const app = require("./server");
const connectDB = require("./config/database");
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
});

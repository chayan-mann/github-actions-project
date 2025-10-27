const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/github-actions-demo";
    
    await mongoose.connect(mongoURI);
    
    console.log(`✅ MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

// Handle connection events
mongoose.connection.on("disconnected", () => {
  console.log("⚠️  MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error(`❌ MongoDB error: ${err.message}`);
});

module.exports = connectDB;

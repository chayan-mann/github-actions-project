const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Updated GitHub Actions CI/CD! 🚀" });
});

module.exports = app;

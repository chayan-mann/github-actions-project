const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from GitHub Actions CI/CD!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const app = express();

const API_BASE_PATH = "/api";
app.get(`${API_BASE_PATH}/users`, (req, res) => {
  res.send({ users: [] });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

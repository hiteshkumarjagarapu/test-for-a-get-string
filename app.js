const express = require("express");
const app = express();
app.get("/", (Request, response) => {
  response.send("Express JS");
});
module.exports = app;

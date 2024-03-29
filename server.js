const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/dist/random-choufli-hal"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/random-choufli-hal/index.html"));
});

app.listen(process.env.PORT || 3000);

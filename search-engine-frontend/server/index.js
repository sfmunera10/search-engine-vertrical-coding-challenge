const express = require("express");
const path = require("path");
const app = express();

const port = process.env.REACT_LOCAL_PORT;

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function (_, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => console.log(`> Listening on port ${port}`));
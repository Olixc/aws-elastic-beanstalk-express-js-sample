const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) =>
  res.send(
    "Beanstalk with aws build pipeline🔥  Giving the review process to my pipeline🥹"
  )
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);

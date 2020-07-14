const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app
  .get("/items/:vegetable", (req, res) => {
    res.send("Hello Universe");
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    // console.log(process.argv);
  })
  .listen(PORT, () => {
    console.log(`The Express Server has started at port: ${PORT}`);
  });
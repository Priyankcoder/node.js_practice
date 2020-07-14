const express = require("express");
const app = express();
const PORT = process.env.PORT||3000;
app
  .get("/shop/:vegetable", (req, res) => {
    res.send(`You wanna buy ${req.params.vegetable}`);
    console.log(req.params.vegetable);
  })
  .listen(PORT, () => console.log(`Server is up and running at port ${PORT}`));
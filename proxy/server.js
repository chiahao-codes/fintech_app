//allow for env variables;
require('dotenv').config();
const express = require('express');
//const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
  
});

/**
 * app.get("/", (req, res, next) => {
  res.render("index");
});
 * 
 */
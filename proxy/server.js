//allow for env variables;
require('dotenv').config();
const express = require('express');

//const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.get("/", (req, res) => {
  console.log(res.json(data));
})

app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
});

/**
 * 
 */
//allow for env variables;
require('dotenv').config();
const express = require('express');
const yahoo = require("yahoo-finance-webscraper");
//const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

function middleware(stock) {
  yahoo.getSingleStockInfo(stock).then((data) => console.log(data));
}

app.get()

app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
  
});

/**
 * 
 */
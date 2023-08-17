//allow for env variables;
require('dotenv').config();
const express = require('express');
//const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  res.render("/views/index");
});

app.listen(PORT, () => {
    
    console.log("Proxy listening on port:", PORT);

  /**
    yahoo.getSingleStockInfo('NFLX').then((data) => {
    console.log(data)
});
    */
  
});

/**
 * const yahoo = require('yahoo-finance-webscraper');
 * 
 */
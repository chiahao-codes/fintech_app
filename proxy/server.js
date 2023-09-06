//allow for env variables;
require('dotenv').config();
const express = require('express');
const yahoo2 = require('yahoo-finance2').default;


//const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})


let stock = 'ABNB';

app.get("/stock",  (req, res, next) => {
  let quote =  yahoo2.quoteSummary(stock, {modules:["financialData"]});
  console.log(quote);
  res.json(quote);
  next();
})

app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
});

/**
 * 
 */
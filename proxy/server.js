require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
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
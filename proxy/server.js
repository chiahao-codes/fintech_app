//allow for env variables;
require('dotenv').config();
const express = require('express');
const { financials, quotes } = require('barchart-dot-com');

const PORT = process.env.PORT || 8080;
const app = express();

app.set("views", "./views");
app.set("view engine", 'ejs');

app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.get('/', (req, res, next) => {
  res.render('index');
  next();
})


app.get("/stock", async (req, res, next) => {
  let results = await financials.income('ABNB').annual();
  let quote = await quotes.overview('ABNB');
  console.log(results);
  res.json(results);
  next();
})

app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
});

import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import { financials } from 'barchart-dot-com';

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
next();
});

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.render("index.ejs");
  next();
});

//stock data get request:
//get data for: income statement, balance sheet, cash flow;
app.get("/stock/:ticker", async (req, res, next) => {
  let ticker = req.params.ticker;
  let cashFlow = await financials.cashFlow(ticker).annual();
  res.send(cashFlow);
    next();
});
  

app.listen(PORT, () => {
    console.log("Proxy listening on port:", PORT);
});

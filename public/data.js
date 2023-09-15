import express from "express";
import { financials, quotes } from "barchart-dot-com";
const router = express.Router();

//get data for: income statement, balance sheet, cash flow;
router.get("/:ticker", async (req, res, next) => {
  let ticker = req.params.ticker;
  let stock = await quotes.overview(ticker);
  if (stock.error) {
    res.status(400).send("Invalid ticker");
    return;
  }
  let cashFlow = await financials.cashFlow(ticker).annual();
  res.send(cashFlow);
  next();
});

export default router
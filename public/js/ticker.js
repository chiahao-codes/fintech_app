import express from "express";
import yahooFinance from "yahoo-finance2";
const router = express.Router();

//get data for: income statement, balance sheet, cash flow;
//measurements of profitability;
//render stock profile ejs file;
router.get("/:ticker", async (req, res, next) => {
  let ticker = req.params.ticker;
  //validation:
  let result = await yahooFinance.quote(ticker);
  if (!result) {
    res.sendStatus(400);
    return
  } else {
    if (result.displayName) {
      res.json([result.symbol, result.displayName]);
    } else {
      res.json([result.symbol]);
    }
  }

  next();
});

export default router



/**
 * 
 *   let stock = await quotes.overview(ticker);
 *   let cashFlow = await financials.cashFlow(ticker).annual();
  let incomeStmt = await financials.income(ticker).annual();
  let balanceSht = await financials.balanceSheet(ticker).annual();
 */
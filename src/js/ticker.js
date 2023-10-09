import express from "express";
import yahooFinance from "yahoo-finance2";
const router = express.Router();

//get data for: income statement, balance sheet, cash flow;
//measurements of profitability;
//render stock profile ejs file;
router.get("/:ticker", async (req, res, next) => {
  let ticker = req.params.ticker;
  //validation:
  let result;
  try {
    result = await yahooFinance.quote(ticker);
  } catch (error) {
    console.warn(`Error:${error}`);
    return
  }
  
   if (!result) {
     res.sendStatus(400);
     return;
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
 */
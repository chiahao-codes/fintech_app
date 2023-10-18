import express from "express";
import path from "path";
const router = express.Router();

//get data for: income statement, balance sheet, cash flow;
//measurements of profitability;
//render stock profile ejs file;
router.get("/:ticker", async (req, res, next) => {
 
  let ticker = req.params.ticker;
  //validation:
  //run an imported function that grabs data based on the ticker, then send html file;
 // let result = await yahooFinance.quote(ticker).then((result) => { return result }).catch((e)=>{return e});
  return res.sendFile(path.join("C:/Desktop/Ticqer", "/dist/ticker.html"));
   
});

export default router


/**
 *  if (!result || result.errors) {
     res.sendStatus(400);
     return;
   } else {
 */
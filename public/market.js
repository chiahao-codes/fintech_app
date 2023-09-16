import express from 'express';
import cnbcMarket from 'cnbc-market';
const routerM = express.Router();


routerM.get("/", async (req, res, next) => {
  let marketData = await cnbcMarket();
  console.log(marketData);
  //might need to iterate over marketData and declare variables for ejs use.
  res.render("market.ejs", {
    //declare variables for ejs usage;
    //key:value;
  });
  next();
});

export default routerM

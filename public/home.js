import express from 'express';
import cnbcMarket from 'cnbc-market';
const routerM = express.Router();

//might need to create setTimeout function to auto-refresh data;

routerM.get("/", async (req, res, next) => {
  let marketData = await cnbcMarket();
  console.log(marketData);
  //might need to iterate over marketData and declare variables for ejs use.

  res.render("home.ejs", {
    //declare variables for ejs usage;
    //key:value;
    snp: marketData[0]
  });
  next();
});

export default routerM

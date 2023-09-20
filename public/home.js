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
    snp: marketData[0],
    nasdaq: marketData[1],
    ftse: marketData[2],
    nikkei: marketData[3],
    hang: marketData[4],
    shanghai: marketData[5],
    wti: marketData[15],
    natgas: marketData[16],
    gold: marketData[17],
    silver: marketData[18],
    wheat: marketData[19],
    copper: marketData[20],
    doller: marketData[22],
    russell: marketData[28],
    tsx:marketData[29]
  });
  next();
});

export default routerM

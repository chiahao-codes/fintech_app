import express from "express";
import path from 'path';
import cnbcMarket from "cnbc-market";
const routerM = express.Router();

//let marketData = await cnbcMarket();

routerM.get("/", (req, res, next) => {
  return res.sendFile(path.join("C:/Desktop/Ticqer","/dist/homepage.html"));
  
});

export default routerM;


 /**
   *  res.render("home.ejs", {
    cnbc:cnbcMkt,
    snp: marketData[0],
    nasdaq: marketData[1],
    ftse: marketData[2],
    nikkei: marketData[3],
    hang: marketData[4],
    shanghai: marketData[5],
    vix: marketData[6],
    wti: marketData[15],
    natgas: marketData[16],
    gold: marketData[17],
    silver: marketData[18],
    ustenyr: marketData[8],
    dollar: marketData[22],
    eurusd: marketData[25],
    russell: marketData[28],
    marketClock: function () {
      let currFullDate = new Date();
      let currHour = currFullDate.getHours();
      let currMinutes = currFullDate.getMinutes();

      //market is open (PST):
      if (6 <= currHour && 30 <= currMinutes && currHour < 13) {
        return "true";
      }
      //market is closed (PST):
      if (13 <= currHour || currHour < 6) {
        return "false";
      }

      if (6 == currHour && currMinutes < 30) {
        return "false";
      }
    },
  });
   */
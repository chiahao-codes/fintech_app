import express from "express";
import cnbcMarket from "cnbc-market";
import countdown from "countdown";
const routerM = express.Router();
//const regExpMkt = /(Opening|Closing)/;

routerM.get("/", async (req, res, next) => {
  let marketData = await cnbcMarket();
  res.render("home.ejs", {
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
      if (6 < currHour && 30 < currMinutes) {
        if (currHour < 13) return true;
      }
      //market is closed (PST):
      if (13 < currHour || currHour < 6) {
        return false;
      }

      if (6 < currHour && currMinutes < 30) {
        return false;
      }
    },
    getIndexChange: (indexCh) => {
      let src = "",
        dir,
        counter = 0;
      let indexArrowUpdate = (indexCh) => {
        let regExp = /[-]/;
        dir = "up";

        if (regExp.test(indexCh)) {
          dir = "down";
        }

        return;
      };

      indexArrowUpdate(indexCh);
      src = `/assets/icons8-${dir}-arrow-17.ico`;

      setInterval(indexArrowUpdate, 5000, indexCh, dir, counter);

      return src;
    },
  });
  next();
});

export default [routerM, countdown];

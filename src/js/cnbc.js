import cnbcMarket from "cnbc-market";

let marketData = await cnbcMarket();

let cnbc = {
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
};

export default cnbc

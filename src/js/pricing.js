//update prices of index;
let updatePrices = (prices, runcnbc) => {
  //get prices from cnbc;
  let cnbcPrices = runcnbc();
  console.log(cnbcPrices);
  //iterate over prices;
  for (let i = 0; i < prices.length; i++) {
      let id = prices[i].id;
  }
};


export default updatePrices;


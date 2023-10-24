import Yahoo from "yahoo-finance-webscraper";

let yf2 = async (ticker) => {
    let quote = await Yahoo.getSingleStockInfo(ticker).then((data) => { return data }).catch((e) => { console.log(e); return });
   
    return quote
}

export default yf2
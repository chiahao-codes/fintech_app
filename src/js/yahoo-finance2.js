import { financials } from "barchart-dot-com";

let yf2 = async (ticker) => {
    let result = await financials.income(ticker).then((data) => { return data }).catch((e) => { console.log(e) });
    return result
}

export default yf2
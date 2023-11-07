import "../styles/style.scss";
import stockmkt from "../assets/stockmkt.png";

const tickerTab = document.querySelector("head > #title_logo");
//const companyNameHeader = document.querySelector("body > #stock_price_container > #company_name");

tickerTab.href = stockmkt;

const queryString = window.location.search;
const urlSearchParam = new URLSearchParams(queryString);
const ticker = urlSearchParam.get("symbol");

export default ticker
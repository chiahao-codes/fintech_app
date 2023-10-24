import "../styles/style.scss";
import stockmkt from "../assets/stockmkt.png";
import yf2 from "./yahoo-finance2.js";
const tickerTab = document.querySelector("head > #title_logo");
const companyNameHeader = document.querySelector("body > #stock_price_container > #company_name");

tickerTab.href = stockmkt;
//grab the ticker url param;
const queryString = window.location.search;
const urlSearchParam = new URLSearchParams(queryString);
const ticker = urlSearchParam.get("symbol");
let quote = yf2(ticker);
console.log(quote);

import "../styles/style.scss";
import runCnbc from "./cnbc.js";
import { marketStatusCheck, startCountDown } from "./clock.js";
import down17 from "../assets/down17.ico";
import up17 from "../assets/up17.ico";

const regExp = /[a-zA-Z]/;
const h2Box = document.querySelector("header>h2");
const index_container = document.querySelectorAll("body > section > .index_container");
const priceOfIndex = document.querySelectorAll("body > section > .index_container > .price");
console.log(priceOfIndex);
const imgContainer = document.querySelectorAll("section > .index_container > .img_container");
let mktStatus = marketStatusCheck();

document.querySelector( "body > #timer_container > h6").innerText = `${mktStatus} Bell in:`;
document.querySelector("body>#timer_container>#market_clock").innerText = startCountDown(mktStatus);

function clockImgInterval() {
  setInterval(() => {
    mktStatus = marketStatusCheck();
    document.querySelector( "body > #timer_container > h6").innerText = `${mktStatus} Bell in:`;
    document.querySelector("body>#timer_container>#market_clock").innerText = startCountDown(mktStatus);
  }, 1000);

  /* setInterval(() => {
    imgContainer.forEach((ele) => {
      let children = ele.children;
      let percentChangeTxt = children[1].innerText;
      let regExp = /[-]/;
      let dir = "";
      if (regExp.test(percentChangeTxt)) {
        children[1].style.color = "red";
        dir = "down";
      } else {
        children[1].style.color = "#00e813";
        dir = "up";
      }

      children[0].src = `/assets/icons8-${dir}-arrow-17.ico`;
    });
  }, 8000);*/
}
clockImgInterval();

//update prices of index;
let updatePrices = (prices, runcnbc) => {
  //get prices from cnbc;
  let cnbcPrices = runcnbc();
  console.log(cnbcPrices);
  //iterate over prices;
  for (let i = 0; i < prices.length; i++) {
    let id = prices[i].id;

    if (Object.hasOwn(cnbcPrices, id)) {
      //update html tag
      prices[i].innerText = cnbcPrices[id].value;
    }
  }
};

updatePrices(priceOfIndex, runCnbc);

imgContainer.forEach((ele) => {
  let children = ele.children;
  let percentChangeTxt = children[1].innerText;
  let regExp = /[-]/;
  let dir = "";
  if (regExp.test(percentChangeTxt)) {
    children[1].style.color = "red";
    dir = "down";
  } else {
    children[1].style.color = "#00e813";
    dir = "up";
  }

  children[0].src = `/assets/icons8-${dir}-arrow-17.ico`;
});

h2Box.addEventListener("click", () => {
  const h2ChildNodes = h2Box.childNodes;
  const selection = window.getSelection();
  if (h2Box.innerText === "Enter ticker...") {
    h2Box.innerText = "";
  }
  //set caret position after text node

  if (h2ChildNodes.length > 0) {
    selection.setPosition(h2ChildNodes[0], h2ChildNodes[0].length);
  } else {
    selection.setPosition(h2Box, 0);
  }

  return;
});

h2Box.addEventListener("focus", () => {
  const h2ChildNodes = h2Box.childNodes;
  const selection = window.getSelection();
  if (h2Box.innerText === "Enter ticker...") {
    h2Box.innerText = "";
  }
  //set caret position after text node

  if (h2ChildNodes.length > 0) {
    selection.setPosition(h2ChildNodes[0], h2ChildNodes[0].length);
  } else {
    selection.setPosition(h2Box, 0);
  }

  return;
});

h2Box.addEventListener("keydown", (e) => {
  let textString = h2Box.innerText;
  if (textString.length >= 5 && e.key !== "Backspace" && e.key !== "Enter") {
    e.preventDefault();
    alert("Character amount exceeded");
  }

  //prevent navigation keys;
  //enter ticker into url param;
  if (textString.length > 0) {
    let navKeys = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowDown",
      "ArrowUp",
      "Left",
      "Right",
      "Up",
      "Down",
      "Home",
      "End",
      "Del",
      "Delete",
      "PageUp",
      "PageDown",
      "Insert",
    ];

    for (const ele of navKeys) {
      if (e.key === ele) {
        e.preventDefault();
        alert("Invalid entry");
      }
    }

    if (textString === "" && e.key === "Enter") {
      e.preventDefault();
      alert("enter a valid ticker");
    }

    if (e.key === "Enter" && textString !== "") {
      //enter the ticker string into the url parameter
      //grab the URL;
      let url = window.location.href;
      let tickerSearch = url + "stock/" + textString;
      window.location.href = tickerSearch;
    }
  }

  //prevent non-letters
  //Allow Backspace, Enter keys;
  //Note: navigation keys are failing the regexp test;
  if (regExp.test(e.key) === false) {
    if (e.key !== "Backspace" && e.key !== "Enter") {
      e.preventDefault();
      alert("Invalid entry");
    }
  }

  return;
});

h2Box.addEventListener("keyup", (e) => {
  //needed for removing auto-generated divs in mozilla vs. chrome;
  let divBr = document.querySelector("h2 div");
  let brList = document.querySelectorAll("h2 br");
  if (e.key === "Backspace" || e.key === "Enter") {
    if (brList.length > 0) {
      for (br of brList) {
        if (br) br.remove();
      }
    }
    if (divBr) {
      divBr.remove();
    }
  }

  return;
});

export const tickerString = h2Box.innerText;

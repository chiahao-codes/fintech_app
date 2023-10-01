const regExp = /[a-zA-Z]/;
const h2Box = document.querySelector("header>h2");
const idxPercentChangeColor = document.querySelectorAll(
  "section > .index_container > .img_container > .percent_change"
);
const regExpMkt = /(Opening|Closing)/;
const mktStatusText = document.querySelector("body > #timer_container > h6").innerText;

const marketStatus = regExpMkt.exec(mktStatusText)[0];
console.log(marketStatus);

let startCountDown = (mkt) => {
  let currFullDate = new Date();
  let currDate = currFullDate.getDate();
  let currMonth = currFullDate.getMonth();
  let currYear = currFullDate.getFullYear();
  let dayOfWeek = currFullDate.getDay();
  let nextDay = currDate + 1;

  let openingBellCountdown = () => {
    
    //if next day is a weekend:
    if (dayOfWeek === 5) nextDay = currDate + 3;
    if (dayOfWeek === 6) nextDay = currDate + 2;

    console.log("nextDay:", nextDay);

    //set next morning: 6:30am PST
    let openingBell = new Date(
      currYear,
      currMonth,
      nextDay,
      6,
      30,
      0,
      0
    ).getTime();

    let now = Date.now();
    let timeUntilOpening = openingBell - now;

    let days = Math.floor(timeUntilOpening / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeUntilOpening % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeUntilOpening % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeUntilOpening % (1000 * 60)) / 1000);

    /**
     *   let countdownTime = countdown(
      null,
      openingBell,
      countdown.HOURS & countdown.MINUTES & countdown.SECONDS
    ).toString();
     */
    //console.log(countdownTime);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  let closingBellCountdown = () => {

    let closingBell = new Date(
      currYear,
      currMonth,
      currDate,
      13,
      0,
      0
    ).getTime();

    let rightNow = Date.now();

    let timeUntilClosing = closingBell - rightNow;

    let hours = Math.floor(
      (timeUntilClosing % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor(
      (timeUntilClosing % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor((timeUntilClosing % (1000 * 60)) / 1000);

    /**
     *     let countdownTime = countdown(
      null,
      closingBell,
      countdown.HOURS & countdown.MINUTES & countdown.SECONDS
    ).toString();
    console.log(countdownTime);
     */
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  let openingClosingFunc, counter;

  if (mkt === "Opening") {
    counter = openingBellCountdown();
    openingClosingFunc = openingBellCountdown;
  }

  if (mkt === "Closing") {
    counter = closingBellCountdown();
    openingClosingFunc = closingBellCountdown;
  }
  
  //let id = setInterval(openingClosingFunc, 1000);
  return counter;
};
function interval() {
  setInterval(() => {
    document.querySelector("body>#timer_container>#market_clock").innerText =
      startCountDown(marketStatus);
  }, 1000);
}
document.querySelector("body>#timer_container>#market_clock").innerText = startCountDown(marketStatus);
interval();

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

h2Box.addEventListener("keydown", (e) => {
  let textString = h2Box.innerText;
  if (textString.length >= 5 && e.key !== "Backspace" && e.key !== "Enter") {
    e.preventDefault();
    alert("Character amount exceeded");
  }

  //prevent navigation keys;
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

    if (e.key === "Enter") {
      //enter the ticker string into the url parameter
      //grab the URL;
      let url = window.location.href;
      let tickerSearch = url + "stock/" + textString;
      window.location.href = tickerSearch;
    }
  }

  if (textString === "" && e.key === "Enter") {
    e.preventDefault();
    alert("enter a valid ticker");
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

idxPercentChangeColor.forEach((ele) => {
  let regExpDash = /[-]/;

  if (regExpDash.test(ele.innerText)) {
    ele.style.color = "red";
  } else {
    ele.style.color = "#07e342";
  }

  return ele;
});

export const tickerString = h2Box.innerText;

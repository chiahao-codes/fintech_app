import '../styles/style.scss';
import cnbc from './cnbc.js';
import getDateObj from './date.js';
import down17 from '../assets/down17.ico';
import up17 from '../assets/up17.ico';
const regExp = /[a-zA-Z]/;
const h2Box = document.querySelector("header>h2");

const imgContainer = document.querySelectorAll(
  "section > .index_container > .img_container"
); 

let dateObj = getDateObj();

//check market status:
const marketStatusCheck = (dayOfWeek, currHour, currMin) => {
  let status = "Opening";

  if (0 < dayOfWeek && dayOfWeek < 6) {
    if (currHour === 6 && currMin >=30 || currHour<13) {
      //market is open:
      status = "Closing"
    }
  }

  return status
  
}

let startCountDown = (mkt, dateObj) => {
  //dayOfWeek, nextDay, currDate, currHour, currYear, currMonth
  let openingBellCountdown = () => {
    //if next day is a weekend:
    if (dateObj.dayOfWeek === 5) dateObj.nextDay = dateObj.currDate + 3;
    if (dateObj.dayOfWeek === 6) dateObj.nextDay = dateObj.currDate + 2;

    if (0 <= dateObj.currHour && dateObj.currHour <= 6) {
      dateObj.nextDay = dateObj.currDate;
    }

    //set next morning: 6:30am PST
    let openingBell = new Date(
      dateObj.currYear,
      dateObj.currMonth,
      dateObj.nextDay,
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
    let minutes = Math.floor(
      (timeUntilOpening % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor((timeUntilOpening % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  let closingBellCountdown = () => {
    let closingBell = new Date(
      dateObj.currYear,
      dateObj.currMonth,
      dateObj.currDate,
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

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  let counter;

  if (mkt === "Opening") {
    counter = openingBellCountdown();
  }

  if (mkt === "Closing") {
    counter = closingBellCountdown();
  }

  return counter;
};

var mktStatus = marketStatusCheck(dateObj.dayOfWeek, dateObj.currHour, dateObj.currMin);
document.querySelector("body > #timer_container > h6").innerText = `${mktStatus} Bell in:`;
document.querySelector("body>#timer_container>#market_clock").innerText = startCountDown(mktStatus, dateObj);

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

function clockImgInterval() {
  setInterval(() => {
    document.querySelector("body>#timer_container>#market_clock").innerText =
      startCountDown(mktStatus);
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

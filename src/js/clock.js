var currFullDate = new Date();
var currDate = currFullDate.getDate();
var currMonth = currFullDate.getMonth();
var currYear = currFullDate.getFullYear();
var dayOfWeek = currFullDate.getDay();
var currHour = currFullDate.getHours();
var currMin = currFullDate.getMinutes();
var nextDay = currFullDate.getDate() + 1;

//check market status:
const marketStatusCheck = () => {
  let status = "Opening";

  if (0 < dayOfWeek && dayOfWeek < 6) {
    if (currHour === 6 && currMin >=30 || currHour<13) {
      //market is open:
      status = "Closing"
    }
  }

  return status
  
}

let startCountDown = (mkt) => {
  //dayOfWeek, nextDay, currDate, currHour, currYear, currMonth
  let openingBellCountdown = () => {
    //if next day is a weekend:
    if (dayOfWeek === 5) nextDay = currDate + 3;
    if (dayOfWeek === 6) nextDay = currDate + 2;

    if (0 <= currHour && currHour <= 6) {
      nextDay = currDate;
    }

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
    let minutes = Math.floor(
      (timeUntilOpening % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor((timeUntilOpening % (1000 * 60)) / 1000);

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

export {marketStatusCheck, startCountDown}
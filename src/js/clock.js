//check market status:
const mktStatusNotification = (mktstatus, mktnotify) => {
  if (mktstatus === "Opening") {
    mktnotify.innerText = `U.S. markets closed`;
  } else {
    mktnotify.innerText = `U.S. markets open`;
  }
};

const marketStatusCheck = () => {
  let currFullDate = new Date();
  let dayOfWeek = currFullDate.getDay();
  let currHour = currFullDate.getHours();
  let currMin = currFullDate.getMinutes();

  let status = "Opening";

  if (0 < dayOfWeek && dayOfWeek < 6) {
    if ((currHour === 6 && currMin >= 30) || (currHour < 13 && currHour >= 7)) {
      //market is open:
      status = "Closing";
    }
  }

  return status;
};

let startCountDown = (mkt) => {
  let currFullDate = new Date();
  let currDate = currFullDate.getDate();
  let currMonth = currFullDate.getMonth();
  let currYear = currFullDate.getFullYear();
  let dayOfWeek = currFullDate.getDay();
  let currHour = currFullDate.getHours();

  let nextDay = currFullDate.getDate() + 1;
  //dayOfWeek, nextDay, currDate, currHour, currYear, currMonth
  let openingBellCountdown = () => {
    //if next day is a weekend:
    if (dayOfWeek === 5) nextDay = currDate + 3;
    if (dayOfWeek === 6) nextDay = currDate + 2;
    if (dayOfWeek === 0) nextDay = currDate + 1;

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

export { marketStatusCheck, startCountDown, mktStatusNotification};

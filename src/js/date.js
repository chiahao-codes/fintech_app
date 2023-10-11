let getDateObj = () => {
    let currFullDate = new Date();
    let date = {
     currDate : currFullDate.getDate(),
     currMonth : currFullDate.getMonth(),
     currYear : currFullDate.getFullYear(),
     dayOfWeek : currFullDate.getDay(),
     currHour : currFullDate.getHours(),
     currMin : currFullDate.getMinutes(),
     nextDay : currFullDate.getDate() + 1
    }
     

    return date
}

export default getDateObj



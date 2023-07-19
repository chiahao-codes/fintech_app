let regExp = /[^a-z.A-Z]/;

let tickerText = document.querySelector("header h2");
console.log(tickerText);

tickerText.addEventListener("click", () => {
    if (tickerText.innerText === "Enter ticker...") {
        tickerText.innerText = "";
    }
    return
})

tickerText.addEventListener("keydown", (e) => {
    let h2InnerHtml = tickerText.innerHTML;

    if (regExp.test(e.key)) {
        e.preventDefault();
        alert("Invalid entry")
    }

   

  return;
});

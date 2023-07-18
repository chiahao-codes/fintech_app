//if KeyboardEvent.key = " ", remove the whitespace.

let tickerText = document.querySelector("header h2");
console.log(tickerText);
tickerText.addEventListener("click", () => {

    if (tickerText.innerText === "Enter ticker...") {
        tickerText.innerText = "";
    }
    return
})
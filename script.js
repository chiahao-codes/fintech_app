//if KeyboardEvent.key = " ", remove the whitespace.


tickerText.addEventListener("click", () => {
    let tickerText = document.querySelector("header h2");
    if (tickerText.innerText === "Enter ticker...") {
        tickerText.innerText = "";
    }
    return
})
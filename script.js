//if KeyboardEvent.key = " ", remove the whitespace.

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
    if (e.key === " ") {
        e.preventDefault();
        alert("No whitespaces");
    }
    if (regExp.test(tickerText.innerText)) {
      alert("Invalid entry")
    tickerText.innerText = "";
  }
  return;
});
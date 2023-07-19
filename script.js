let regExp = /[^a-z.A-Z]/;

let h2Box = document.querySelector("header h2");

h2Box.addEventListener("click", () => {
    if (h2Box.innerText === "Enter ticker...") {
        h2Box.innerText = "";
    }
    return
})

h2Box.addEventListener("keydown", (e) => {
    if (regExp.test(e.key)) {
        e.preventDefault();
        alert("Invalid entry")
    }

    return 
});

h2Box.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
        console.log(h2Box);
    }
})
let regExp = /[^a-z.A-Z]/;

let h2Box = document.querySelector("header h2");
console.log(h2Box);

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
